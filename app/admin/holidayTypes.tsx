import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, Filter } from "react-admin";


const HolidayTypesFilter = (props: any) => (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn inputProps={{ style: { width: '500px' } }} />
    </Filter>
  );


export const HolidayTypeList = () => (
    <>
    <h1>Holiday Types List</h1>
    <List filters={<HolidayTypesFilter/>}>
        <Datagrid rowClick="edit">
            <TextField source="Type" />
            <TextField source="Details" />

        </Datagrid>
    </List>
</>
);

export const HolidayTypeEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="Type" />
            <TextInput source="Details" />
        </SimpleForm>
    </Edit>
);

export const HolidayTypeCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="Type" />
            <TextInput source="Details" />
        </SimpleForm>
    </Create>
);