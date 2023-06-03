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
                <TextField source="details" />
                <BooleanField source="ignoreLateArrival" title="Ignore Late Arrival" />
                <BooleanField source="ignoreEarlyDeparture" title="Ignore Early Departure" />
                <BooleanField source="active" title="Active" />

            </QDatagrid>
        </List>
    </>
);

export const GradeEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="details" />
            <BooleanInput source="ignoreLateArrival" />
            <BooleanInput source="ignoreEarlyDeparture" />
            <BooleanInput source="active" />
        </SimpleForm>
    </Edit>
);

export const GradeCreate = () => (
    <Create redirect="list">
        <SimpleForm>
            <TextInput source="details" />
            <BooleanInput source="ignoreLateArrival" />
            <BooleanInput source="ignoreEarlyDeparture" />
            <BooleanInput source="active" />
        </SimpleForm>
    </Create>
);