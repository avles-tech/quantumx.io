import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, ReferenceField, Filter } from "react-admin";


const GeoLocationsFilter = (props: any) => (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn inputProps={{ style: { width: '1000px' } }} />
    </Filter>
  );


export const GeoLocationList = () => (
    <>
        <h1>Geo Locations List</h1>
        <List filters={<GeoLocationsFilter/>}>
        <Datagrid rowClick="edit">
            <TextField source="shortCode" />
            <TextField source="details" />
            <ReferenceField source="shiftId" reference="shifts" />

        </Datagrid>
    </List>
</>
);

export const GeoLocationEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="shortCode" />
            <TextInput source="details" />
            <ReferenceInput source="shiftId" reference="shifts" />
        </SimpleForm>
    </Edit>
);

export const GeoLocationCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="shortCode" />
            <TextInput source="details" />
            <ReferenceInput source="shiftId" reference="shifts" />
        </SimpleForm>
    </Create>
);