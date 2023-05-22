'use client';
import { useState  } from 'react';
import CustomeAlert from '@/app/componenets/CustomeAlert';

const MyForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [created, setCreated] = useState(false);

  const [details, setDetails] = useState('');
  const [ignoreLateArrival, setIgnoreLateArrival] = useState(false);
  const [ignoreEarlyDepature, setIgnoreEarlyDepature] = useState(false);
  const [active, setActive] = useState(false);

  

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setCreated(false);
    setIsLoading(true);
    try {
       await fetch('/grade/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ details: details, ignoreLateArrival: ignoreLateArrival, ignoreEarlyDepature: ignoreEarlyDepature, active: active }),
      });

      setCreated(true);

      setTimeout(() => {
        setCreated(false);
      }, 1000);
     
     setDetails('');
     setIgnoreLateArrival(false);
     setIgnoreEarlyDepature(false);
     setActive(false);
      
     
    } catch (error) {
      console.error('An error occurred while creating the grade:', error);
    } finally {
      setIsLoading(false);
    }
  };

 




  return (
    <div className='m-8'>
      {isLoading && <CustomeAlert text='creating a new grade'/>}
      {created && <CustomeAlert text='a new grade has been created'/>}
    
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="details" className="block text-gray-700 font-semibold mb-2">
            Details:
          </label>
          <input
            type='text'
            id="details"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"

            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></input>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="ignoreLateArrival"
            type="checkbox"
            className="mr-2 form-checkbox text-blue-500"
            checked={ignoreLateArrival}
            onChange={(e) => setIgnoreLateArrival(e.target.checked)}
          />
          <label htmlFor="ignoreLateArrival" className="text-gray-700">
            Ignore Late Arrival
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="ignoreEarlyDepature"
            type="checkbox"
            className="mr-2 form-checkbox text-blue-500"
            checked={ignoreEarlyDepature}
            onChange={(e) => setIgnoreEarlyDepature(e.target.checked)}
          />
          <label htmlFor="ignoreEarlyDepature" className="text-gray-700">
            Ignore Early Departure
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="active"
            type="checkbox"
            className="mr-2 form-checkbox text-blue-500"
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
          />
          <label htmlFor="active" className="text-gray-700">
            Active
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
