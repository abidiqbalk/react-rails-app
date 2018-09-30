import React from "react"
import PropTypes from "prop-types"

class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editable: false
        }
        this.handleEdit = this.handleEdit.bind(this)
    }
    handleEdit(){
        if(this.state.editable){
            let name = this.name.value
            let description = this.description.value
            let id = this.props.item.id
            let item = {id: id, name: name, description: description}
            this.props.handleUpdate(item)
        }
        this.setState({
            editable: !this.state.editable
        })
    }
  render () {
      let name = this.state.editable ? <input type='text' ref={input => this.name = input} defaultValue={this.props.item.name}/>:<span>{this.props.item.name}</span>
      let description = this.state.editable ? <input type='text' ref={input => this.description = input} defaultValue={this.props.item.description}/>:<span>{this.props.item.description}</span>
    return (
        <div >
            <div className='d-flex w-100 justify-content-between'><h5 class="mb-1">{name}</h5></div>
            <p className="mb-1"> {description}</p>
            <span className="badge badge-success badge-pill">Available</span>
            |<button  onClick={(e) =>this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>| <a href='#' onClick={e =>this.props.handleDelete(e,this.props.item.id)}>Delete</a>
        </div>
    );
  }
}

export default Item
