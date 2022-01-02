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

  describe('minting', () => {
    it('should create a new token', async () => {
      const result = await contract.mint('test1')
      const totalSupply = await contract.totalSupply()
      assert.equal(totalSupply, 1)

      const event = result.logs[0].args

      assert.equal(
        event._from, 
        '0x0000000000000000000000000000000000000000', 
        'from address should be null'
      )
      assert.equal(event._to, accounts[0], 'to address should be the msg.sender')

      // In case you try to mint the same token twice, it should fail
      await contract.mint('test1').should.be.rejected
    })
  })

  describe('indexing', () => {
    it('should list all NFTs', async () => {
      // Mint 3 tokens
      await contract.mint('test2')
      await contract.mint('test3')
      await contract.mint('test4')

      const totalSupply = await contract.totalSupply()
      
      const result = []
      for (let i = 0; i < totalSupply; i++) {
        result.push(await contract.nftArr(i))
      }

      const expected = ['test1', 'test2', 'test3', 'test4']
      assert.deepEqual(result, expected)
    })  
  })

})