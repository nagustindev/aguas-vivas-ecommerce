let productosJSON = [];

const productos = [
    'aquamarina-coral',
    'aquamarina-vapor',
    'cabrinha-ace-wood',
    'cabrinha-phantom',
    'duotone-grip3-dlab',
    'duotone-jaime',
    'duotone-wam-sls',
    'eleveight-process-cv3',
    'eleveight-process-v8',
    'fanatic-gecko-foil-hrs-2021',
    'fanatic-sk8-te-2023',
    'infinity-everready-elite-carbono',
    'jp-super-lightwind',
    'jp-ultimate-wave-pro-2024',
    'marcristal-surfboard',
    'mare-softboard-mini',
    'milano-fullgas',
    'naish-mad-dog-x32-main',
    'north-atmos',
    'north-charge-2022',
    'rusty-thekeg',
    'severne-fox-v2-2022',
    'shark-touring',
    'starboard-2024-genr',
    'starboard-blue-carbon-spice',
    'starboard-kode-wood-sandwich',
    'starboard-rio-2024',
    'starboard-wedge-starlite',
    'swellboards-ultra-race-14-carbon',
    'torq-horseshoe',
    'torq-modfun',
    'uva-carrascox',
    'uva-noserider'
];

const descripciones = [
    'Perfectas para Riders de todos los niveles de habilidad, estas tablas están listas para enfrentarse a todo tipo de aguas, ofreciendo una experiencia verdaderamente versátil.',
    'La nueva VAPOR presenta un volumen y una carga útil más generosos, que se adaptan a quienes buscan un viaje más llevadero y cargar más equipaje.',
    'Su diseño híbrido de freestyle y freeride te dan la libertad de estar cubierto sin importar las condiciones.',
    'Si estas buscando una tabla que te permita romper los límites del mundo del wave, entonces este es el modelo.',
    'Tabla de olas brillante con configuración de aletas Thruster, capaz de realizar giros extremos y saltos impresionantes.',
    'Perfecta para los riders que quieren practicar big air, realizar los últimos trucos de freestyle y sobretodo, divertirse mucho en el agua.',
    'Diseñada para surfear de forma radical, en una amplia variedad de condiciones, y esto es gracias a su contorno curvo y a su amplio rocker, junto a unos cantos de alto rendimiento.',
    'La tabla ideal para riders principiantes / intermedios / avanzados que quieran hacer freeride, freestyle o big air! ',
    'La tabla ideal para riders principiantes/ intermedios/ avanzados que quieran ir en la busqueda del freeride o big air.',
    'En modo clásico de freeride con una aleta estándar de 44 cm, puedes disfrutar del planeo progresivo, trasluchadas sin esfuerzo y una conducción atractiva por la que la Gecko es famosa.',
    'Con una longitud compacta de solo 216 cm y una forma de cola finamente afinada para una aceleración más rápida y una reacción más viva y rápida, la nueva versión de 91 l es la tabla de freestyle más compacta y radical que jamás se haya creado.',
    'Esta nueva tabla de remo de carrera se lanza rápidamente y mantiene el ritmo de manera notable en viajes largos.',
    'Planea con casi sin viento y alcanza la velocidad máxima de inmediato, navegando de manera cómoda, suave e increíblemente fácil para su tamaño.',
    'La experiencia definitiva de windsurfing es surcar olas limpias de punta a punta, que es el propósito principal para el cual estas tablas están diseñadas.',
    'Diseñada para surfers de todos los niveles, esta tabla combina resistencia, ligereza y un diseño atractivo.',
    'Tabla ideal para quienes están aprendiendo, material antiimpacto que proporciona una gran libertad para que el surfista maniobre con total seguridad.',
    'Es una tabla que a pesar de tener mucho rocker, mantiene buena velocidad para cruzar secciones y es bien suelta. Ideal para surfers de nivel avanzado y profesional.',
    'Tomando similitudes de la línea Mad Dog, las tablas Mad Dog X32 ofrecen una combinación equilibrada de giros receptivos, excelente aceleración, estabilidad y facilidad para atrapar olas.',
    'Tabla de freeride de alto rendimiento más popular para impulsos explosivos, loopings y aterrizajes estables y predecibles.',
    'Una forma de surf rápida y dedicada con giros suaves y mucha proyección, lo que permite un poderoso ataque vertical en las olas de la línea.',
    'Fue construida para adaptarse a las condiciones de todas partes del mundo. No podemos prometer que puedan surfear como Wade, pero al menos con esta tabla bajo sus pies, sabrán que es culpa suya y no de la tabla.',
    'La Severne FOX es la tabla de freeride/freerace más rápida de Severne. La forma del fondo, los recortes y el contorno están diseñados para permitirte ir rápido con comodidad y llevar tus habilidades de freeride/freerace al siguiente nivel.',
    'Especial para Riders adultos más bajos y más pesados que buscan un deslizamiento mejorado y una velocidad máxima para un rendimiento óptimo de SUP touring.',
    'La Gen-R es un modelo clave para las carreras de surf y el remo en general. El deck ligeramente retrasado ha sido optimizada para tener una gran estabilidad a la vez que es fácil de usar cuando se arranca desde la playa y se vuelve a subir a la tabla.',
    'La SPICE es una tabla de olas completamente nueva con un excelente carving, velocidad y capacidad de giro. El diseño ofrece mejores prestaciones que el modelo WEDGE y es más fácil de usar que la serie PRO.',
    'El eficiente balancín plano en una curva muy suave debajo del área de pie actúa como un pedal de acelerador y te permite entrar en control de crucero. Diferente a cualquier otra gama Kode jamás desarrollada.',
    'La tabla de windsurf ideal para principiantes. ¡Con esta, estarás garantizado de dar rápidamente tus primeros pasos en tu carrera de windsurf!',
    'Esta nueva línea reemplaza y mejora el modelo Wide Point. Sin comprometer la estabilidad y el volumen de la tabla, la tabla ofrece un mayor rendimiento.',
    'La tabla ideal para allwater y sprint. El volúmen en la tabla esta perfectamente equilibrado para lograr una race que surfe bien en olas y derive poco con el viento.',
    'Si estás buscando una tabla clásica para *noseriding*, sin el peso de una tabla tradicional, que ofrezca equilibrio y deslizamiento, facilidad para hacer *noseride* pero que aún así pueda girar, entonces esta es tu tabla.',
    'Para surfistas principiantes o expertos con experiencia, la versatilidad de la Mod Fun la convierte en una excelente opción si necesitas una sola tabla para enfrentar todas las condiciones donde vivas o viajes.',
    'Tabla corta de área standard , afinándose hacia las puntas y terminando en cola cuadrada con un leve bump. Para surfistas con nivel avanzado y condiciones de olas buenas.',
    'Tabla larga de área en punta bajando a la cola, de buena curva para todo tipo de olas.',
];

