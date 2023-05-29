import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create } from "react-admin";

export const DepartmentList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="shortCode" />
            <TextField source="details" />
            <BooleanField source="active" title="Active" />

        </Datagrid>
    </List>
);

export const DepartmentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="shortCode" />
            <TextInput source="details" />
            <BooleanInput source="active" />
        </SimpleForm>
    </Edit>
);

export const DepartmentCreate = () => (
    <Create>
        <SimpleForm>

            <TextInput source="shortCode" />
            <TextInput source="details" />
            <BooleanInput source="active" />
        </SimpleForm>
    </Create>
);