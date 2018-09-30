import React from "react"
import ItemsContainer from 'components/items/ItemsContainer'
class Main extends React.Component {
  render () {
    return (
        <div className="container-fluid mt-3">
            <div className='row'>
                <div className="col-md-6 offset-3">
                    <ItemsContainer/>
                </div>
            </div>
        </div>
    );
  }
}

export default Main
