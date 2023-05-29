'use client '
import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create } from "react-admin";

const gradeFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];

export const GradeList = () => (
    <List filter={gradeFilters } >
        <Datagrid rowClick="edit">
            <TextField source="details" />
            <BooleanField source="ignoreLateArrival" title="Ignore Late Arrival" />
            <BooleanField source="ignoreEarlyDeparture" title="Ignore Early Departure" />
            <BooleanField source="active" title="Active" />

        </Datagrid>
    </List>
);

export const GradeEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />

            <TextInput source="details" />
            <BooleanInput source="ignoreLateArrival" />
            <BooleanInput source="ignoreEarlyDeparture" />
            <BooleanInput source="active" />
        </SimpleForm>
    </Edit>
);

export const GradeCreate = () => (
    <Create>
        <SimpleForm>
            
            <TextInput source="details" />
            <BooleanInput source="ignoreLateArrival" />
            <BooleanInput source="ignoreEarlyDeparture" />
            <BooleanInput source="active" />
        </SimpleForm>
    </Create>
);