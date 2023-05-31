import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create } from "react-admin";

export const LeaveTypeList = () => (
    <List>
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