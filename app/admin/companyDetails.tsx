import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, Filter } from "react-admin";

const CompanyDetailsFilter = (props: any) => (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn inputProps={{ style: { width: '1000px' } }} />
    </Filter>
  );


export const CompanyDetailsList = () => (
    <>
      <h1>Company List</h1>
      <List filters={<CompanyDetailsFilter />}>
        <Datagrid rowClick="edit">
          <TextField source="companyCode" />
          <TextField source="companyName" />
          <TextField source="companyDescription" />
          <TextField source="sector" />
          <TextField source="registrationId" />
          <TextField source="address" />
          <TextField source="phoneNumber" />
        </Datagrid>
      </List>
    </>
  );

export const CompanyDetailsEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="Company Code" />
            <TextInput source="Company Name" />
            <TextInput source="Company Description" />
            <TextInput source="Sector" />
            <TextInput source="Registration ID" />
            <TextInput source="Address" />
            <TextInput source="Phone Number" />
        </SimpleForm>
    </Edit>
);

export const CompanyDetailsCreate = () => (
    <Create>
        <SimpleForm>
        <TextInput source="Company Code" />
            <TextInput source="Company Name" />
            <TextInput source="Company Description" />
            <TextInput source="Sector" />
            <TextInput source="Registration ID" />
            <TextInput source="Address" />
            <TextInput source="Phone Number" />
        </SimpleForm>
    </Create>
);