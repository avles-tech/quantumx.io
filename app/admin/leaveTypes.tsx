import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, Filter } from "react-admin";

const LeaveTypesFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn inputProps={{ style: { width: '500px' } }} />
    </Filter>
);

const LeaveTypeForm = (props: any) => (
    <SimpleForm>
        <TextInput source="shortCode" label='short Code'/>
        <TextInput source="details" label='Details'/>
        <TextInput source="minimumHours" label='Minimum Hours'/>
        <TextInput source="numberOfSplit"  label='Number of Split'/>
        <BooleanInput source="countHoliday" label='Count Holiday'/>
        <BooleanInput source="considerTime"  label='Consider Time'/>
        
    </SimpleForm>
)

export const LeaveTypeList = () => (
    <>
        <h1>Leave Type List</h1>
        <List filters={<LeaveTypesFilter />}>
            <Datagrid rowClick="edit">
                <TextField source="shortCode" label='Short Code'/>
                <TextField source="details" label='Details'/>
                <TextField source="minimumHours" label='Minimum Hours'/>
                <TextField source="numberOfSplit" label='Number of Split'/>
                <BooleanField source="countHoliday" label='Count Holiday'/>
                <BooleanField source="considerTime" label='Consider Time'/>
            </Datagrid>
        </List>
    </>
);

export const LeaveTypeEdit = () => (
    <Edit>
        <h1>Edit Leave Type</h1>
        <LeaveTypeForm />
    </Edit>
);

export const LeaveTypeCreate = () => (
    <Create>
        <h1>Create Leave Type</h1>
        <LeaveTypeForm />
    </Create>
);

