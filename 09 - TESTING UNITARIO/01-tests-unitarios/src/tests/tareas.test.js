import Chai from 'chai';
import { Tareas } from '../utils/tareas.js';
const { expect, assert } = Chai;

describe('tests unitarios tareas', ()=>{
    it('deberia crear el contenedor de tareas vacio', ()=>{
        const tareas = new Tareas();

        const arrayTareas = tareas.list();

        expect(arrayTareas).to.have.lengthOf(0);

        assert.lengthOf(arrayTareas, 0);
        assert.strictEqual(arrayTareas.length, 0);

        // arrayTareas.should.have.lengthOf(0)
    });

    it('deberia crear tareas correctamente', ()=>{
        const tareas = new Tareas();

        tareas.add('run code')

        assert.strictEqual(tareas.list().length, 1);

        assert.deepStrictEqual(tareas.list(), [
            { complete: false, title: 'run code' }
        ])
    })

    it('deberia dar error cuando no hay tareas', ()=>{
        const tareas = new Tareas();

        const fn1 = () => {
            tareas.complete('tarea que no existe')
        }

        assert.throws(fn1, Error, 'No hay tareas')

    })

    it('deberia dar error cuando la tarea no existe', ()=>{
        const tareas = new Tareas();

        tareas.add('run code')

        const fn1 = () => {
            tareas.complete('tarea que no existe')
        }

        assert.throws(fn1, Error, 'Tarea no encontrada')
        
    })
})