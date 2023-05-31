'use client '
import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, Filter } from "react-admin";

const GradeFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const GradeList = () => (
    <List filters={<GradeFilter />} >
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