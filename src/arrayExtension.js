/**
 * arrayExtension module.
 *
 * @module src/arrayExtension.js
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Type definitions
// ------------------------------------------------------------------------------

/**
 * Represents a student.
 *
 * @typedef {object} Student
 * @property {string} name - The student's name.
 * @property {number} points - The points.
 */

 // ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Returns the name of the students whose points is greater than,
 * or equal to, the average of the points.
 * 
 * @param {Student[]} students - Students to filter.
 * @throws {TypeError} - Throws 'The passed argument is not an array.' if the argument is not an array.
 * @returns {string[]} The name of the students better than average.
 */
export function filterBetterThanAverage (students) {
  if (!Array.isArray()) {
    throw new TypeError('The passed argument is not an array.')
  }
}
