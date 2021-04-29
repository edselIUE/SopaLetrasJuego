let h1Title = document.createElement("h1");
h1Title.innerText = "Sopa de letras";
let divTitleBlock = document.createElement("div").appendChild(h1Title);
document.body.appendChild(divTitleBlock);

let table = document.createElement("table");
document.body.appendChild(table);

let words = [
    "HTML",
    "TITLE",
    "HEAD",
    "BODY",
    "DOCTYPE",
    "DOM",
    "LABEL",
    "INPUT",
    "TEXTAREA",
    "SPAN",
    "UL",
    "B",
    "I",
    "U",
    "STRONG",
    "CSS",
    "LINK",
    "FORM"
]

let letters = [
    "Y	L	U	U	C	B	J	N	Q	V	G	S	D	L	H",
    "W	M	L	V	K	L	X	P	P	N	O	P	T	G	N",
    "U	C	A	K	H	S	V	H	E	A	D	A	U	M	E",
    "L	U	B	C	B	B	B	E	N	G	P	N	P	Q	P",
    "Z	T	E	R	Z	N	X	O	M	N	P	Y	N	D	Y",
    "C	E	L	G	M	B	L	L	H	O	C	W	I	L	T",
    "S	X	V	I	M	X	H	H	Z	R	X	H	K	Q	C",
    "S	T	D	M	P	Q	C	T	L	T	K	E	E	M	O",
    "Q	A	L	I	F	U	O	M	O	S	D	Y	L	H	D",
    "A	R	X	F	U	L	S	L	B	H	B	E	I	V	N",
    "O	E	I	T	M	B	M	E	H	U	O	A	N	M	Q",
    "T	A	V	L	B	Y	R	M	A	C	D	Z	K	O	P",
    "B	L	L	M	O	K	O	Z	Y	Y	Y	M	Y	D	X",
    "L	O	I	H	W	H	F	R	O	D	M	J	K	M	U",
    "I	G	C	E	L	T	I	T	Z	T	N	E	I	V	J",
];

for (let i = 0; i < letters.length; i++) {
    let tableRow = document.createElement("tr"); /*Creates a row*/
    let wordRow = letters[i].split(""); /*Creates an array with the letters*/
    for (let j = 0; j < wordRow.length; j++) { /*Loops through wordRow*/
        let tableElement = document.createElement("td"); /*Creates a table element for the row*/
        tableElement.setAttribute("id",`i=${i} j=${j}`)
        tableElement.setAttribute("onclick",`checkLetter([${i},${j}]);`)
        if (wordRow[j] != undefined) { /*If j position in wordRow has a letter*/
            tableElement.innerText = wordRow[j]; /*Inserts a letter inside the table element*/
            tableRow.appendChild(tableElement); /*Inserts tableElement inside the row*/
        }
    }
    letters[i] = tableRow; /*Replaces the string in each position with a row tag with the td elements*/
}

for (let i = 0; i < letters.length; i++) {
    table.appendChild(letters[i]) /*Inserts each td inside the table*/
}

let definitions = [
    "div-Etiqueta contenedora de tipo block(ocupa toda la linea)",
    "html-Etiqueta que define la raiz de un documento HTML",
    "title-Etiqueta que define el título de un documento",
    "head-Etiqueta que define la parte del codigo HTML donde se carga información extra como fondos, estilos, etc.Del documento",
    "body-Etiqueta que define el cuerpo del documento",
    "doctype-Etiqueta que define el tipo de documento como la versión del HTML a usar por los navegadores",
    "dom-Es un objeto que permite acceder a todos los elementos de un documento HTML en Javascript",
    "label-Etiqueta que permite, entre varias cosas, mayor legibilidad en los formularios permitiendo añadir texto",
    "input-Contenedora para texto",
    "textarea-Contenedora para un campo de texto más amplio",
    "span-Etiqueta contenedora de tipo inline(no ocupa toda la linea)",
    "ul-Define una lista desornada",
    "il-Define un elemento de una lista",
    "b-Etiqueta que permite usar letras en negrita",
    "i-Etiqueta que permite usar letras en cursiva",
    "u-Etiqueta que permite subrayar",
    "strong-Etiqueta que permite enfatizar",
    "css-Lenguaje en cascada que permite añadir estilos a una página HTML",
    "link-Etiqueta que define una relacion entre un recurso externo y el documento",
    "form-Etiqueta que define un formulario HTML para la entrada de datos",
];

let h2Title = document.createElement("h2");
h2Title.innerText = "Lista de definiciones";
let divDefinitionsTitleBlock = document.createElement("div").appendChild(h2Title);
document.body.appendChild(divDefinitionsTitleBlock);

let definitionsUnorderedList = document.createElement("ul");
document.body.appendChild(definitionsUnorderedList);

for(let i = 0; i<definitions.length; i++){
    let listElement = document.createElement("li");
    let uElement = document.createElement("u");
    let pElement = document.createElement("p");
    let word = definitions[i].split("-")[0];
    let definition = definitions[i].split("-")[1];
    uElement.innerText=word;
    pElement.innerText=definition;
    listElement.appendChild(uElement);
    listElement.appendChild(pElement);
    definitionsUnorderedList.appendChild(listElement);
}

let selectedLetters = []

function checkLetter(pos){
    letterTag = document.getElementById(`i=${pos[0]} j=${pos[1]}`);
    
    if(letterTag.style.backgroundColor == ""){
        letterTag.style.backgroundColor = "yellow";
        selectedLetters.push(letterTag);
    }else{
        if(letterTag.style.backgroundColor != "green"){
        letterTag.style.backgroundColor = "";
            for(let i = 0; i < selectedLetters.length; i++){
                if(selectedLetters[i]===undefined){
                    delete selectedLetters[i];
                }else{
                    if(selectedLetters[i].getAttribute("id") === `i=${pos[0]} j=${pos[1]}`){
                        delete selectedLetters[i];
                    }
                }
            }
        }
    }
    console.log(selectedLetters);
    checkWord(retrieveWordFromArray(selectedLetters));
}

function retrieveWordFromArray(lettersArray){
    let word = "";
    for(let i = 0; i < selectedLetters.length; i++){
        if(selectedLetters[i]!==undefined){
            word += selectedLetters[i].innerText;
        }
        console.log(word);
    }
    return word;
}

function checkWord(word){
    if(words.includes(word)){
        for(let i = 0; i < selectedLetters.length; i++){
            if(selectedLetters[i]!==undefined){
                selectedLetters[i].style.backgroundColor = "green";
                delete selectedLetters[i];
            }
        }
        for(let i = 0; i < words.length; i++){
            if(words[i]===word){
                words[i] = words[i].strike();
            }
        }
        console.log(words);
    }
}
