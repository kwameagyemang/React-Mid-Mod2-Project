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

  handlechange = (event) => {
      console.log(event.target.value)
      this.setState({
          currentItem:{
              text: event.target.value,
              key: Date.now()
          }
      })

  }
  addItem(event){
      event.preventDefault();
  }
    render() {
      return (
        <div className="container">
          <div className="app-wrapper">
            <div>
            <form onSubmit={this.addItem}>
              <input type="text" placeholder="Enter a Todo..." 
              value={this.state.currentItem.text}
              onChange={this.handleChange}
              className="task-input"/>
              <button type="submit" className="button-add">Add</button>
            </form>
            </div>
            <br />
            <ul className="data">
              {this.state.data.map((data) => {
                return (
                  <li>{data.date} {data.time} {data.location}</li>
                )
              })}
            </ul>
          </div>
        </div>
      )
    }
  }
