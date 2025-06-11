//Configurar la conexión
/*const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Grupo-11:grupo11@cursadanodejs.ls9ii.mongodb.net/Node-js')
.then(() => console.log('Conexion exitosa a MongoDB'))
.catch(error => console.error('Error al conectar a MongoDB:', error));*/

import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://Grupo-11:grupo11@cursadanodejs.ls9ii.mongodb.net/Node-js')
.then(() => console.log('Conexión exitosa a MongoDB'))
.catch(error => console.error('Error al conectar a MongoDB:', error));



//Define un esquema para los superhéroes
const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: { type: String },
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: { type: Date, default: Date.now },
    creador: { type: String }
}, { collection: 'Grupo-11' });

const SuperHero = mongoose.model('SuperHero', superheroSchema);




//Función para insertar un nuevo superhéroe
async function insertSuperHero() {
try {
    const hero = new SuperHero({
        nombreSuperHeroe: 'Spiderman',
        nombreReal: 'Peter Parker',
        edad: 25,
        planetaOrigen: 'Tierra',
        debilidad: 'Radioactiva',
        poderes: ['Trepar paredes', 'Sentido arácnido', 'Super fuerza', 'Agilidad'],
        aliados: ['Ironman'],
        enemigos: ['Duende Verde'],
        creador: 'Martin'
    });

    await hero.save();
    console.log('Superhéroe insertado:', hero);
} catch (error) {
    console.error('Error al insertar el superhéroe:', error);
}
}

// Llamada a la función fuera de la definición
insertSuperHero();


//Función para actualizar un superhéroe:
async function updateSuperHero(nombreSuperHeroe) {
    try {
    const result = await SuperHero.updateOne(
    { nombreSuperHeroe: nombreSuperHeroe },
    { $set: { edad: 26 } }
    );

    console.log('Resultado de la actualización:', result);
    } catch (error) {
    console.error('Error al actualizar el superhéroe:', error);
    }
}

// Llamada a la función fuera de la definición
updateSuperHero('Spiderman');


//Función para eliminar un superhéroe de la colección:
async function deleteSuperHero(nombreSuperHeroe) {
try {
    const result = await SuperHero.deleteOne({ nombreSuperHeroe: nombreSuperHeroe });
    console.log('Superhéroe eliminado:', result);
} catch (error) {
    console.error('Error al eliminar el superhéroe:', error);
  }
}

// Llamada a la función fuera de la definición
deleteSuperHero('Spiderman');


//Función para buscar todos los superhéroes cuyo planeta de origen sea "Tierra":
async function findSuperHeroes() {
    const heroes = await SuperHero.find({ planetaOrigen: 'Tierra' });
    console.log('Superhéroes encontrados:', heroes);
} 

// Llamada a la función fuera de la definición
findSuperHeroes();


