import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, Filter } from "react-admin";

const LeaveModelsFilter = (props: any) => (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn inputProps={{ style: { width: '500px' } }} />
    </Filter>
  );

  import { ArrayInput, SimpleFormIterator, NumberInput, SelectInput } from "react-admin";

const LeaveModelForm = (props: any) => (
    <SimpleForm>
        <TextInput source="shortCode" />
        <TextInput source="details" />
        <BooleanInput source="active" />

        <ArrayInput source="leaveTypes">
            <SimpleFormIterator>
                <ReferenceInput source="leaveTypeId" reference="leaveTypes" label='Leave Type'>
                    <SelectInput optionText="details" />
                </ReferenceInput>
                <NumberInput source="noOfLeaves" label="Number of Leaves" />
            </SimpleFormIterator>
        </ArrayInput>
    </SimpleForm>
);

// use the form in Create and Edit as before




export const LeaveModelList = () => (
    <>
        <h1>Leave Models List</h1>
        <List filters={<LeaveModelsFilter/>}>
        <Datagrid rowClick="edit">
            <TextField source="shortCode" />
            <TextField source="details" />
            <BooleanField source="active" title="Active" />
        </Datagrid>
    </List>
    </>
);

export const LeaveModelEdit = () => (
    <Edit>
        <LeaveModelForm/>
    </Edit>
);

export const LeaveModelCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="shortCode" />
            <TextInput source="details" />
            <BooleanInput source="active" />
        </SimpleForm>
    </Create>
);