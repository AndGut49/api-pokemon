const express = require("express");
const entrenadores = require("./entrenadores.json");

const app = express();

app.use(express.json());

app.get("/", function (request, response) {
    response.end("API Pokemon");
});


app.get("/obtenerEntrenadores", function (request, response) {
    response.json(peliculas);
});

app.get("/obtenerInfoEntrenador/:id", function (request, response) {
    const { genero } = request.params;

    const resultado = entrenador.filter((persona) =>
        persona.genero
            .map((genero) => genero.toLowerCase())
            .includes(genero.toLowerCase())
    );

    response.json(resultado);
});

app.get("/pokemonPorEntrenador/:id", function (request, response) {
    const { id } = request.params;

    const resultado = entrenadores.filter((entrenador) => entrenadorid === id)
        .map((entrenador) => entrenador.pokemon);

    response.json(resultado);
});

app.get("/agregarPokemon", function (request, response) {
    const {entrenadorSearch, pokemon } = request.body;

    
    if (!entrenadorSearch) {
        response.end("Error, no se ha indicado a que entrenador hay que agregar un pokemon");
        return;
    }
    else if(!pokemon){
        response.end("Error, no se ha indicado el nombre del pokemon a agregar");
    }

    const filteredEntrenador = entrenadores.filter(entrenador => entrenador.nombre === entrenadorSearch);

    if (index === -1) {
        response.end("No se encontró el ID");
    } else {
        peliculas.splice(index, 1);
        response.end(`Pelicula con ID ${id} eliminada`);
    }
});

app.get("/agregarEntrenador", function (request, response) {
    const entrenador = request.body;
    const lastId = entrenadores.length;

    peliculas.push({ ...entrenador, id: lastId++ });

    response.end("Entrenador agregado");
});

app.listen(8080, function () {
    console.log("> Escuchando puerto 8080");
});


/**
 * Reto: API de Pokemon
 *
 * Estructura de los datos de entrenadores
 *  {
 *    "id": 1,
 *    "nombre": "Ash Ketchup",
 *    "region": "Kanto",
 *    "pokemon": [
 *      "Pikachu",
 *      "Charmander",
 *      "Squirtle"
 *    ]
 * }
 *
 *
 * 1. Obtener la lista de los NOMBRES y ID de los entrenadores
 *
 * 2. Obtener la info de un entrenador por su ID
 *
 * 3. Obtener el listado de POKEMON de un entrenador (por ID)
 *
 * 4. Crear un nuevo entrenador
 *
 * 5. Agregar un pokemon a un entrenador
 */