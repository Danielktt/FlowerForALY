
// Obtener el elemento canvas
const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "#FFA216"; // Color de la linea

flower();

async function flower() {

        // console.log(canvas.width, canvas.height)
        
        // Parametros
        let outerPetals = 16;
        let innerPetals = 16;
        let curvature = 40; // Se rompe el petalo sobre 90 grados
        let outerRadius;
        let innerRadius;
        let circleRadius = canvas.offsetWidth/12;
        let inclination = 50;
        const ms = 20;

        
        let angle;
        const originX = canvas.offsetWidth/2, originY = canvas.offsetHeight/2;
        let cpx, cpy;
        let cpAngle;
        let x1, y1;
        let x2, y2;
        let distance;
        let cpRadius;
        
        const circleDistance = 360/outerPetals;
        angle = 90;

        
        
        for (let i = 0; i < outerPetals;i++) {
            
            // Parametros
            outerRadius = canvas.offsetWidth/2.4;
            innerRadius = canvas.offsetWidth/10;

            // Distancia entre petalos
            distance = (outerRadius-innerRadius)/innerPetals;

            // console.log(angle);
            // Punto de inicio del petalo
            x1 = Math.cos(gradosARadianes(angle))*circleRadius + originX;
            y1 = Math.sin(gradosARadianes(angle))*circleRadius + originY;


            // Curva del circulo interior
            ctx.beginPath();
            ctx.arc(originX, originY, circleRadius, gradosARadianes(angle+circleDistance), gradosARadianes(angle), true);
            ctx.stroke();
            await sleep(ms);


            for (let j = 0; j < innerPetals; j++) {

                // Posiciones punta del petalo x,y
                x2 = Math.cos(gradosARadianes(angle-inclination))*outerRadius + x1;
                y2 = Math.sin(gradosARadianes(angle-inclination))*outerRadius + y1;
                
                // Punto de control lado 1
                cpAngle = angle + curvature - inclination;
                cpRadius = outerRadius/1.75;
                cpx = Math.cos(gradosARadianes(cpAngle))*cpRadius + x1;
                cpy = Math.sin(gradosARadianes(cpAngle))*cpRadius + y1;
                
                
                // Pintar lado 1
                ctx.beginPath();
                ctx.moveTo(x1, y1)
                ctx.quadraticCurveTo(cpx, cpy, x2, y2);
                ctx.stroke();
                await sleep(ms); // Comentar si se quiere dibujar todo el petalo a la vez
    
                // ctx.beginPath();
                // ctx.moveTo(x1, y1);
                // ctx.lineTo(cpx, cpy);
                // ctx.closePath();
                // ctx.stroke();
                
                // Punto de control lado 2
                cpAngle = angle - curvature - inclination;
                cpx = Math.cos(gradosARadianes(cpAngle))*cpRadius + x1;
                cpy = Math.sin(gradosARadianes(cpAngle))*cpRadius + y1;
                
                // Pintar lado 2
                ctx.beginPath();
                ctx.moveTo(x2, y2)
                ctx.quadraticCurveTo(cpx, cpy, x1, y1);
                ctx.stroke();
                await sleep(ms);
    
                // Actualizar radio
                outerRadius = outerRadius - distance;
            }

            // Actualizar angulo
            angle = angle - circleDistance;


        }

        circle(originX, originY, circleRadius);
       
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function gradosARadianes(grados) {
    return grados * (Math.PI / 180);
}

async function circle(originX, originY, circleRadius) {
    ctx.fillStyle = "#8B4513"; // Color de relleno marrón
    ctx.strokeStyle = "#000"; // Color del borde
    ctx.lineWidth = 2; // Grosor del borde

    let distance = circleRadius/8;
    circleRadius = circleRadius/10;
    
    let x, y;
    let angle = 0;

    let circles = 26;
    const ms = 10;

    console.log(angle);
    console.log(originX);
    console.log(distance);

    for (let i=0;i<5;i++) {
        for (let j=0;j<circles;j++) {
            x = Math.cos(gradosARadianes(angle+i*4))*distance+originX;
            y = Math.sin(gradosARadianes(angle+i*4))*distance+originY;
        
            ctx.beginPath();
            ctx.arc(x, y, circleRadius, 0, 2 * Math.PI); // Círculo completo
            ctx.stroke(); // Dibuja el borde
            ctx.fill(); // Rellena el círculo
            
            angle = angle + 360/circles
            await sleep(ms);
        }
        distance+=12;
    }

    ctx.fillStyle = "#FFA216"; // Color de relleno marrón
    ctx.strokeStyle = "#000"; // Color del borde
    ctx.lineWidth = 2; // Grosor del borde

    // A
    dot(315,380);
    await sleep(ms);
    dot(317,372);
    await sleep(ms);
    dot(319,364);
    await sleep(ms);
    dot(321,356);
    await sleep(ms);
    dot(323,348);
    await sleep(ms);
    dot(327,340);
    await sleep(ms);

    dot(327,372);
    await sleep(ms);

    dot(331,348);
    await sleep(ms);
    dot(334,356);
    await sleep(ms);
    dot(336,364);
    await sleep(ms);
    dot(338,372);
    await sleep(ms);
    dot(340,380);
    await sleep(ms);

    // L
    dot(355,340);
    await sleep(ms);
    dot(355,348);
    await sleep(ms);
    dot(355,356);
    await sleep(ms);
    dot(355,364);
    await sleep(ms);
    dot(355,372);
    await sleep(ms);
    dot(355,380);
    await sleep(ms);

    dot(365,380);
    await sleep(ms);
    dot(375,380);
    await sleep(ms);

    // Y
    dot(380,340);
    await sleep(ms);
    dot(383,348);
    await sleep(ms);
    dot(386,356);
    await sleep(ms);
    dot(389,364);
    await sleep(ms);

    dot(393,372);
    await sleep(ms);
    dot(393,380);
    await sleep(ms);

    dot(396,364);
    await sleep(ms);
    dot(399,356);
    await sleep(ms);
    dot(402,348);
    await sleep(ms);
    dot(405,340);
    await sleep(ms);

    

    function dot(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, circleRadius, 0, 2 * Math.PI); // Círculo completo
        ctx.stroke(); // Dibuja el borde
        ctx.fill(); // Rellena el círculo
    }
}


function text() {
    ctx.fillStyle = "#FFA216"; // Color de relleno marrón
    ctx.strokeStyle = "#000"; // Color del borde
    ctx.lineWidth = 2; // Grosor del borde

    ctx.beginPath();
    ctx.arc(x, y, circleRadius, 0, 2 * Math.PI); // Círculo completo
    ctx.stroke(); // Dibuja el borde
    ctx.fill(); // Rellena el círculo

}



