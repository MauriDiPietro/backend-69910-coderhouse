import { describe, expect, test } from "@jest/globals";
import Calc from "../calculadora.js";

describe('conjunto de pruebas de calculadora', ()=>{
    // it('', ()=>{})
    test('deberia sumar dos numeros', ()=>{
        //preparacion
        const num1 = 3;
        const num2 = 10;
        const resultadoEsperado = 13;

        //ejecucion
        const resultado = Calc.suma(num1, num2);

        //verificacion
        expect(resultado).toBe(resultadoEsperado);
        expect(resultado).toBeDefined();
        expect(resultado).not.toBeUndefined();
        expect(resultado).toBeGreaterThan(12);
        expect(resultado).toBeGreaterThanOrEqual(13);
        expect(resultado).toBeLessThan(14);
    })

    test('si sumo argumentos no numericos, debe responder con un error', ()=>{
        const num1 = 3;
        const num2 = ["hola"];

        expect(()=>Calc.suma(num1, num2)).toThrow('argumentos invalidos');
        expect(()=>Calc.suma(num1, num2)).toThrow();
    })

    // test('', ()=>{
        
    // })

    // test('', ()=>{
        
    // })
})