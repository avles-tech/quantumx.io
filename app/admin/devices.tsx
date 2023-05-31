import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create } from "react-admin";

export const DevicesList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="Machine Name" />
            <TextField source="IP Address" />
            <TextField source="Port" />
        </Datagrid>
    </List>
);

export const DevicesEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="Machine Name" />
            <TextInput source="IP Address" />
            <TextInput source="Port" />
        </SimpleForm>
    </Edit>
);

export const DevicesCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="Machine Name" />
            <TextInput source="IP Address" />
            <TextInput source="Port" />
        </SimpleForm>
    </Create>
);