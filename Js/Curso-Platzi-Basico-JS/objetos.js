var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function(){
        //this hace referencia al objeto
        console.log(`Auto ${this.modelo} ${this.annio} `);
    }
};

console.log(miAuto.detallesDelAuto());