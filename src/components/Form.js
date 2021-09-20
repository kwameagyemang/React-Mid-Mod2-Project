import React, {useState, useEffect, useRef}from 'react';

function Form(props) {
    // useState param is there so that updates dont delete but can be edited
    const [input, setInput] = useState(props.edit ? props.edit.value: '');

    const inputRef = useRef(null)

    // allows to focus on whatever you set as refs
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()* 10000),
            text: input
        });
        
        setInput('');
    };

    

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
        {props.edit ? (
          <>
            <input
              placeholder='Update your item'
              value={input}
              onChange={handleChange}
              name='text'
              ref={inputRef}
              className='todo-input edit'
            />
            <button onClick={handleSubmit} className='todo-button edit'>
              Update
            </button>
          </>
        ) : (
          <>
            <input
              placeholder='Add a todo'
              value={input}
              onChange={handleChange}
              name='text'
              className='todo-input'
              ref={inputRef}
            />
            {/* when we click this button it tells our form a "submit" event happened */}
            <button onClick={handleSubmit} className='todo-button'>
              Add todo
            </button>
          </>
        )}
      </form>
    );
}

export default Form;
