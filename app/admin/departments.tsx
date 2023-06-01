import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, Filter } from "react-admin";

const DepartmentsFilter = (props: any) => (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn inputProps={{ style: { width: '500px' } }} />
    </Filter>
  );


  export const DepartmentList = () => (
    <>
      <h1>Departments List</h1>
      <List filters={<DepartmentsFilter />}>
        <Datagrid rowClick="edit">
          <TextField source="shortCode" />
          <TextField source="details" />
          <BooleanField source="active" label="Active" />
        </Datagrid>
      </List>
    </>
  );

export const DepartmentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="shortCode" />
            <TextInput source="details" />
            <BooleanInput source="active" />
        </SimpleForm>
    </Edit>
);

export const DepartmentCreate = () => (
    <Create>
        <SimpleForm>

            <TextInput source="shortCode" />
            <TextInput source="details" />
            <BooleanInput source="active" />
        </SimpleForm>
    </Create>
);