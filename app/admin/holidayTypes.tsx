import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create } from "react-admin";

export const HolidayTypeList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="Type" />
            <TextField source="Details" />

        </Datagrid>
    </List>
);

export const HolidayTypeEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="Type" />
            <TextInput source="Details" />
        </SimpleForm>
    </Edit>
);

export const HolidayTypeCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="Type" />
            <TextInput source="Details" />
        </SimpleForm>
    </Create>
);