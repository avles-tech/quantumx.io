import { GetServerSidePropsContext, GetServerSideProps } from 'next';
import { MongoClient } from 'mongodb';

interface Grade {
  details: string;
  ignoreLateArrival: boolean;
  ignoreEarlyDepature: boolean;
  active: boolean;
}

interface GradesProps {
  grades: Grade[];
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const client = new MongoClient(process.env.MONGODB_URI!);
  
    await client.connect();
  
    const db = client.db(process.env.MONGODB_DB); // database name
    const gradesCollection = db.collection('grades'); // collection name
  
    const grades: Grade[] = await gradesCollection.find({}).toArray() as unknown as Grade[];
    client.close();
  
    return {
      props: {
        grades: JSON.parse(JSON.stringify(grades)),
      },
    };
  }

  const Grades: React.FC<GradesProps> = ({ grades }) => {
    return (
      <div>
        <h1>Grades</h1>
        {grades.map((grade, index) => (
          <div key={index}>
            <h2>{grade.details}</h2>
            <p>Ignore Late Arrival: {grade.ignoreLateArrival ? 'Yes' : 'No'}</p>
            <p>Ignore Early Departure: {grade.ignoreEarlyDepature ? 'Yes' : 'No'}</p>
            <p>Active: {grade.active ? 'Yes' : 'No'}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Grades;

