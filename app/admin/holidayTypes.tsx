import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, Filter, DateTimeInput } from "react-admin";


const HolidayTypesFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn inputProps={{ style: { width: '500px' } }} />
    </Filter>
);

export const HolidayTypeList = () => (
    <>
        <h1>Holiday Types List</h1>
        <List filters={<HolidayTypesFilter />}>
            <Datagrid rowClick="edit">
                <TextField source="type" label='Type' />
                <TextField source="details" label='Details' />

            </Datagrid>
        </List>
    </>
);

export const HolidayTypeEdit = () => (
    <Edit>
        <SimpleForm>
            <h1>Edit Holiday Types</h1>
            <TextInput source="type" label='Type' />
            <TextInput source="details" label='Details' />
        </SimpleForm>
    </Edit>
);

export const HolidayTypeCreate = () => (
    <Create>
        <SimpleForm>
            <h1>Create Holiday Types</h1>
            <TextInput source="type" label='Type' />
            <TextInput source="details" label='Details' />
        </SimpleForm>
    </Create>
);