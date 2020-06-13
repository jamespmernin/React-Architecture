import React, { Component } from 'react'
import './Products.css'

import Product from '../Product/Product'
import Search from '../Search/Search'
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort"
import Sort from '../Sort/Sort'
import Layout from '../shared/Layout'
import productsJSON from '../../data/products.json'

class Products extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      queriedProducts: [],
      sortType: ''
    }
  }

  componentDidMount() {
    const products = productsJSON
    this.setState({ products })
    this.setState({ queriedProducts: products })
  }

  handleSearch = event => {
    const sort = () => this.handleSort(this.state.sortType)
    const queriedProducts = this.state.products.filter(product => product.name.toLowerCase().includes(event.target.value.toLowerCase()))
    this.setState({ queriedProducts }, sort)
  }

  handleSort = type => {
    this.setState({ sortType: type })
    const { queriedProducts } = this.state
    switch (type) {
      case "name-ascending":
        this.setState({
          queriedProducts: AZ(queriedProducts)
        });
        break;
      case "name-descending":
        this.setState({
          queriedProducts: ZA(queriedProducts)
        });
        break;
      case "price-ascending":
        this.setState({
          queriedProducts: lowestFirst(queriedProducts)
        });
        break;
      case "price-descending":
        this.setState({
          queriedProducts: highestFirst(queriedProducts)
        });
        break;
      default:
        break
    }
  }

  handleSubmit = event => event.preventDefault()

  render() {
    const productsJSX = this.state.queriedProducts.map((product, index) =>
      <Product _id={product._id} name={product.name} imgURL={product.imgURL} price={product.price} key={index} />
    )

    return (
      <Layout>
        <Search onSubmit={this.handleSubmit} onChange={this.handleSearch} />
        <Sort onSubmit={this.handleSubmit} onChange={this.handleSort} />
        <div className="products">
          {productsJSX}
        </div>
      </Layout>
    )
  }
}

export default Products