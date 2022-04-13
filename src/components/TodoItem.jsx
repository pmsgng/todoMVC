import React from 'react';
import '../style/todo-item.css'

const TodoItem = ({value,todos,checkboxChecked}) => {

    return (
        <div className='todo-item'>
            <div className="todo-item__item-checkbox">
                <input 
                    className='todo-item__checkbox'
                    type="checkbox" 
                    onChange={checkboxChecked} />
                <span className='todo-item__text'>{value}</span>
            </div>
            <button className='todo-item__delete'>x</button>
        </div>
    );
};

export default TodoItem;