import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, DateField, TimeInput } from "react-admin";

export const ShiftList = () => (
    <List>
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
);

export const ShiftEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="shortCode" />
            <TextInput source="details" />
            <BooleanInput source="active" title="Active" />
            <TimeInput source="fullDayStart" />
            <TimeInput source="fullDayEnd" />
            <BooleanInput source='fullDayPassingMidNight' />
            <TimeInput source="halfDayStart" />
            <TimeInput source="halfDayEnd" />
            <BooleanInput source='halfDayPassingMidNight' />
            <TimeInput source="holiDayStart" />
            <TimeInput source="holiDayEnd" />
            <BooleanInput source='holiDayPassingMidNight' />
        </SimpleForm>
    </Edit>
);

export const ShiftCreate = () => (
    <Create>
        <SimpleForm>

        <TextInput source="shortCode" />
            <TextInput source="details" />
            <BooleanInput source="active" title="Active" />
            <TimeInput source="fullDayStart" />
            <TimeInput source="fullDayEnd" />
            <BooleanInput source='fullDayPassingMidNight' />
            <TimeInput source="halfDayStart" />
            <TimeInput source="halfDayEnd" />
            <BooleanInput source='halfDayPassingMidNight' />
            <TimeInput source="holiDayStart" />
            <TimeInput source="holiDayEnd" />
            <BooleanInput source='holiDayPassingMidNight' />
        </SimpleForm>
    </Create>
);