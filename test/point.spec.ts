/*
 *
 *
 * Aluno: Eduardo Bouhid Neto
 * RA: 163675
 * Data: 19/09/22
 * 
 * 
 */

import { Point } from '../src/point'

describe('Point', () => {
 it('should create a point at the origin', () => {
    const p1: Point = new Point(0, 0)
 })
 it('should calculate distance between two points', () => {
   const p1 = new Point(0, 0)
   const p2 = new Point(2, 0)
   const d = p1.distance(p2)
   expect(d).toBe(2)
 })
})