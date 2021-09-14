import React, { Component } from 'react';

class Forms extends Component {
    state = {
        items:[],
        currentItem:{
            text:'',
            key:'',
        }

    }

    handlechange = (event) => {
        this.state({
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
            <form onSubmit={this.addItem}>
            <input type="text" placeholder="Enter a Todo..." 
            value={this.state.currentItem.text}
            onChange={this.handleChange}
            className="task-input"/>
            <button type="submit" className="button-add">Add</button>
            </form>
        );
    }
}

export default Forms;