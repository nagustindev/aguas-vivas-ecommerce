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
    'starboard-blue-carbon',
    'starboard-kode-wood-sandwich',
    'starboard-rio-2024',
    'starboard-wedge-starlite',
    'swellboards-ultra-race-14-carbon',
    'torq-horseshoe',
    'torq-modfun',
    'uva-carrascox',
    'uva-noserider'
];

// Generar dinámicamente la lista de productos y mostrarla en la consola
console.log('Lista de productos:');
productos.forEach((producto, index) => {
    console.log(`${index + 1}. ${producto}`);
});