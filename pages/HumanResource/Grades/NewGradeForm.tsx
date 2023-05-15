import { useState } from 'react';

import RootLayout from '@/app/layout';

interface Grade {
  details: string;
  ignoreLateArrival: boolean;
  ignoreEarlyDepature: boolean;
  active: boolean;
}



const NewGradeForm: React.FC  = () => {
  const [formData, setFormData] = useState<Grade>({
    details: '',
    ignoreLateArrival: false,
    ignoreEarlyDepature: false,
    active: false,
  });

  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
       
      const res = await fetch('/api/grades', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error('An error occurred while creating the grade:', error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="details">Details</label>
        <input
          type="text"
          id="details"
          name="details"
          value={formData.details}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="ignoreLateArrival">Ignore Late Arrival</label>
        <input
          type="checkbox"
          id="ignoreLateArrival"
          name="ignoreLateArrival"
          checked={formData.ignoreLateArrival}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="ignoreEarlyDepature">Ignore Early Departure</label>
        <input
          type="checkbox"
          id="ignoreEarlyDepature"
          name="ignoreEarlyDepature"
          checked={formData.ignoreEarlyDepature}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="active">Active</label>
        <input
          type="checkbox"
          id="active"
          name="active"
          checked={formData.active}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Create Grade</button>
    </form>
  );
  
};

export default NewGradeForm;
