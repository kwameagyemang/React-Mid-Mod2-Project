import React, {useState} from 'react'
import Form from './Form'
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    // if nothing is typed in input field nothings shows up
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        /*the spread operater is written with ... 
      which allow to add things in the array without mutating 
      original array or objects, similar to push () function */
        const newTodos = [todo, ...todos];
        
        setTodos(newTodos);
        // console.log(todo,...todos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
    };

    const removeTodo = id => {
        const removeArray = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArray);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id){
                todo.isComplete = !todo.isComplete;
                return todo;
            }
        });
        setTodos(updatedTodos);
    }


    return (
        <div>
            
            <Form onSubmit={addTodo} />
            <Todo todos={todos} 
            completeTodo={completeTodo} 
            removeTodo={removeTodo}
            updateTodo={updateTodo}/>

            
        </div>
    )
}

export default TodoList