/**
 * arrayExtension module.
 *
 * @module src/renameMe
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Ellen Nu <en999zz@student.lnu.se>
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
 * @returns {string[]} The name of the students better than average.
 */
export function filterBetterThanAverage (students) {
  if (!Array.isArray(students)) {
    throw TypeError('The passed argument is not an array.')
  }

  // Calculate the average.
  const average =
    students.reduce((sum, student) => sum + student.points, 0) / students.length

  // First get the one with points over or equal to the mean point (filter)
  // then just return the names (map).
  return students
    .filter(student => student.points >= average)
    .map(student => student.name)

  // // ALTERNATIVE SOLUTION
  // // A very traditional approach.
  // const count = students.length
  // const names = []
  // let sum = 0

  // for (let i = 0; i < count; i++) {
  //   sum = sum + students[i].points
  // }

  // if (count) {
  //   const average = sum / count

  //   for (let i = 0; i < count; i++) {
  //     if (students[i].points >= average) {
  //       names.push(students[i].name)
  //     }
  //   }
  // }

  // return names
}
