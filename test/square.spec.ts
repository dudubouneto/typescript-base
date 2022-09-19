/*
 *
 *
 * Aluno: Eduardo Bouhid Neto
 * RA: 163675
 * Data: 19/09/22
 * 
 * 
 */

import { Point } from "../src/point"
import { Square} from "../src/square"
describe('Square', () => {
    it('should create a square', () => {
        const ir = new Point(0, 0)
        const il = new Point(2, 0)
        const sr = new Point(0, 2)
        const sl = new Point(2, 2)

        const s = new Square(ir, il, sr, sl)
    })
    
    it('should return an error for invalid coordinates', () => {
        const ir = new Point(0, 0)
        const il = new Point(2, 0)
        const sr = new Point(0, 2)
        const sl = new Point(0, 4)
        
        // const s = new Square(ir, il, sr, sl)
        // Para testar erros em chamada de função precisamos usar uma wrapping function
        expect(() => {
            let s = new Square(ir, il, sr, sl)
        }).toThrow("Os pontos nao formam quadrado.")
    })

    it('should correctly return the square dimension (size=5)', () => {
        const ir = new Point(0, 0)
        const il = new Point(5, 0)
        const sr = new Point(0, 5)
        const sl = new Point(5, 5)
        
        let s = new Square(ir, il, sr, sl)
        let size = s.l()
        expect(size).toBe(5)
    })

    it('should return the area of the square (size=5 -> area=25)', () => {
        const ir = new Point(0, 0)
        const il = new Point(5, 0)
        const sr = new Point(0, 5)
        const sl = new Point(5, 5)
        
        let s = new Square(ir, il, sr, sl)
        let area = s.area()

        expect(area).toBe(25)
    })
})