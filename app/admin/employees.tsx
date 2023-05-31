import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create } from "react-admin";

export const EmployeeList = () => (
    <List>
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
    </Create>
);