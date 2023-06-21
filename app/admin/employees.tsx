import { List, Datagrid, TextField, BooleanField, Edit, SimpleForm, TextInput, ReferenceInput, BooleanInput, Create, Filter, DateInput, SelectInput, Form , required, ReferenceField} from "react-admin";
import styled from 'styled-components';

const FormGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    align-items: end;
`;

const WideInput = styled(TextInput)`
    grid-column-end: span 2;
`;

const FullInput = styled(TextInput)`
    grid-column-end: span 3;
`;


const EmployeesFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn inputProps={{ style: { width: '500px' } }} />
    </Filter>
);


const validateTel = (tel: string) => {
    const telRegex = /^\+?\d{1,3}?\d{10}$/;
    if (tel && !tel.match(telRegex)) {
        return 'Please enter a valid telephone number';
    }
    return undefined; // Return undefined if the validation succeeds
};

export const EmployeeList = () => (
    <>
        <h1>Employees List</h1>
        <List filters={<EmployeesFilter />}>
            <Datagrid rowClick="edit">
                <TextField source="empId" label='Emp. Code' />

                <TextField source="name" label='Name with Initial' />
                
                <ReferenceField source="departmentId" reference="departments">
                    <TextField source="details" />
                </ReferenceField>

                <TextField source="position" label='Position' />

            </Datagrid>
        </List>
    </>
);

export const EmployeeEdit = () => (
    <Edit>
        <EmployeeForm title="Edit Employee Details" />
    </Edit>
);

export const EmployeeCreate = () => (
    <Create>
        <EmployeeForm title="New Employee Registration" />
    </Create>
);

const EmployeeForm = (props: any) => (
    <SimpleForm>
        <h1> {props.title}</h1>
        <h2>Personal Information</h2>
        <FormGrid>

            
            <TextInput source="empId" label='Employee Code' validate={required('Please enter an employee code')}/>
            <TextInput source="cardId" label='Card ID' validate={required('Please enter a Card ID')}/>
            <FullInput source="name" label='Name with Initials' validate={required('Please enter a Name')}/>
            <TextInput source="firstName" label='First Name' />
            <TextInput source="middleName" label='Middle Name' />
            <TextInput source="lastName" label='Last Name' />
            <WideInput source="nic" label='National ID' />
            
            <FullInput source="remarks" label='Remarks' multiline rows={3} />
            <DateInput source="dob" label='Date of Birth' />
            <SelectInput
                source="gender"
                label="Gender"
                choices={[
                    { id: 'male', name: 'Male' },
                    { id: 'female', name: 'Female' },
                    { id: 'other', name: 'Other' },
                ]}
            />
            <SelectInput
                source="socialStatus"
                label="Social Status"
                choices={[
                    { id: 'married', name: 'Married' },
                    { id: 'single', name: 'Single' },
                    { id: 'divorced', name: 'Divorced' },
                    { id: 'widowed', name: 'Widowed' },
                ]}
            />
            <TextInput source="mobileNumber" label='Mobile Number' validate={validateTel}  />
            <TextInput source="homeTelephone" label='Home Telephone' validate={validateTel}/>
            <WideInput source="homeAddress" label='Home Address' multiline rows={5} />
            <span/>
            <h4>Emergency Contact Information</h4>
            <span/>
            <span/>
            <TextInput source="emergencyContact" label='Emergency Contact Person' />
            <TextInput source="emergencyContactTelephone" label='Emergency Contact Telephone' validate={validateTel} />
            <WideInput source="emergencyAddress" label='Emergency Contact Address' multiline rows={3}/>
            <span/>
            <h2>Company Information</h2>
            <span/>
            <span/>
            <ReferenceInput source="departmentId" reference="departments" label='Department'>
                <SelectInput optionText="details" />
            </ReferenceInput>
            <ReferenceInput source="geoLocationId" reference="geoLocations" label='Location'>
                <SelectInput optionText="details" />
            </ReferenceInput>
            <TextInput source="position" label='Position' />
            
            <ReferenceInput source="leaveModelId" reference="leaveModels" label='Leave Model'>
                <SelectInput optionText="details" />
            </ReferenceInput>
            <DateInput source="doj" label='Date of Joining' />
            <BooleanInput source="jobConfirmed" label="Job Confirmed?" />
        </FormGrid>

       
        
    </SimpleForm>
);
