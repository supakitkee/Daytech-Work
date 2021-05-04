import { searchState, todoState, slectState } from './atom';
import { selector } from 'recoil';

export const totalState = selector({
  key: 'total',
  get: ({ get }) => {
    const totalTodo = get(todoState); //เอาค่าจาก todoState มา

    return {
      total: totalTodo.length,
      notCompleted: 2,
      search: 'dd',
    };
  },
});

export const todoSearchState = selector({
  key: 'todoSearch',
  get: ({ get }) => {
    const todoList = get(todoState); //เอาค่าจาก todoState มา
    const todoSearch = get(searchState);
    const selectStatus = get(slectState);
    let searchData = todoList;
    if (todoSearch !== '') {
      searchData = todoList.filter((todo) => {
        return todo.value.includes(todoSearch); //includes เลือกเอาเฉพาะค่าที่เราไม่ได้กำหนด
      });
    }
    if (selectStatus === 'Complete') {
      searchData = todoList.filter((todo) => {
        return todo.completed === true;
      });
    }
    if (selectStatus === 'Uncompleted') {
      searchData = todoList.filter((todo) => {
        return todo.completed === false;
      });
    }
    return searchData;
  },
});
