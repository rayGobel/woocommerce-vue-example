import RESTService from './RESTService'

const API_ENDPOINT = process.env.API_ENDPOINT
const ProductService = {
  getProducts (limit) {
    const endpoint = API_ENDPOINT + 'wp-json/wc/v2/products'
    return RESTService.get(endpoint)
      .catch(err => this.handleError(err))
  },

  getProduct (id) {
    const endpoint = API_ENDPOINT + 'wp-json/wc/v2/products/' + id
    return RESTService.get(endpoint)
      .catch(err => this.handleError(err))
  },

  getCategories () {
    const endpoint = API_ENDPOINT + 'wp-json/wc/v2/products/categories'
    return RESTService.get(endpoint)
      .catch(err => this.handleError(err))
  },

  handleError (err) {
    console.log(err)
  }
}

export default ProductService
