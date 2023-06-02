import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, ReferenceField, Filter } from "react-admin";


const GeoLocationsFilter = (props: any) => (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn inputProps={{ style: { width: '500px' } }} />
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
            <TextInput source="shortCode" label='Short Code' />
            <TextInput source="details" label='Details'/>
            <ReferenceInput source="shiftId" reference="shifts" label='Shift ID'/>
        </SimpleForm>
    </Create>
);
