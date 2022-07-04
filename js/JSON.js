const ataques = [  {id:1, personaje: "Narciso", nombre:"Guadañazo", daño: 20, costo: 10},
                   {id:2, personaje: "Narciso", nombre:"Alierto de fuego", daño: 40, costo: 25},
                   {id:3, personaje: "Lautaro", nombre:"Zarpazo", daño: 20, costo: 20},
                   {id:4, personaje: "Lautaro", nombre:"Boleadoras", daño: 5, costo: 10},
                   {id:5, personaje: "Ciro", nombre:"Espadazo", daño: 10, costo: 10},
                   {id:6, personaje: "Ciro", nombre:"Serpiente de arena", daño: 40, costo: 25},
                   {id:7, personaje: "Alek", nombre:"Tridentazo", daño: 20, costo: 10},
                   {id:8, personaje: "Alek", nombre:"Brazo-arpón", daño: 25, costo: 25},
                   {id:9, personaje: "Melta", nombre:"Hachazo", daño: 25, costo: 20},
                   {id:10, personaje: "Melta", nombre:"Descarga a tierra", daño: 10, costo: 20},
                   {id:11, personaje: "Togo", nombre:"Flechazo", daño: 25, costo: 25},
                   {id:12, personaje: "Togo", nombre:"Disparo de falanges", daño: 50, costo: 40},
                   ];
const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};
for (const ataque of ataques) {
    guardarLocal(ataque.id, JSON.stringify(ataques));
}