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
            <TextField source="shortCode" label='short Code'/>
            <TextField source="details" label='Details'/>
            <BooleanField source="active" title="Active" label='Active'/>
        </Datagrid>
    </List>
    </>
);

export const LeaveModelEdit = () => (
    
    <Edit>
            <h1>Edit Leave Model</h1>
        <LeaveModelForm/>
    </Edit>
);

export const LeaveModelCreate = () => (
    <Create>
        <SimpleForm>
            <h1>Create Leave Model</h1>
            <TextInput source="shortCode" label='short Code'/>
            <TextInput source="details" label='Details'/>
            <BooleanInput source="active" label='Active'/>
        </SimpleForm>
    </Create>
);