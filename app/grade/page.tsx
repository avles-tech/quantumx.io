import { getAllDocuments } from '@/lib/mongodb';
import React from 'react'

async function fetchGrages() {
  const response = await getAllDocuments('grades');
  return response.documents;
}

const GradesPage = async () => {
  var data = await fetchGrages();
    console.log(data);
  return (
    <>
      <h1> Grades</h1>
      <ul>
        {data.map((grade : any) => (
          <li key={grade._id}>{grade.details}</li>
        ))
}
      </ul>
    </>
  )
}

export default GradesPage

// whats the url for this page?
// http://localhost:3000/HumanResource/Grades