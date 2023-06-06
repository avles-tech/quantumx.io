import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, Filter } from "react-admin";

const AttendanceLogFilter = (props: any) => (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn inputProps={{ style: { width: '500px' } }} />
    </Filter>
  );

  const AttendanceLogForm = (props: any) => (
    <SimpleForm>
            <TextInput source="machineName" />
            <TextInput source="ipAddress" />
            <TextInput source="port" />
        </SimpleForm>
  )
  export const AttendanceLogList = () => (
    <>
      <h1>AttendanceLogt</h1>
      <List filters={<AttendanceLogFilter />}>
        <Datagrid rowClick="edit">
          <TextField source="machineName" label='Machine Name' />
          <TextField source="ipAddress" label='IP Address'/>
          <TextField source="port" label='Port'/>
        </Datagrid>
      </List>
    </>
  );

export const AttendanceLogEdit = () => (
    <Edit>
        <AttendanceLogForm />
    </Edit>
);

export const AttendanceLogCreate = () => (
    <Create>
        <AttendanceLogForm />
    </Create>
);