let data = {
    star_wars_1: {
        url: "./img/star_wars/Skill.png",
        categoria: "star__wars",
        nombre: "Jarro Cabeza",
        precio: "$ 17.000",
        descripcion: "La cabeza taza es especial para tomar lechita en las mañanas, para que la fuerza te acompañe"
    },
    star_wars_2: {
        url: "./img/star_wars/Skill-1.png",
        categoria: "star__wars",
        nombre: "Pop darth vader",
        precio: "$ 19.000",
        descripcion: "Pop cabezones de darth vader, para que la oscuridad te acompañe "
    },
    star_wars_3: {
        url: "./img/star_wars/Skill-2.png",
        categoria: "star__wars",
        nombre: "Yoda escondido",
        precio: "$ 5.000",
        descripcion: "Yoda que no quiere ser vendido, si lo compras se escondera y jamas lo encontraras"
    },
    star_wars_4: {
        url: "./img/star_wars/Skill-3.png",
        categoria: "star__wars",
        nombre: "Los Stormtroopers",
        precio: "$ 12.500",
        descripcion: "stormtroopers coleccionable"
    },
    star_wars_5: {
        url: "./img/star_wars/Skill-4.png",
        categoria: "star__wars",
        nombre: "Mini yoda",
        precio: "$ 300.000",
        descripcion: "Mini yoda de jugue para jugar "
    },
    star_wars_6: {
        url: "./img/star_wars/Skill-5.png",
        categoria: "star__wars",
        nombre: "darth vader moderno",
        precio: "$ 3.000",
        descripcion: "darth vader moderno "
    },
    consola_1: {
        url: "./img/consolas/Skill.png",
        categoria: "consolas",
        nombre: "Joystick",
        precio: "$ 5.000",
        descripcion: "Joystick Xbox"
    },
    consola_2: {
        url: "./img/consolas/Skill-1.png",
        categoria: "consolas",
        nombre: "Play 5",
        precio: "$ 2.000",
        descripcion: "Super usada pero sigue funcionando"
    },
    consola_3: {
        url: "./img/consolas/Skill-2.png",
        categoria: "consolas",
        nombre: "Xbox serie X",
        precio: "$ 670.000",
        descripcion: "Xbox serie X nueva, sin usos"
    },
    consola_4: {
        url: "./img/consolas/Skill-3.png",
        categoria: "consolas",
        nombre: "nintendo",
        precio: "$ 62.990",
        descripcion: "Nintendo remasterizada"
    },
    consola_5: {
        url: "./img/consolas/Skill-4.png",
        categoria: "consolas",
        nombre: "Joystick switch",
        precio: "$ 30.991",
        descripcion: " Joystick para jugar en switch"
    },
    consola_6: {
        url: "./img/consolas/Skill-5.png",
        categoria: "consolas",
        nombre: "Consola retro",
        precio: "$ 3.500",
        descripcion: "Consola retro, viene con 3 juegos"
    },
    diverso_1: {
        url: "./img/diversos/Skill.png",
        categoria: "diversos",
        nombre: "Polera japonesa",
        precio: "$ 2.990",
        descripcion: "Polera marca japonesa, que viene de china y se vende en chile"
    },
    diverso_2: {
        url: "./img/diversos/Skill-1.png",
        categoria: "diversos",
        nombre: "Articulo sorpresa",
        precio: "$ 1.000",
        descripcion: "Si compras este articulo, te llegara una caja con un articulo sorpresa de nuestra tienda"
    },
    diverso_3: {
        url: "./img/diversos/Skill-2.png",
        categoria: "diversos",
        nombre: "Sonic",
        precio: "$ 100.000",
        descripcion: "Sonic colleccionable"
    },
    diverso_4: {
        url: "./img/diversos/Skill-3.png",
        categoria: "diversos",
        nombre: "Radio retro",
        precio: "$ 700.000",
        descripcion: "Radio retro que solo funcionan las emisoras AM"
    },
    diverso_5: {
        url: "./img/diversos/Skill-4.png",
        categoria: "diversos",
        nombre: "Lentes VR",
        precio: "$ 1.000.000",
        descripcion: "Lenes VR en oferta, no pierda su oportunidad en comprarlos"
    },
    diverso_6: {
        url: "./img/diversos/Skill-5.png",
        categoria: "diversos",
        nombre: "Disfraz pikachu",
        precio: "$ 55.050",
        descripcion: "Disfraz para convertirte en pikachu, tiene ventiladores internos"
    }
}

export const getData = (select) => {
    return data[select];
}

export const getCategory = (numberId) => {
    let getCategoryId = [];
    for (let id in data) {
        if (data[id].categoria === data[numberId].categoria) {
            getCategoryId.push(id);
        }
    }
    return getCategoryId;
}

export const updateProductSimilary = (colectionId) => {
        
       
       }

    


