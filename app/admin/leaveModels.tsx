import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, Filter } from "react-admin";

const LeaveModelsFilter = (props: any) => (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn inputProps={{ style: { width: '1000px' } }} />
    </Filter>
  );


export const LeaveModelList = () => (
    <>
        <h1>Leave Models List</h1>
        <List filters={<LeaveModelsFilter/>}>
        <Datagrid rowClick="edit">
            <TextField source="shortCode" />
            <TextField source="details" />
            <BooleanField source="active" title="Active" />
        </Datagrid>
    </List>
    </>
);

export const LeaveModelEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="shortCode" />
            <TextInput source="details" />
            <BooleanInput source="active" />
        </SimpleForm>
    </Edit>
);

export const LeaveModelCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="shortCode" />
            <TextInput source="details" />
            <BooleanInput source="active" />
        </SimpleForm>
    </Create>
);