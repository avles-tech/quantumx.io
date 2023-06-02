import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, Filter, DateInput, SelectInput } from "react-admin";

const EmployeesFilter = (props: any) => (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn inputProps={{ style: { width: '500px' } }} />
    </Filter>
  );


  const validateTel = (tel: string) => {
    const telRegex = /^\d{10}$/; // Assumes a 10-digit telephone number format
    if (!tel.match(telRegex)) {
      return 'Please enter a valid telephone number';
    }
    return undefined; // Return undefined if the validation succeeds
  };

export const EmployeeList = () => (
    <>
        <h1>Employees List</h1>
        <List filters={<EmployeesFilter/>}>
        <Datagrid rowClick="edit">
            <TextField source="Emp. Code" label='Emp. Code' />
            {/* <TextField source="TRT ID"  label='TRT ID'/> */}
            <TextField source="Name with Initial" label='Name with Initial'/>
            <BooleanField source="active" title="Active" />
            <TextField source="Department" />
            <TextField source="Location" />
            <TextField source="Position" />
            {/* <TextField source="Leave Model" label='Leave Model'/>
            <TextField source="Date of Join" label='Date of Join' />
            <BooleanField source="Job Confirmed" title="Active" />
            <TextField source="NIC" label='NIC'/>
            <TextField source="First Name" label='First Name' />
            <TextField source="Middle Name" label='Middle Name'/>
            <TextField source="Last Name" label='Last Name'/>
            <TextField source="Date of Birth" label='Date of Birth'/>
            <TextField source="Remarks" />
            <TextField source="Gender" />
            <TextField source="Social Status" />
            <TextField source="Mobile" />
            <TextField source="Home Tel" label='Home Tel'/>
            <TextField source="Home Address" label='Home Address'/>
            <TextField source="Emergency Contact Person" label='Emergency Contact Person' />
            <TextField source=" Tel" label='Tel'/>
            <TextField source="Address" /> */}
        </Datagrid>
    </List>
</>
);

export const EmployeeEdit = () => (
    <Edit>
        <SimpleForm>
        <h1>Edit Employee Details</h1>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '25px' }}>
            <TextInput source="Emp. Code" label='Emp. Code'/>
            <TextInput source="TRT ID" label='TRT ID'/>
            <TextInput source="Name with Initial" label='Name with Initial'/>
            <BooleanInput source="active" title="Active" />
        </div>    
        <h2>Company</h2>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '8px' }}>
            <TextInput source="Department" />
            <TextInput source="Location" />
            <TextInput source="Position" />
         </div>   
         <div style={{ display: 'flex', gap: '20px', marginBottom:'25px'}}>
            <TextInput source="Leave Model" label='Leave Model'/>
            <DateInput source="Date of Join" label='Date of Join' />
            <BooleanInput source="Job Confirmed" title="Active" />
        </div>
        <h2>Personal</h2>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '4px' }}>
            <TextInput source="NIC" label='NIC'/>
            <TextInput source="First Name" label='First Name' />
            <TextInput source="Middle Name" label='Middle Name'/>
            <TextInput source="Last Name" label='Last Name'/>
        </div>
        <div style={{ display: 'flex', gap: '30px', marginBottom: '25px'}}>
            <DateInput source="Date of Birth" label='Date of Birth'/>
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
            <TextInput source="Mobile" validate={validateTel}/>
            <TextInput source="Home Tel" label='Home Tel'validate={validateTel} />
            <TextInput source="Home Address" label='Home Address'/>
        </div>
        <h4>Emergency</h4>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '25px'}}>
            <TextInput source="Emergency Contact Person" label='Emergency Contact Person'/>
            <TextInput source=" Tel" label='Tel'validate={validateTel}/>
            <TextInput source="Address" />
        </div>
        </SimpleForm>
    </Edit>
);

export const EmployeeCreate = () => (
    <Create>
        <SimpleForm>
        <h1>Create Employee Details</h1>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '25px' }}>
            <TextInput source="Emp. Code" label='Emp. Code'/>
            <TextInput source="TRT ID" label='TRT ID'/>
            <TextInput source="Name with Initial" label='Name with Initial'/>
            <BooleanInput source="active" title="Active" />
        </div>    
        <h2>Company</h2>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '8px' }}>
            <TextInput source="Department" />
            <TextInput source="Location" />
            <TextInput source="Position" />
         </div>   
         <div style={{ display: 'flex', gap: '20px', marginBottom:'25px'}}>
            <TextInput source="Leave Model" label='Leave Model'/>
            <DateInput source="Date of Join" label='Date of Join' />
            <BooleanInput source="Job Confirmed" title="Active" />
        </div>
        <h2>Personal</h2>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '4px' }}>
            <TextInput source="NIC" label='NIC'/>
            <TextInput source="First Name" label='First Name' />
            <TextInput source="Middle Name" label='Middle Name'/>
            <TextInput source="Last Name" label='Last Name'/>
        </div>
        <div style={{ display: 'flex', gap: '30px', marginBottom: '25px'}}>
            <DateInput source="Date of Birth" label='Date of Birth'/>
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
            <TextInput source="Mobile" validate={validateTel}/>
            <TextInput source="Home Tel" label='Home Tel'validate={validateTel} />
            <TextInput source="Home Address" label='Home Address' style={{ flex: 1, minWidth: '600px' }}/>
        </div>
        <h4>Emergency</h4>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '25px'}}>
            <TextInput source="Emergency Contact Person" label='Emergency Contact Person'/>
            <TextInput source=" Tel" label='Tel'validate={validateTel}/>
            <TextInput source="Address" />
        </div>
        </SimpleForm>
    </Create>
);