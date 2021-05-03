/*Variable definitions*/ 
let table = document.createElement("table");
let wordList = document.createElement("ul");
let wordListDiv = document.getElementsByClassName("word-list-container");
let tableDiv = document.getElementsByClassName("table-container");
let selectedLetters = []

let words = [
    "Palabras:",
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

/*table and wordlist insertions*/
table.setAttribute("class","table");
tableDiv[0].appendChild(table);
wordList.setAttribute("class","overview");
wordListDiv[0].appendChild(wordList);

/*Table and wordlist display code*/

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


for (let i = 0; i < words.length; i++) {
        let wordListElement = document.createElement("li");
        if(i == 0){
            let wordListTitle = document.createElement("u");
            wordListTitle.innerText = words[i];
            wordListElement.appendChild(wordListTitle);
        }else{
            wordListElement.innerText = words[i];
        }
        wordListElement.setAttribute("id",`${i}`);
        wordList.appendChild(wordListElement);
}


/*Function definitions*/

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
    checkWord(retrieveWordFromArray(selectedLetters));
}

function retrieveWordFromArray(lettersArray){
    let word = "";
    for(let i = 0; i < selectedLetters.length; i++){
        if(selectedLetters[i]!==undefined){
            word += selectedLetters[i].innerText;
        }
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
                wordTag = document.getElementById(`${i}`);
                score = document.getElementById("scoreCounter");
                score.innerText = `${parseInt(score.innerText)+100}`
                wordTag.style.textDecoration = "line-through";
                if(parseInt(score.innerText)===1800){
                    alert("Ganaste!");
                }
            }
        }
    }
}
