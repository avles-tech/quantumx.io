import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, ReferenceField, Filter, SelectInput } from "react-admin";


const GeoLocationsFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn inputProps={{ style: { width: '500px' } }} />
    </Filter>
);


export const GeoLocationList = () => (
    <>
        <h1>Geo Locations List</h1>
        <List filters={<GeoLocationsFilter />}>
            <Datagrid rowClick="edit">
                <TextField source="shortCode" />
                <TextField source="details" />
                <ReferenceField source="shiftId" reference="shifts">
                    <TextField source="details" />
                </ReferenceField>

            </Datagrid>
        </List>
    </>
);

export const GeoLocationEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="shortCode" />
            <TextInput source="details" />
            <ReferenceInput source="shiftId" reference="shifts" label='Shift ID'>
                <SelectInput optionText="details" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const GeoLocationCreate = () => (
    <Create redirect="list">
        <SimpleForm>
            <TextInput source="shortCode" label='Short Code' />
            <TextInput source="details" label='Details' />
            <ReferenceInput source="shiftId" reference="shifts" label='Shift ID'>
                <SelectInput optionText="details" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
