import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, Filter } from "react-admin";

const RosterFilter = (props: any) => (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn inputProps={{ style: { width: '500px' } }} />
    </Filter>
  );


export const RosterList = () => (
    <>
        <h1>Roster List</h1>
        <List filters={<RosterFilter/>}>
        <Datagrid rowClick="edit">
            <TextField source="Emp ID" />
            <TextField source="Name" />
            <TextField source="From" />
            <TextField source="To" />
            <TextField source="Shift Details" />
        </Datagrid>
    </List>
    </>
);

export const RosterEdit = () => (
    <Edit>
        <SimpleForm>
            <h1>Edit Roster</h1>
            <TextInput source="Emp ID" />
            <TextInput source="Name" />
            <TextInput source="From" />
            <TextInput source="To" />
            <TextInput source="Shift Details" />
        </SimpleForm>
    </Edit>
);

export const RosterCreate = () => (
    <Create>
        <SimpleForm>
            <h1>Create Roster</h1>
            <TextInput source="Emp ID" />
            <TextInput source="Name" />
            <TextInput source="From" />
            <TextInput source="To" />
            <TextInput source="Shift Details" />
        </SimpleForm>
    </Create>
);
