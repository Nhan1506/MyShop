import React, { useState, useMemo } from 'react';
import Todo from '../../Component/TodoList';
import TodoForm from '../../Component/TodoForm';
import './style.scss';

ListPage.propTypes = {
  
};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new'
    },  
    {
      id: 2,
      title: 'Sleep',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Code',
      status: 'new'
    },
  ]
  
  const [todoList, setTodoList] = useState(initTodoList);
  const [filterdStatus, setFilteredStatus] = useState('all');

  const handleTodoClick = (todo, index) => {
    console.log(todo,index);
    //clone mảng 
    const newTodoList = [...todoList];

    newTodoList[index]={
      ...newTodoList[index],
      status: newTodoList[index].status === 'completed' ? 'new' : 'completed'
    } 

    setTodoList(newTodoList);
  }

  const handleShowAll = () => {
    setFilteredStatus('all');
  }
  const handleShowCompleted = () => {
    setFilteredStatus('completed');
  }
  const handleShowNew = () => {
    setFilteredStatus('new');
  }

  const showListTodoItem = useMemo( () => {
    return todoList.filter(todo => filterdStatus === 'all' || filterdStatus === todo.status)
  }, [todoList, filterdStatus])

  const handleTodoFormSubmit = (values) =>{
    console.log('Form Submit: ', values);
    const newTodoItem = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new'
    }
    const newTodoList = [...todoList, newTodoItem];
    setTodoList(newTodoList);

  }

  return (
    <div className="todo-work">
      <hr />
      <h1>1 Ngày của DEV</h1>
      <Todo todoList={showListTodoItem} onTodoClick={handleTodoClick}/>
      <div className="todo-work__btn">
        <button onClick={handleShowAll}>Show All</button>
        <button onClick={handleShowCompleted}>Show Completed</button>
        <button onClick={handleShowNew}>Show New</button>
      </div>
      <hr />
      <div className="todo-form">
        <h3>Add New Work</h3>
        <TodoForm onSubmit={handleTodoFormSubmit} />
      </div>
    </div>
  );
}

export default ListPage; 