const precios = [
    740000, 535000, 1394145, 1408635, 3200000, 1288000, 1950000, 1335150, 1190000, 2460000, 1581290, 3800000, 2200000, 2878378, 605000, 450000,654564, 1800000, 1082520, 1779840, 520000, 1578921, 1000000, 2900000, 2500000, 3100000, 1900000, 2200000, 2400000, 826800,
    823670, 578000, 1000000
];

if (productos.length !== descripciones.length || productos.length !== precios.length) {
    console.error('El número de productos, descripciones y precios no coincide.');
} else {
    productosJSON = productos.map((producto, index) => {
        const name = producto.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
        const description = descripciones[index];
        const price = precios[index]; 
        const amount = Math.floor(Math.random() * 100) + 1;

        return {
            id: index + 1,
            name: name,
            description: description,
            price: price,  
            amount: amount
        };
    });

    console.log('Lista de productos en formato JSON:', productosJSON);

    productosJSON.forEach(producto => {
        console.log(`ID: ${producto.id}, Name: ${producto.name}, Description: ${producto.description}, Price: $${producto.price}, Amount: ${producto.amount}`);
    });
}

function toggleDescripcion(index, event) {
    const descripcionDiv = document.getElementById('descripcion-producto-' + index);
    const button = event.target;
    
    const arrayIndex = index - 1;

    if (arrayIndex < 0 || arrayIndex >= descripciones.length) {
        console.error(`Índice fuera de rango: ${arrayIndex}`);
        return;
    }

    if (descripcionDiv.style.display === 'none' || descripcionDiv.style.display === '') {
        descripcionDiv.style.display = 'block';
        descripcionDiv.innerHTML = `<p>${descripciones[arrayIndex]}</p>`;
        button.textContent = 'Ocultar Descripción';
    } else {
        descripcionDiv.style.display = 'none';
        button.textContent = 'Mostrar Descripción';
    }
}
