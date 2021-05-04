import { Form, Input, Button } from 'antd';
import React from 'react';

interface Todoformprop {
  handleSearch: (value: string) => void;
}

type LayoutType = Parameters<typeof Form>[0]['layout'];

const TodoForm: React.FC<Todoformprop> = ({ handleSearch }) => {
  const [form] = Form.useForm();
  const onSearch = (values: { title: string }) => {
    handleSearch(values.title);
  };
  return (
    <>
      <Form onFinish={onSearch} form={form} layout='inline'>
        <Form.Item label='Search' name='title'>
          <Input placeholder='input text' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Search
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default TodoForm;
