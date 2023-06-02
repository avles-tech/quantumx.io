import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, Filter, DateInput, SelectInput } from "react-admin";

const EmployeesFilter = (props: any) => (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn inputProps={{ style: { width: '500px' } }} />
    </Filter>
  );


export const EmployeeList = () => (
    <>
        <h1>Employees List</h1>
        <List filters={<EmployeesFilter/>}>
        <Datagrid rowClick="edit">
            <TextField source="Emp. Code" />
            <TextField source="TRT ID" />
            <TextField source="Name with Initial" />
            <BooleanField source="active" title="Active" />
            <TextField source="Department" />
            <TextField source="Location" />
            <TextField source="Position" />
            <TextField source="Leave Model" />
            <TextField source="Date of Join" />
            <BooleanField source="Job Confirmed" title="Active" />
            <TextField source="NIC" />
            <TextField source="First Name" />
            <TextField source="Middle Name" />
            <TextField source="Last Name" />
            <TextField source="Date of Birth" />
            <TextField source="Remarks" />
            <TextField source="Gender" />
            <TextField source="Married" />
            <TextField source="Mobile" />
            <TextField source="Home Tel" />
            <TextField source="Home Address" />
            <TextField source="Emergency Contact Person" />
            <TextField source=" Tel" />
            <TextField source="Address" />
        </Datagrid>
    </List>
</>
);

export const EmployeeEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="Emp. Code" />
            <TextInput source="TRT ID" />
            <TextInput source="Name with Initial" />
            <BooleanInput source="active" title="Active" />
            <TextInput source="Department" />
            <TextInput source="Location" />
            <TextInput source="Position" />
            <TextInput source="Leave Model" />
            <TextInput source="Date of Join" />
            <BooleanInput source="Job Confirmed" title="Active" />
            <TextInput source="NIC" />
            <TextInput source="First Name" />
            <TextInput source="Middle Name" />
            <TextInput source="Last Name" />
            <TextInput source="Date of Birth" />
            <TextInput source="Remarks" />
            <TextInput source="Gender" />
            <TextInput source="Married" />
            <TextInput source="Mobile" />
            <TextInput source="Home Tel" />
            <TextInput source="Home Address" />
            <TextInput source="Emergency Contact Person" />
            <TextInput source=" Tel" />
            <TextInput source="Address" />
        </SimpleForm>
    </Edit>
);

export const EmployeeCreate = () => (
    <Create>
        <SimpleForm>
        <h1>Create Employee Details</h1>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '25px' }}>
            <TextInput source="Emp. Code" />
            <TextInput source="TRT ID" />
            <TextInput source="Name with Initial" />
            <BooleanInput source="active" title="Active" />
        </div>    
        <h2>Company</h2>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '8px' }}>
            <TextInput source="Department" />
            <TextInput source="Location" />
            <TextInput source="Position" />
         </div>   
         <div style={{ display: 'flex', gap: '20px', marginBottom:'25px'}}>
            <TextInput source="Leave Model" />
            <DateInput source="Date of Join" />
            <BooleanInput source="Job Confirmed" title="Active" />
        </div>
        <h2>Personal</h2>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '4px' }}>
            <TextInput source="NIC" />
            <TextInput source="First Name" />
            <TextInput source="Middle Name" />
            <TextInput source="Last Name" />
        </div>
        <div style={{ display: 'flex', gap: '30px', marginBottom: '25px'}}>
            <DateInput source="Date of Birth" />
            <TextInput source="Remarks" />
            <SelectInput
                source="Gender"
                choices={[
                    { id: 'male', name: 'Male' },
                    { id: 'female', name: 'Female' },
                    { id: 'other', name: 'Other' },
          ]}
        />
            <SelectInput
                source="Social Status"
                choices={[
                    { id: 'married', name: 'Married' },
                    { id: 'single', name: 'Single' },
                    { id: 'divorced', name: 'Divorced' },
                    { id: 'widowed', name: 'Widowed' },
          ]}
        />
        </div>    
        
        <h2>Contact</h2>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '2px' }}>
            <TextInput source="Mobile" />
            <TextInput source="Home Tel" />
            <TextInput source="Home Address" />
        </div>
        <h4>Emergency</h4>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '25px'}}>
            <TextInput source="Emergency Contact Person" />
            <TextInput source=" Tel" />
            <TextInput source="Address" />
        </div>
        </SimpleForm>
    </Create>
);