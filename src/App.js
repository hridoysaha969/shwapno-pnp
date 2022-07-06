import React, { Component } from 'react';
import Header from "./Header/Header";
import Body from "./Body/Body";
import AddProduct from "./Addproduct/AddProduct";
import './App.css';

class App extends Component {

  state = {
    products: []
  }

  submitChange = () => {
    const productArr = JSON.parse(localStorage.getItem('productObj'));
    this.setState({
      products: productArr
    })
  }

  /* Delete ssubmited product */
  deleteProduct = (ind) => {
    const productArr = JSON.parse(localStorage.getItem('productObj'));
    productArr.splice(ind, 1);
    localStorage.setItem('productObj', JSON.stringify(productArr));
    this.setState({
      products: productArr
    })
  }

  componentDidMount() {
    const productArr = JSON.parse(localStorage.getItem('productObj'));
    this.setState({
      products: productArr
    })
  }

  render() {
    return (
      <div className="App">
        <AddProduct submitChange={this.submitChange} />
        <Header />
        <div className='hide'>
          <Body product={this.state.products} deleteProduct={this.deleteProduct} />
        </div>
      </div>
    );
  }
}

export default App;
