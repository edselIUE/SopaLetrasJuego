let gridArray = 
[
    "<table>",
    "<tr><td>Y</td><td>L</td><td>U</td><td>U</td><td>C</td><td><b>B</b></td><td>J</td><td>N</td><td>Q</td><td>V</td><td>G</td><td><b><b>S</b></b></td><td>D</td><td>L</td><td>H</td></tr>",
    "<tr><td>W</td><td>M</td><td><b>L</b></td><td>V</td><td>K</td><td>L</td><td>X</td><td>P</td><td>P</td><td>N</td><td>O</td><td><b>P</b></td><td><b>T</b></td><td>G</td><td>N</td></tr>",
    "<tr><td>U</td><td>C</td><td><b>A</b></td><td>K</td><td>H</td><td>S</td><td>V</td><td><b>H</b></td><td><b>E</b></td><td><b>A</b></td><td><b>D</b></td><td><b>A</b></td><td><b>U</b></td><td>M</td><td><b>E</b></td></tr>",
    "<tr><td>L</td><td>U</td><td><b>B</b></td><td>C</td><td>B</td><td>B</td><td>B</td><td>E</td><td>N</td><td><b>G</b></td><td>P</td><td><b>N</b></td><td><b>P</b></td><td>Q</td><td><b>P</b></td></tr>",
    "<tr><td>Z</td><td><b>T</b></td><td><b>E</b></td><td>R</td><td>Z</td><td>N</td><td>X</td><td>O</td><td>M</td><td><b>N</b></td><td>P</td><td>Y</td><td><b>N</b></td><td>D</td><td><b>Y</b></td></tr>",
    "<tr><td><b>C</b></td><td><b>E</b></td><td><b>L</b></td><td>G</td><td>M</td><td>B</td><td>L</td><td>L</td><td>H</td><td><b>O</b></td><td>C</td><td>W</td><td><b>I</b></td><td><b>L</b></td><td><b>T</b></td></tr>",
    "<tr><td><b>S</b></td><td><b>X</b></td><td>V</td><td>I</td><td>M</td><td>X</td><td>H</td><td><b>H</b></td><td>Z</td><td><b>R</b></td><td>X</td><td>H</td><td>K</td><td>Q</td><td><b>C</b></td></tr>",
    "<tr><td><b>S</b></td><td><b>T</b></td><td>D</td><td>M</td><td>P</td><td>Q</td><td>C</td><td><b>T</b></td><td>L</td><td><b>T</b></td><td>K</td><td>E</td><td>E</td><td>M</td><td><b>O</b></td></tr>",
    "<tr><td>Q</td><td><b>A</b></td><td>L</td><td>I</td><td>F</td><td><b>U</b></td><td>O</td><td><b>M</b></td><td>O</td><td><b>S</b></td><td>D</td><td>Y</td><td><b>L</b></td><td>H</td><td><b>D</b></td></tr>",
    "<tr><td>A</td><td><b>R</b></td><td>X</td><td>F</td><td>U</td><td><b>L</b></td><td>S</td><td><b>L</b></td><td>B</td><td>H</td><td><b>B</b></td><td>E</td><td><b>I</b></td><td>V</td><td>N</td></tr>",
    "<tr><td>O</td><td><b>E</b></td><td>I</td><td>T</td><td>M</td><td>B</td><td><b>M</b></td><td>E</td><td>H</td><td>U</td><td><b>O</b></td><td>A</td><td><b>N</b></td><td><b>M</b></td><td>Q</td></tr>",
    "<tr><td>T</td><td><b>A</b></td><td>V</td><td>L</td><td>B</td><td>Y</td><td><b>R</b></td><td>M</td><td>A</td><td>C</td><td><b>D</b></td><td>Z</td><td><b>K</b></td><td><b>O</b></td><td>P</td></tr>",
    "<tr><td>B</td><td>L</td><td><b>L</b></td><td>M</td><td>O</td><td>K</td><td><b>O</b></td><td>Z</td><td>Y</td><td>Y</td><td><b>Y</b></td><td>M</td><td>Y</td><td><b>D</b></td><td>X</td></tr>",
    "<tr><td>L</td><td>O</td><td><b>I</b></td><td>H</td><td>W</td><td>H</td><td><b>F</b></td><td>R</td><td>O</td><td>D</td><td>M</td><td>J</td><td>K</td><td>M</td><td><b>U</b></td></tr>",
    "<tr><td>I</td><td>G</td><td>C</td><td><b>E</b></td><td><b>L</b></td><td><b>T</b></td><td><b>I</b></td><td><b>T</b></td><td>Z</td><td>T</td><td>N</td><td>E</td><td>I</td><td>V</td><td>J</td></tr>,",
    "</table>"
]

let wordsArray = 
[
    "<ul class = \"overview\">",
    "<li><u>Palabras:</u></li>",
    "<li>HTML</li>",
    "<li>TITLE</li>",
    "<li>HEAD</li>",
    "<li>BODY</li>",
    "<li>DOCTYPE</li>",
    "<li>DOM</li>",
    "<li>LABEL</li>",
    "<li>INPUT</li>",
    "<li>TEXTAREA</li>",
    "<li>SPAN</li>",
    "<li>UL</li>",
    "<li>B</li>",
    "<li>I</li>",
    "<li>U</li>",
    "<li>STRONG</li>",
    "<li>CSS</li>",
    "<li>LINK</li>",
    "<li>FORM</li>",
    "</ul>"
]

document.write("<div><h1>Sopa de letras</h1></div>")

for(i = 0; i < gridArray.length; i++){
    document.write(gridArray[i])
}

for(i = 0; i < wordsArray.length; i++){
    document.write(wordsArray[i])
}