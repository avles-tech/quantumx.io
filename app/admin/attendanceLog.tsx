import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, Filter, DateTimeInput, DateField } from "react-admin";

const AttendanceLogFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn inputProps={{ style: { width: '500px' } }} />
  </Filter>
);

const AttendanceLogForm = (props: any) => (
  <SimpleForm>
    <TextInput source="batchId" label='Batch ID' />
    <TextInput source="cardId" label='Card ID'/>
    <DateTimeInput
      source="dateTime"
      label="Date & Time"
      type="datetime-local"
      inputProps={{
        format: 'dd:MM:yyyy' , placeholder: 'dd:MM:yyyy',
        ampm: false,
      }}
    />
    <TextInput source="deviceId" label='Device ID'/>
    <TextInput source="attdType" label='Attendance Type'/>
    <TextInput source="trtRecord" label='TRT Record'/>
  </SimpleForm>
);

export const AttendanceLogList = () => (
  <>
    <h1>Attendance Log</h1>
    <List filters={<AttendanceLogFilter />}>
      <Datagrid rowClick="edit">
        <TextField source="batchId" label='Batch ID' />
        <TextField source="cardId" label='Card ID'/>
        <DateField
          source="dateTime"
          showTime
          showDate
          label="Date & Time"
          locale="en-GB"
          options={{ day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false }}
          />            
        <TextField source="deviceId" label='Device ID'/>
        <TextField source="attdType" label='Attendance Type'/>
        <TextField source="trtRecord" label='TRT Record'/>
      </Datagrid>
    </List>
  </>
);

export const AttendanceLogEdit = () => (
  <Edit>
    <h1>Edit Attendance Log</h1>
    <AttendanceLogForm />
  </Edit>
);

export const AttendanceLogCreate = () => (
  <Create>
    <h1>Create Attendance Log</h1>
    <AttendanceLogForm />
  </Create>
);
