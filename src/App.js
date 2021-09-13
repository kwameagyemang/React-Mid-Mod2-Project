import React, { Component } from 'react'
import Header from './components/Header'
import Forms from './components/Forms'
import './App.css'
// import ToDoList from './ToDoList'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="app-wrapper">
          <div>
            <Header />
          </div>
          <div>
            <Forms />
          </div>
        </div>
      </div>
    )
  }
}
