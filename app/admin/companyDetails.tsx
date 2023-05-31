import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create } from "react-admin";

export const CompanyDetailsList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="Company Code" />
            <TextField source="Company Name" />
            <TextField source="Company Description" />
            <TextField source="Sector" />
            <TextField source="Registration ID" />
            <TextField source="Address" />
            <TextField source="Phone Number" />
        </Datagrid>
    </List>
);

export const CompanyDetailsEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="Company Code" />
            <TextInput source="Company Name" />
            <TextInput source="Company Description" />
            <TextInput source="Sector" />
            <TextInput source="Registration ID" />
            <TextInput source="Address" />
            <TextInput source="Phone Number" />
        </SimpleForm>
    </Edit>
);

export const CompanyDetailsCreate = () => (
    <Create>
        <SimpleForm>
        <TextInput source="Company Code" />
            <TextInput source="Company Name" />
            <TextInput source="Company Description" />
            <TextInput source="Sector" />
            <TextInput source="Registration ID" />
            <TextInput source="Address" />
            <TextInput source="Phone Number" />
        </SimpleForm>
    </Create>
);