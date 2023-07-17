// Una cadena de texto con tu Nombre
const nombre = "Franco";

// Otra cadena de texto con tu Apellido
const apellido = "Santillán";

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = nombre + " " + apellido;

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
const estudianteMayus = (estudiante.toUpperCase());

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
const estudianteMinus = (estudiante.toLowerCase());

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let cantidad = (estudiante.length);

// Una variable que contenga la primera letra del Nombre
let primeraLetra = (estudiante.charAt(0));

// Otra variable que contenga la última letra del Apellido
let ultimaLetra = (apellido.charAt(8));

// Una cadena de texto que elimine los espacios de la variable "estudiante"
let sinEspacios = (estudiante.replace (" ", ""));

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let contenido = estudiante.includes(nombre);