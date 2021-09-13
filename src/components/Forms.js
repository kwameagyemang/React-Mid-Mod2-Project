import React, { Component } from 'react'

export default class Forms extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Enter a Todo..." className="task-input"/>
                <button className="button-add" type="submit">
                    Add
                </button>
            </form>
           
        )
    }
}
