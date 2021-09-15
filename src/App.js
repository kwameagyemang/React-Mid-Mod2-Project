import React, { Component } from 'react'
import Data from './ToDoList'
import './App.css'


export default class App extends Component {
  
  state = {
    data: Data,
    items:[],
    currentItem:{
        text:'',
        key:'',
    }
    

}

handleChange = (event) => {
    // console.log(event.target.value)
    //need curly brackets inside setState
    this.setState({
        currentItem:{
            text: event.target.value,
            key: Date.now()
        }
    })

}

handleAdd(event){
    event.preventDefault();
    const newItem= this.state.currentItem;
    console.log(newItem);
}

  render() {
    return (
      <div className="container">
        <div className="app-wrapper">

          <div>
            {/* <h1 className='h1'>TODOLIST</h1> */}
            {/* onSubmit event listener calls our function handleAdd */}
          <form onSubmit={this.handleAdd}>
            <label htmlFor=""></label>
            <input type="text" placeholder="Enter a Todo..." value={this.state.text} 
            onChange={this.handleChange} className="task-input"/>
            {/* when we click this button it tells our form a "submit" event happened */}
            <button type="submit" className="button-add">Add</button>
          </form>
          </div>

          <br />

          {/* we are rendring out state in the div below */}
          <div>
            <h1>Preview our new item</h1>
            <h2>{this.state.currentItem.text}</h2>
            <h2>{this.state.currentItem.key}</h2>
          </div>

          <br />

          <ul className="data">
            {this.state.data.map((data) => {
              return (
                <li>{data.date} {data.time} {data.location} {data.ToDo}</li>
              )
            })}
          </ul>

        </div>
      </div>
    )
  }
}
