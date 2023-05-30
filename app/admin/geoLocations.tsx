import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, ReferenceField } from "react-admin";

export const GeoLocationList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="shortCode" />
            <TextField source="details" />
            <ReferenceField source="shiftId" reference="shifts" />

        </Datagrid>
    </List>
);

export const GeoLocationEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="shortCode" />
            <TextInput source="details" />
            <ReferenceInput source="shiftId" reference="shifts" />
        </SimpleForm>
    </Edit>
);

export const GeoLocationCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="shortCode" />
            <TextInput source="details" />
            <ReferenceInput source="shiftId" reference="shifts" />
        </SimpleForm>
    </Create>
);