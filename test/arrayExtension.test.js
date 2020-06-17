/**
 * Tests for the arrayExtension module.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import chai from 'chai'
import { filterBetterThanAverage } from '../src/arrayExtension.js'

const expect = chai.expect

const ERROR_MESSAGE_NOT_AN_ARRAY = 'The passed argument is not an array.'

// ------------------------------------------------------------------------------
//  filterBetterThanAverage
// ------------------------------------------------------------------------------
describe('filterBetterThanAverage', () => {
  describe('exceptions', () => {
    it(`Passing anything but an array should throw TypeError with the custom message '${ERROR_MESSAGE_NOT_AN_ARRAY}'.`, () => {
      expect(() => { filterBetterThanAverage('not an array') }).to.throw(TypeError, ERROR_MESSAGE_NOT_AN_ARRAY)
    })
  })

  describe('side effects', () => {
    it('Passing an array should return an array and not modify the argument.', () => {
      const ORIGINAL = [
        { name: 'Stina', points: 1 },
        { name: 'Erik', points: 2 },
        { name: 'Maja', points: 3 },
        { name: 'Sven', points: 4 }
      ]

      const arr = JSON.parse(JSON.stringify(ORIGINAL))
      expect(filterBetterThanAverage(arr))
        .to.be.an('array')
      expect(arr).to.eql(ORIGINAL)
    })
  })

  describe('return value', () => {
    it('Passing an empty array should return an empty array.', () => {
      expect(filterBetterThanAverage([]))
        .to.be.an('array')
        .and.to.eql([])
    })

    it('Passing four objects where two object points is better than or equal to the average should return two names.', () => {
      const arr = [
        { name: 'Stina', points: 1 },
        { name: 'Erik', points: 2 },
        { name: 'Maja', points: 3 },
        { name: 'Sven', points: 4 }
      ]

      expect(filterBetterThanAverage(arr))
        .to.be.an('array')
        .and.to.eql(['Maja', 'Sven'])
    })

    it('Passing four objects where two object points is equal and is better than or equal to the average should return two names.', () => {
      const arr = [
        { name: 'Stina', points: 4 },
        { name: 'Erik', points: 2 },
        { name: 'Maja', points: 1 },
        { name: 'Sven', points: 4 }
      ]

      expect(filterBetterThanAverage(arr))
        .to.be.an('array')
        .and.to.eql(['Stina', 'Sven'])
    })

    it('Passing three objects with the same points should return three names.', () => {
      const arr = [
        { name: 'Stina', points: 3 },
        { name: 'Erik', points: 3 },
        { name: 'Maja', points: 3 }
      ]

      expect(filterBetterThanAverage(arr))
        .to.be.an('array')
        .and.to.eql(['Stina', 'Erik', 'Maja'])
    })
  })
})
