import { List, Datagrid, TextField, EmailField, Edit, SimpleForm, TextInput, Create, Filter, ImageField, ImageInput } from "react-admin";

const UserFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn inputProps={{ style: { width: '500px' } }} />
    </Filter>
);

export const UserList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
           
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="fullName" />
            <ImageField source="avatar" title="avatar" /> {/* assuming the avatar URL is stored in the 'avatar' field */}
        </Datagrid>
    </List>
);

export const UserEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
           
            <TextInput source="name" />
            <EmailField source="email" />
            <TextField source="fullName" />
            <ImageInput source="avatar" label="User avatar" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);


export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" label='Name'/>
            <TextInput source="email" label='Email'/>
            <TextInput source="fullName" label='Full Name'/>
            <ImageInput source="avatar" label="Avatar" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);
