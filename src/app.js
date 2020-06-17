/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import { filterBetterThanAverage } from './arrayExtension.js'

const arr = [
  { name: 'Stina', points: 1 },
  { name: 'Erik', points: 2 },
  { name: 'Maja', points: 3 },
  { name: 'Sven', points: 4 }
]

const result = filterBetterThanAverage(arr)
console.log(result) // ['Maja', 'Sven']
