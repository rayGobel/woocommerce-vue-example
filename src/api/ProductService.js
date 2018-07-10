const API_ENDPOINT = process.env.API_ENDPOINT
const ProductService = {
  getProducts (limit) {
    return Promise.resolve(['ok', API_ENDPOINT])
  },

  getEndpoint () {
    return API_ENDPOINT
  }
}

export default ProductService
