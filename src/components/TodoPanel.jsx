import React from 'react';
import '../style/panel.css'

const TodoPanel = ({handlerInput,value,handleKeyPress}) => {
    return (
        <div className='panel'>
            <div className='panel__arrow'>⌄</div> 
            <input onChange={handlerInput} 
                    value={value}
                    className='panel__input' 
                    type="text" 
                    placeholder='What needs to be done?'
                    onKeyDown={handleKeyPress}
            />
        </div>
    );
};

export default TodoPanel;