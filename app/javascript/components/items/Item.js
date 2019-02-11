import React from "react"
import EditItem from "./EditItem";
class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editable: false
        }

        this.toggleEdit = this.toggleEdit.bind(this)
    }
    toggleEdit(e){
        e.preventDefault()
        this.setState({editable:!this.state.editable})
    }

  render () {
      if(this.state.editable){
          return(
                <EditItem item={this.props.item} handleUpdate={this.props.handleUpdate} toggleEdit={(e)=> this.toggleEdit(e)}/>
              )

      }
      else{
          return (
              <div >
                  <div className="actions float-right">
                      <a href="#" onClick={(e)=>this.toggleEdit(e)} className=""><i className={this.state.editable? 'fa fa-floppy-o' : 'fa fa-pencil'}></i></a> | <a href='#' onClick={e =>this.props.handleDelete(e,this.props.item.id)}><i className="fa fa-trash"></i></a>
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
