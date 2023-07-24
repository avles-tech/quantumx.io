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
        <TextField source="shortcode" label='Short Code'/>
          <TextField source="machineName" label='Machine Name' />
          <TextField source="ipAddress" label='IP Address'/>
          <TextField source="port" label='Port'/>
          <TextField source="mid" label='MID'/>
          <TextField source="type" label='Type'/>
          <TextField source="baudrate" label='BaudRate'/>
          <BooleanField source="active" label='Active'/>
        </Datagrid>
      </List>
    </>
  );

export const DevicesEdit = () => (
    <Edit>
        <SimpleForm>
        <h1>Edit Device Details</h1>
        <TextInput source="shortcode" label='Short Code'/>
          <TextInput source="machineName" label='Machine Name' />
          <TextInput source="ipAddress" label='IP Address'/>
          <TextInput source="port" label='Port'/>
          <TextInput source="mid" label='MID'/>
          <TextInput source="type" label='Type'/>
          <TextInput source="baudrate" label='BaudRate'/>
          <BooleanInput source="active" label='Active'/>
        </SimpleForm>
    </Edit>
);

export const DevicesCreate = () => (
    <Create>
        <SimpleForm>
            <h1>Create Device Details</h1>
          <TextInput source="shortcode" label='Short Code'/>
          <TextInput source="machineName" label='Machine Name' />
          <TextInput source="ipAddress" label='IP Address'/>
          <TextInput source="port" label='Port'/>
          <TextInput source="mid" label='MID'/>
          <TextInput source="type" label='Type'/>
          <TextInput source="baudrate" label='BaudRate'/>
          <BooleanInput source="active" label='Active'/>
        </SimpleForm>
    </Create>
);