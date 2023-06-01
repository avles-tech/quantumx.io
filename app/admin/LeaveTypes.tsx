import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, Filter } from "react-admin";

const LeaveTypesFilter = (props: any) => (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn inputProps={{ style: { width: '500px' } }} />
    </Filter>
  );



export const LeaveTypeList = () => (
    <>
        <h1>Leave Type List</h1>
        <List filters={<LeaveTypesFilter/>}>
        <Datagrid rowClick="edit">
            <TextField source="Leave Type Code" />
            <TextField source="Leave Type Details" />
            <TextField source="Minimum Hours" />
            <TextField source="Number of Split" />
            <BooleanField source="Consider Time When Calculating Leave" title="Active" />
            <BooleanField source="Count Leaves Including Holidays" title="Active" />
            <TextField source="Short Code" />
        </Datagrid>
    </List>
    </>
);

export const LeaveTypeEdit = () => (
    <Edit>
        <SimpleForm>
        <TextInput source="Leave Type Code" />
            <TextInput source="Leave Type Details" />
            <TextInput source="Minimum Hours" />
            <TextInput source="Number of Split" />
            <BooleanInput source="Consider Time When Calculating Leave" title="Active" />
            <BooleanInput source="Count Leaves Including Holidays" title="Active" />
            <TextInput source="Short Code" />
        </SimpleForm>
    </Edit>
);

export const LeaveTypeCreate = () => (
    <Create>
        <SimpleForm>
        <TextInput source="Leave Type Code" />
            <TextInput source="Leave Type Details" />
            <TextInput source="Minimum Hours" />
            <TextInput source="Number of Split" />
            <BooleanInput source="Consider Time When Calculating Leave" title="Active" />
            <BooleanInput source="Count Leaves Including Holidays" title="Active" />
            <TextInput source="Short Code" />
        </SimpleForm>
    </Create>
);