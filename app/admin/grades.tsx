'use client '
import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, BooleanInput, Create, Filter } from "react-admin";
import QDatagrid from "./QDatagrid";

const GradeFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const GradeList = () => (
    <>
        <h1>Grade List</h1>
        <List filters={<GradeFilter />}  >
            <QDatagrid rowClick="edit"  >
                <TextField source="details" label='Details'/>
                <BooleanField source="ignoreLateArrival" label='Ignore Late Arrival' />
                <BooleanField source="ignoreEarlyDeparture" label='Ignore Early Departure' />
                <BooleanField source="active" label='Active' />

            </QDatagrid>
        </List>
    </>
);

export const GradeEdit = () => (
    <Edit>
        <SimpleForm>
            <h1>Edit Grade</h1>
            <TextInput source="details" label='Details'/>
            <BooleanInput source="ignoreLateArrival" label='Ignore Late Arrival'/>
            <BooleanInput source="ignoreEarlyDeparture" label='Ignore Early Departure'/>
            <BooleanInput source="active" label='Active' />
        </SimpleForm>
    </Edit>
);

export const GradeCreate = () => (
    <Create redirect="list">
        <SimpleForm>
            <h1>Create Grade</h1>
            <TextInput source="details" label='Details'/>
            <BooleanInput source="ignoreLateArrival" label='Ignore Late Arrival' />
            <BooleanInput source="ignoreEarlyDeparture" label='Ignore Early Departure'/>
            <BooleanInput source="active" label='Active' />
        </SimpleForm>
    </Create>
);