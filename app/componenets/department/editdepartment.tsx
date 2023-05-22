const EditDepartment: React.FC<{ departmentId: string , alertItemDeletedInfo : Function, setReload : Function}> = ({ departmentId }) => {
    // Fetch department details based on departmentId ,
    // You can use useEffect to fetch the data from the server or data source
  
    // Handle form submission to edit the department
  
    return (
      <div>
        <h1>Edit Department</h1>
        <p>Editing Department ID: {departmentId}</p>
        {/* Form for editing the department */}
      </div>
    );
  };

  export default EditDepartment