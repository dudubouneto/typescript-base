/*
 *
 *
 * Aluno: Eduardo Bouhid Neto
 * RA: 163675
 * Data: 19/09/22
 * 
 * 
 */

export class Point {
    private x: number
    private y: number
    
    constructor(x: number, y: number) {
      this.x = x
      this.y = y
    }

    distance(p: Point): number {
      const difX = Math.pow((this.x - p.x), 2)
      const difY = Math.pow((this.y - p.y), 2)

      return Math.sqrt(difX + difY)
    }
  }