/* eslint-env mocha */
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import ProductService from '@/api/ProductService'

chai.use(chaiAsPromised)
const expect = chai.expect

describe('UserService', () => {
  describe('getProducts()', () => {
    it('should accept promise as a response', () => {
      const result = ProductService.getProducts()
      return expect(result).to.be.eventually.fulfilled
    })

    it('should accept promise as a response', () => {
      const result = ProductService.getEndpoint()
      return expect(result).to.equal('http://localhost:8080/')
    })
  })
})
