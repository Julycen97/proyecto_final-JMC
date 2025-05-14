function PuntajeProducto({rating}) {
    const numEstrellas = 5;
    const todasEstrellas = Math.floor(rating);
    const mediaEstrella = rating % 1 !== 0;
    const estilosEstrellas = {
        margin: "0",
        padding: "0"
    };

    const estrellas = [];

    for (let i = 0; i < todasEstrellas; i++) {
        estrellas.push("★");
    };

    if(mediaEstrella){
        estrellas.push("✭");
    };

    while (estrellas.length < numEstrellas) {
        estrellas.push("☆");
    }

    return <div style={estilosEstrellas}>{estrellas}</div>;
}

export default PuntajeProducto;