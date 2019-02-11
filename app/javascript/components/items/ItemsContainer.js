import React from "react"
import AllItems from 'components/items/AllItems'
import NewItem from 'components/items/NewItem'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class ItemsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            message:""
        };
        this.handleFormSubmit= this.handleFormSubmit.bind(this)
        this.addNewItem= this.addNewItem.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this);
        this.updateItem = this.updateItem.bind(this)
        this.triggerSearch = this.triggerSearch.bind(this)

    }

    triggerSearch(query){
        const params={
            "q":{"name_cont":query}
        }
        axios.get('/api/v1/items?q',{params})
            .then(response => {
                this.setState({items: response.data})
            })
            .catch(error => console.log(error))

    }
    handleUpdate(item){
        let that = this
        axios.put(`/api/v1/items/${item.id}`, {
            item:item
        })
        .then(response => {
            that.updateItem(response.data)
            return response
        })
        .catch(error => {
            Object.keys(error.response.data).forEach(function (key) {
                var value = error.response.data[key]
                toast.error(key + " "+ value[0]);
            })
        });
    }
    updateItem(item){
        let index = this.state.items.findIndex(x => x.id==item.id)
        let newItems = this.state.items.filter((f) => f.id !== item.id)
        newItems.splice(index, 0, item);
        this.setState({
            items: newItems
        })
    }
    handleFormSubmit(name,description,status){
        let that = this
        axios.post('http://localhost:3000/api/v1/items',
            {item: {name: name, description:description,status:status} }
        )
        .then(function (response) {
                that.addNewItem(response.data)
        })
        .catch(function (error) {
            Object.keys(error.response.data).forEach(function (key) {
                var value = error.response.data[key]
                toast.error(key + " "+ value[0]);
            })

        });


    }
    addNewItem(item) {
        let newItems = this.state.items
        newItems.splice(0, 0, item);
        this.setState({ items: newItems })
    }
    handleDelete(e,id){
        e.preventDefault()
        let that = this
        axios.delete(`/api/v1/items/${id}`
        )
            .then(function (response) {
                that.deleteItem(id)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    deleteItem(id){
        let newItems = this.state.items.filter((item) => item.id !== id)
        this.setState({
            items: newItems
        })
    }
    componentDidMount(){
        axios.get('/api/v1/items')
            .then(response => {
                console.log(response)
                this.setState({items: response.data})
            })
            .catch(error => console.log(error))


    }


    render(){
        return(
            <div>
              <NewItem handleFormSubmit = {this.handleFormSubmit} triggerSearch ={this.triggerSearch} />
              <AllItems items={this.state.items} handleDelete={this.handleDelete} handleUpdate = {this.handleUpdate}/>
                <ToastContainer />
            </div>
        )
    }
}
export default ItemsContainer