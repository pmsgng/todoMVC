import React from 'react';
import TodoFooter from './TodoFooter';
import TodoItem from './TodoItem';
import '../style/todo-list.css'


const TodoList = ({todos,checkboxChecked}) => {

    return (
        <div className='todo__list'>
            {todos.map((todo) => {
               return ( todo && <TodoItem 
                            key={todo.id}
                            todos={todos}
                            value={todo.task} 
                            checkboxChecked={checkboxChecked} /> )
            })}
            <TodoFooter />
        </div>
    );
};

export default TodoList;