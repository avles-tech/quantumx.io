import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, Filter } from "react-admin";

const DevicesFilter = (props: any) => (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn inputProps={{ style: { width: '500px' } }} />
    </Filter>
  );


  export const DevicesList = () => (
    <>
      <h1>Devices List</h1>
      <List filters={<DevicesFilter />}>
        <Datagrid rowClick="edit">
          <TextField source="machineName" />
          <TextField source="ipAddress" />
          <TextField source="port" />
        </Datagrid>
      </List>
    </>
  );

export const DevicesEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="Machine Name" />
            <TextInput source="IP Address" />
            <TextInput source="Port" />
        </SimpleForm>
    </Edit>
);

export const DevicesCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="Machine Name" />
            <TextInput source="IP Address" />
            <TextInput source="Port" />
        </SimpleForm>
    </Create>
);