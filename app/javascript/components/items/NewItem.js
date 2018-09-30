import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'
class NewItem extends React.Component {
    handleClick(e){
        e.preventDefault()
        let name    = this.refs.name.value;
        let description = this.refs.description.value;
        let status = this.statusVal.value;
        this.props.handleFormSubmit(name,description,status)
        e.target.form.reset()
    }
    render() {
        return (
            <div>
            <form>
                <input ref='name' placeholder='Item Name' />
                <input ref='description' placeholder='Description' />
                <select ref={(input) => this.statusVal = input}  >
                <option value = "available">Available</option>
                <option value = "not_available">Not Available</option>
                </select>
                <button onClick={this.handleClick.bind(this)}>Submit</button>
            </form>
    </div>
)
}
}

export default NewItem
