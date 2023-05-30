import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create } from "react-admin";

export const RosterList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="Emp ID" />
            <TextField source="Name" />
            <TextField source="From" />
            <TextField source="To" />
            <TextField source="Shift Details" />
        </Datagrid>
    </List>
);

export const RosterEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="Emp ID" />
            <TextInput source="Name" />
            <TextInput source="From" />
            <TextInput source="To" />
            <TextInput source="Shift Details" />
        </SimpleForm>
    </Edit>
);

export const RosterCreate = () => (
    <Create>
        <SimpleForm>
        <TextInput source="Emp ID" />
            <TextInput source="Name" />
            <TextInput source="From" />
            <TextInput source="To" />
            <TextInput source="Shift Details" />
        </SimpleForm>
    </Create>
);