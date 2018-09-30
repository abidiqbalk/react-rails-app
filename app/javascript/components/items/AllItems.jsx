import React from "react"
import Item from "components/items/Item"
class AllItems extends React.Component {
    render() {
        var items= this.props.items.map((item) => {
            return (
                <div key={item.id}>
                    <Item item={item} handleDelete={this.props.handleDelete} handleUpdate = {this.props.handleUpdate}/>
                </div>
            )
        });
        return(
            <div>
                {items}
            </div>
        )
    }
}

export default AllItems
