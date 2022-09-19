/*
 *
 *
 * Aluno: Eduardo Bouhid Neto
 * RA: 163675
 * Data: 19/09/22
 * 
 * 
 */

import { Point } from "./point"
export class Square{
    private ir: Point
    private il: Point
    private sr: Point
    private sl: Point

    constructor(ir: Point, il: Point, sr: Point, sl: Point){
        this.ir = ir
        this.il = il
        this.sr = sr
        this.sl = sl

        const s1 = ir.distance(il)
        const s2 = il.distance(sl)
        const s3 = sl.distance(sr)
        const s4 = sr.distance(ir)

        if ((s1 != s2) || (s1 != s3) || (s1 != s4) || (s2 != s3) || (s2 != s4) || (s3 != s4)){
            throw new Error("Os pontos nao formam quadrado.")
        }
    }

    l(): number {
        // se o objeto quadrado existe, não precisamos nos preocupar com qual lado retornar
        return this.ir.distance(this.il)
    }
    area(): number {
        return Math.pow(this.l(), 2)
    }
}