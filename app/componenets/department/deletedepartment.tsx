const DeleteDepartment: React.FC<{ departmentId: string }> = ({ departmentId }) => {
    // Handle deletion of the department
  
    return (
      <div>
        <h1>Delete Department</h1>
        <p>Deleting Department ID: {departmentId}</p>
        {/* Confirmation message and delete button */}
      </div>
    );
  };

  export default DeleteDepartment