import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, Filter } from "react-admin";

const CompanyDetailsFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn inputProps={{ style: { width: '500px' } }} />
  </Filter>
);


export const CompanyDetailsList = () => (
  <>
    <h1>Company List</h1>
    <List filters={<CompanyDetailsFilter />} perPage={25} sort={{ field: 'companyName', order: 'ASC' }}>
      <Datagrid rowClick="edit">
        <TextField source="companyCode" label="Company Code"  />
        <TextField source="companyName" label="Company Name"  />
        <TextField source="companyDescription" label="Company Description"  />
        <TextField source="sector" label="Sector"  />
        <TextField source="registrationId" label="Registration ID"  />
        <TextField source="address" label="Address" />
        <TextField source="phoneNumber" label="Phone Number" />
      </Datagrid>
    </List>
  </>
);


export const CompanyDetailsEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="companyCode" />
      <TextInput source="companyName" />
      <TextInput source="companyDescription" />
      <TextInput source="sector" />
      <TextInput source="registrationId" />
      <TextInput source="address" />
      <TextInput source="phoneNumber" />
    </SimpleForm>
  </Edit>
);

export const CompanyDetailsCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="companyCode" />
      <TextInput source="companyName" />
      <TextInput source="companyDescription" />
      <TextInput source="sector" />
      <TextInput source="registrationId" />
      <TextInput source="address" />
      <TextInput source="phoneNumber" />
    </SimpleForm>
  </Create>
);