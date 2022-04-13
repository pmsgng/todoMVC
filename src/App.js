import React, {useState} from 'react';
import './App.css';
import Title from './components/Title';
import TodoList from './components/TodoList';
import TodoPanel from './components/TodoPanel';

function App() {
  const [inputValue, setInputValue] = useState('')
  const handlerInput = (event) => {
    setInputValue( event.target.value )
  }

  const [todos, setTodos] = useState([])

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      const newItem = {
        id: Math.random().toString(36).substring(2,9),
        task: inputValue,
        isComplete: false,
      }
      setTodos(prev => [...prev, newItem])
      setInputValue('')
    }
  }

  const checkboxChecked = (id) => {
    setTodos([...todos.map(todo => todo.id === id ? {...todo, isComplete : !todo.isComplete} : {...todo})])
  }


  return (
    <div className="App">
      <Title />
      <TodoPanel 
          handleKeyPress={handleKeyPress}
          handlerInput={handlerInput} 
          value={inputValue} />
      <TodoList 
          value={inputValue} 
          todos={todos}
          checkboxChecked={checkboxChecked}/>
    </div>
  );
}

export default App;
