import React from "react"
import PropTypes from "prop-types"
class EditItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            status: "available"
        }

    }
    handleEdit=(e)=>{
        let name = this.name.value
        let description = this.description.value
        let id = this.props.item.id
        let status = this.state.status
        let item = {id: id, name: name, description: description, status:status}
        this.props.handleUpdate(item)
        this.props.toggleEdit(e)

    }
  render () {
    return (
        <form>
          <div className="row">
            <div className="col">
              <input type='text' className="form-control" ref={input => this.name = input} defaultValue={this.props.item.name}/>
            </div>
            <div className="col">
              <input type='text' className="form-control" ref={input => this.description = input} defaultValue={this.props.item.description}/>
            </div>
            <div className='col'>
              <select onChange={(e) => this.setState({ status: e.target.value })}  className="form-control">
                <option value = "available">Available</option>
                <option value = "not_available">Not Available</option>
              </select>
            </div>


          </div>
          <div className="row mt-2">
            <div className='col'>
              <button className="btn sm btn-primary" onClick={(e) =>this.handleEdit(e)}>Update</button>
              <button className="btn sm btn-info ml-1" onClick={(e) =>this.props.toggleEdit(e)}>Cancel</button>
            </div>
          </div>
        </form>
    );
  }
}

export default EditItem
