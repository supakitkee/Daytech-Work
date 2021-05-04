import { Card, Input, Button, Form, Modal, Typography } from 'antd';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoState } from '@/components/recoil/atom';
import { todoSearchState } from './recoil/selector';
import { Todoprop } from '@/components/types/index';
import React, { useState } from 'react';
import _ from 'lodash';
import {
  DeleteTwoTone,
  CheckSquareOutlined,
  EditTwoTone,
} from '@ant-design/icons';

const CardFix = ({ todo, onCheck }: any) => {
  const [todos, setTodos] = useRecoilState(todoState);
  const todoSearch = useRecoilValue(todoSearchState);

  const { Meta } = Card;
  const { Text } = Typography;

  const handleDelete = (todo: Todoprop) => {
    if (todos.length > 0) {
      setTodos(todos.filter((data: Todoprop) => data.id !== todo.id));
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [form] = Form.useForm();

  const handleEdit = (values: { title: string; id: number }) => {
    const temp = _.cloneDeep(todos);
    const newData = temp.map((data: Todoprop) => {
      if (data.id === values.id) {
        data.value = values.title;
      }
      return data;
    });
    setTodos(newData);
  };

  const handleCheck = (todo: Todoprop) => {
    onCheck(todo);
  };

  return (
    <>
      {todoSearch.map((todo: Todoprop) => {
        return (
          <Card
            key={todo.id}
            title='Todo List'
            style={{ marginTop: 20 }}
            actions={[
              <CheckSquareOutlined
                key='check'
                onClick={() => handleCheck(todo)}
              />,
              <EditTwoTone
                key='edit'
                onClick={() => {
                  setIsModalVisible(true);
                  form.setFieldsValue({
                    id: todo.id,
                    title: todo.value,
                  });
                }}
              />,
              <DeleteTwoTone
                twoToneColor='#eb2f96'
                key='delete'
                onClick={() => handleDelete(todo)}
              />,
            ]}
          >
            <Meta
              title={
                todo.completed ? (
                  <Text delete type='success'>
                    {todo.value}
                  </Text>
                ) : (
                  todo.value
                )
              }
            />
          </Card>
        );
      })}
      {todos.map((todo: Todoprop) => {
        return (
          <Modal
            key={todo.id}
            title='Edit ToDo List'
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button
                form='myForm'
                key='submit'
                htmlType='submit'
                onClick={() => {
                  setIsModalVisible(false);
                }}
              >
                Edit
              </Button>,
            ]}
          >
            <Form
              onFinish={handleEdit}
              id='myForm'
              form={form}
              layout='inline'
              initialValues={{ remember: todo.value }}
              name='id'
            >
              <Form.Item name='id'>
                <Input type='hidden' />
              </Form.Item>
              <Form.Item name='title'>
                <Input placeholder='Enter text' />
              </Form.Item>
            </Form>
          </Modal>
        );
      })}
    </>
  );
};

export default CardFix;
