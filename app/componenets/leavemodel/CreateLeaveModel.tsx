import AppForm from "../AppForm";

type FieldConfig = {
    label: string;
    name: string;
    type: 'text' | 'number' | 'checkbox';
  };

type FormConfig = {
    fields: FieldConfig[];
  };

const leaveFormConfig: FormConfig = {
    fields: [
      { label: 'Short Code', name: 'shortCode', type: 'text' },
      { label: 'Details', name: 'details', type: 'text' },
    ],
  };
  
  <AppForm
    config={leaveFormConfig}
    onSubmit={data => console.log('Submitted data:', data)}
  />