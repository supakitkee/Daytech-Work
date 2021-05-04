import { searchState, slectState, todoState } from '@/components/recoil/atom';
import { todoSearchState, totalState } from '@/components/recoil/selector';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Todoprop } from '@/components/types/index';
import { Row, Col, Typography, Select } from 'antd';
import SearchForm from '@/components/SearchForm';
import TodoForm from '@/components/TodoForm';
import CardFix from '@/components/CardFix';
import Head from 'next/head';
import React from 'react';

const Home = () => {
  const [todos, setTodos] = useRecoilState(todoState); //atom
  const [status, setStatus] = useRecoilState(slectState); //atom
  const [search, setSearch] = useRecoilState(searchState); //atom
  const totalTodos = useRecoilValue(totalState); //selector
  const selectStatus = useRecoilValue(todoSearchState); //selector
  const { Title } = Typography;
  const { Option } = Select;

  const handleAdd = (value: string) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const data = {
      id,
      completed: false,
      value,
    };
    setTodos([...todos, data]);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    if (value === '') {
      setSearch('');
    }
  };

  const handleCheck = (todo: Todoprop) => {
    if (todos.length > 0) {
      setTodos(
        todos.map((item) => {
          if (item.id === todo.id) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return item;
        })
      );
    }
  };

  const handleChange = (value: string) => {
    console.log(`selected : ${value}`);
    setStatus(value);
  };

  return (
    <>
      <Head>
        <title>Todo List App</title>
      </Head>
      <Title level={2}>Todo List App</Title>
      <Row gutter={[16, 16]} justify='center'>
        <Col span={6}></Col>
        <Col span={6}>
          <TodoForm handleAdd={handleAdd} />
          <CardFix onCheck={handleCheck} />
        </Col>
        <Col span={6}>
          <SearchForm handleSearch={handleSearch} />
        </Col>
        <Col span={6}>
          <Select
            defaultValue='All'
            style={{ width: 140 }}
            onChange={handleChange}
          >
            <Option value='All'>All</Option>
            <Option value='Complete'>Complete</Option>
            <Option value='Uncompleted'>Uncompleted</Option>
          </Select>
        </Col>
      </Row>
    </>
  );
};

export default Home;
