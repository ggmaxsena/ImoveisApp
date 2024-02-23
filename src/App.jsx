import React from 'react';
import { Form, Input, Button, ErrorMessage } from 'vito-react';

const MyForm = () => {
  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
    // handle form submission here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="name"
        label="Name"
        required
        minLength={3}
      />
      <ErrorMessage name="name" />

      <Input
        name="email"
        label="Email"
        type="email"
        required
      />
      <ErrorMessage name="email" />

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default MyForm;