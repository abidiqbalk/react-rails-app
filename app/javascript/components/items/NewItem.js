import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class NewItem extends React.Component {

    handleSearch(){
        let query    = this.refs.query.value;
        this.props.triggerSearch(query)
    }
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
            <div className="card">
                <div className="card-header">
                  <h4>Items</h4>
                </div>
            <div className="card-body">
                <form>
                <div className="row">
                    <div className="col">
                      <input ref='name' className="form-control" placeholder='Item Name' required />
                    </div>
                    <div className="col">
                      <input ref='description' className="form-control" placeholder='Description' required/>
                    </div>
                    <div className='col'>
                      <select ref={(input) => this.statusVal = input}  className="form-control">
                        <option value = "available">Available</option>
                        <option value = "not_available">Not Available</option>
                      </select>
                    </div>
                    <div className="col">
                        <button className="btn sm btn-primary" onClick={this.handleClick.bind(this)}>Add</button>
                    </div>
                </div>
                </form>
                <hr></hr>
                <div className="row mt-2">
                    <div className="col-md-6">
                        <input ref='query' className="form-control" placeholder='Search Item' onChange={(e) => this.handleSearch(this)} />
                    </div>
                </div>
            </div>
    </div>
)
}
}

export default NewItem
