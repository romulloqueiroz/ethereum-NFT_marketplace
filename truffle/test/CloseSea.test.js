/* eslint-disable no-undef */
const {assert} = require('chai')

const CloseSeaContract = artifacts.require('./CloseSea')

require('chai')
.use(require('chai-as-promised'))
.should()

contract('CloseSeaContract', accounts => {
  let contract

  before(async () => {
    contract = await CloseSeaContract.deployed()
  })

  describe('deployment', () => {
    it('should deploy correctly', async () => {
      const address = contract.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })
    it('should have the right name and symbol', async () => {
      const name = await contract.name()
      const symbol = await contract.symbol()
      assert.equal(name, 'CloseSea')
      assert.equal(symbol, 'CLS')
    })
  })
})