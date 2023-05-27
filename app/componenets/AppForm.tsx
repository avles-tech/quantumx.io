'use client';
import React, { FC, useState } from 'react';
import { Button, TextInput, Checkbox, Label } from 'flowbite-react';

type FieldConfig = {
    label: string;
    name: string;
    type: 'text' | 'number' | 'checkbox';
  };

type FormConfig = {
    fields: FieldConfig[];
  };

interface FormProps {
  config: FormConfig;
  onSubmit: (data: Record<string, any>) => void;
}

const AppForm: FC<FormProps> = ({ config, onSubmit }) => {
  const [data, setData] = useState<Record<string, any>>({});

  const handleChange = (name: string, value: any) => {
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      {config.fields.map(field => (
        <div key={field.name}>
          <div className="mb-2 block">
            <Label htmlFor={field.name} value={field.label} />
          </div>
          {field.type === 'text' && (
            <TextInput
              id={field.name}
              value={data[field.name] || ''}
              onChange={e => handleChange(field.name, e.target.value)}
            />
          )}
          {field.type === 'number' && (
            <TextInput
                type='number'
              id={field.name}
              value={data[field.name] || ''}
              onChange={e => handleChange(field.name, e.target.value)}
            />
          )}
          {field.type === 'checkbox' && (
            <Checkbox
              id={field.name}
              checked={!!data[field.name]}
              onChange={e => handleChange(field.name, e.target.checked)}
            />
          )}
        </div>
      ))}
      <Button type='submit'>Submit</Button>
    </form>
  );
};

export default AppForm;
