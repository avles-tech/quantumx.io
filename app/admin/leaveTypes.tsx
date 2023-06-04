import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, Filter } from "react-admin";

const LeaveTypesFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn inputProps={{ style: { width: '500px' } }} />
    </Filter>
);

const LeaveTypeForm = (props: any) => (
    <SimpleForm>
        <TextInput source="shortCode" />
        <TextInput source="details" />
        <TextInput source="minimumHours" />
        <TextInput source="numberOfSplit"  />
        <BooleanInput source="countHoliday" />
        <BooleanInput source="considerTime" />
        
    </SimpleForm>
)

export const LeaveTypeList = () => (
    <>
        <h1>Leave Type List</h1>
        <List filters={<LeaveTypesFilter />}>
            <Datagrid rowClick="edit">
                <TextField source="shortCode" />
                <TextField source="details" />
                <TextField source="minimumHours" />
                <TextField source="numberOfSplit" />
                <BooleanField source="countHoliday"  />
                <BooleanField source="considerTime"  />
            </Datagrid>
        </List>
    </>
);

export const LeaveTypeEdit = () => (
    <Edit>
        <LeaveTypeForm />
    </Edit>
);

export const LeaveTypeCreate = () => (
    <Create>
        <LeaveTypeForm />
    </Create>
);

