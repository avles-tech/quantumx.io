import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, DateField, TimeInput, Filter } from "react-admin";

const ShiftsFilter = (props: any) => (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn inputProps={{ style: { width: '500px' } }} />
    </Filter>
  );

export const ShiftList = () => (
    <>
        <h1>Shift List</h1>
        <List filters={<ShiftsFilter/>}>
        <Datagrid rowClick="edit">
            <TextField source="shortCode" />
            <TextField source="details" />
            <BooleanField source="active" title="Active" />
            <DateField source="fullDayStart" showDate={false} showTime={true} />
            <DateField source="fullDayEnd" showDate={false} showTime={true}/>
            <BooleanField source='fullDayPassingMidNight' />
            <DateField source="halfDayStart"  showDate={false} showTime={true}/>
            <DateField source="halfDayEnd" showDate={false} showTime={true}/>
            <BooleanField source='halfDayPassingMidNight' />
            <DateField source="holiDayStart" showDate={false} showTime={true}/>
            <DateField source="holiDayEnd" showDate={false} showTime={true}/>
            <BooleanField source='holiDayPassingMidNight' />
        </Datagrid>
    </List>
    </>
);

export const ShiftEdit = () => (
    <Edit>
        <SimpleForm>
        <h1>Edit Shift</h1>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        <div>
            <TextInput source="shortCode" />
        </div>
        <div>
            <TextInput source="details" />
        </div>
        <div>
            <BooleanInput source="active" title="Active" />
        </div>
        </div>    
            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div>
          <TimeInput source="fullDayStart" />
        </div>
        <div>
          <TimeInput source="fullDayEnd" />
        </div>
        <div>
        <BooleanInput source='fullDayPassingMidNight' />
        </div>
        </div>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div>
            <TimeInput source="halfDayStart" />
        </div>    
        <div>
            <TimeInput source="halfDayEnd" />
        </div>
        <div>
            <BooleanInput source='halfDayPassingMidNight' />
        </div>    
        </div>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div>
            <TimeInput source="holiDayStart" />
        </div>
        <div>    
            <TimeInput source="holiDayEnd" />
        </div>    
        <div>
            <BooleanInput source='holiDayPassingMidNight' />
        </div>    
        </div>
        </SimpleForm>
    </Edit>
);

export const ShiftCreate = () => (
    <Create>
        <SimpleForm>

        <h1>Create New Shift</h1>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        <div>
            <TextInput source="shortCode" />
        </div>
        <div>
            <TextInput source="details" />
        </div>
        <div>
            <BooleanInput source="active" title="Active" />
        </div>
        </div>    
            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div>
          <TimeInput source="fullDayStart" />
        </div>
        <div>
          <TimeInput source="fullDayEnd" />
        </div>
        <div>
        <BooleanInput source='fullDayPassingMidNight' />
        </div>
        </div>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div>
            <TimeInput source="halfDayStart" />
        </div>    
        <div>
            <TimeInput source="halfDayEnd" />
        </div>
        <div>
            <BooleanInput source='halfDayPassingMidNight' />
        </div>    
        </div>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div>
            <TimeInput source="holiDayStart" />
        </div>
        <div>    
            <TimeInput source="holiDayEnd" />
        </div>    
        <div>
            <BooleanInput source='holiDayPassingMidNight' />
        </div>    
        </div>    
        </SimpleForm>
    </Create>
);