import { Form, Input, Button } from 'antd';
import React, { useState } from 'react';

interface Todoformprop {
  handleAdd: (value: string) => void;
}

type LayoutType = Parameters<typeof Form>[0]['layout'];

const TodoForm: React.FC<Todoformprop> = ({ handleAdd }) => {
  const [form] = Form.useForm();
  const onAdd = (values: { title: string }) => {
    handleAdd(values.title);
    form.resetFields();
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Form onFinish={onAdd} form={form} layout='inline'>
        <Form.Item label='Add Todo' name='title'>
          <Input placeholder='input text' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Add
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default TodoForm;
