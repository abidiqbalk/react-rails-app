import React from "react"
import PropTypes from "prop-types"
class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editable: false,
            status: "available"
        }
        this.handleEdit = this.handleEdit.bind(this)
        this.openEdit = this.openEdit.bind(this)
    }
    openEdit(e){
        e.preventDefault()
        this.setState({editable:true})
    }
    cancelEdit(e){
        e.preventDefault()
        this.setState({editable:false})
    }
    handleEdit(e){
        e.preventDefault()
        if(this.state.editable){
            let name = this.name.value
            let description = this.description.value
            let id = this.props.item.id
            let status = this.state.status
            let item = {id: id, name: name, description: description, status:status}
            this.props.handleUpdate(item)
        }
        this.setState({
            editable: !this.state.editable
        })
    }
  render () {
      if(this.state.editable){
          return(
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
                      <div className="col">
                          <button className="btn sm btn-primary" onClick={(e) =>this.handleEdit(e)}>Update</button>
                          <button className="btn sm btn-info ml-1" onClick={(e) =>this.cancelEdit(e)}>Cancel</button>
                      </div>

                  </div>
              </form>
              )

      }
      else{
          return (
              <div >
                  <div className="actions float-right">
                      <a href="#" onClick={(e) =>this.openEdit(e)} className=""><i className={this.state.editable? 'fa fa-floppy-o' : 'fa fa-pencil'}></i></a> | <a href='#' onClick={e =>this.props.handleDelete(e,this.props.item.id)}><i className="fa fa-trash"></i></a>
                  </div>
                  <div className='d-flex  justify-content-between'><h5 className="mb-1">{this.props.item.name}</h5></div>
                  <p className="mb-1">{this.props.item.description} </p>
                  <span className={`badge badge-${this.props.item.status=='available'? "success" : 'danger'} badge-pill`}>{this.props.item.status.replace(/_/g, ' ')}</span>
              </div>
          )
      }


  }
}

export default Item
