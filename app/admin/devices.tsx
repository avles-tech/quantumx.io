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
          <TextField source="machineName" label='Machine Name' />
          <TextField source="ipAddress" label='IP Address'/>
          <TextField source="port" label='Port'/>
        </Datagrid>
      </List>
    </>
  );

export const DevicesEdit = () => (
    <Edit>
        <SimpleForm>
        <h1>Edit Device Details</h1>
            <TextInput source="machineName" label='Machine Name'/>
            <TextInput source="ipAddress" label='IP Address'/>
            <TextInput source="port" label='Port'/>
        </SimpleForm>
    </Edit>
);

export const DevicesCreate = () => (
    <Create>
        <SimpleForm>
            <h1>Create Device Details</h1>
            <TextInput source="machineName" label='Machine Name'/>
            <TextInput source="ipAddress" label='IP Address'/>
            <TextInput source="port" label='Port'/>
        </SimpleForm>
    </Create>
);