//TODO: FÜR BESSERE LESBARKEIT Extentsion: Better Comments

//? Kapitel 1: document.querrySelector & document.getElement...

//* Ich möchte erstmal alle gängigen Selectoren zeigen via "class" via "id" und über das "Item-tag" und dabei die Unterschiede Zeigen.
//* Oft kommt es zu Fehlern bei der Anwendung von .methoden auf die Elemente weil der falsche Selector benutzt wurde
//? Führe das Html aus und checke die log's in der Browserconsole!

//! ////////////////////////////////////////////////////////////////////////////////////

//! document.querrySelector("string")
//* detectet NUR das erste Element was er findet als Div!
//* Nicht nur für Tags sondern auch für Id's verwendebar -> weil id's einzigartig im Html sein müssen!
//TODO: document.querrySelector("#blabla") -> ID's
//* gibt html Element direkt wieder!

const firstField = document.querySelector("div");
console.log(`Das erste findbare div via querrySelector("div"):\n`, firstField);

const secondField = document.querySelector("#chapterTwo");
console.log(`Das zweite Field via querrySelector("#id"):\n`, secondField);

//* Da es sich hierbei um das direkte html Element handelt können wir direkt .methoden anwenden wie z.B:
//* .style -> man kann alle css eigenschaften nutzen
//* Schreibweise: aus Background-color wird backgroundColor -> camelCase verwenden

firstField.style.backgroundColor = "yellow";
secondField.style.border = "1px solid blue";

//! ////////////////////////////////////////////////////////////////////////////////////

//! document.querrySelectorAll("string")
//* detectet ALLE  Elemente die auf das Tag passen
//* Nicht nur für Tags sondern auch für klassen verwendebar
//TODO: document.querrySelectorAll(".blabla") -> classes
//* gibt einen ARRAY zurück gefüllt mit den html Elementen!!!
//* .methoden können nicht direkt auf die "allDivs" angewendet werden

const allDivs = document.querySelectorAll("div");
console.log(`Alle div's via querrySelectorAll("div"):\n\n`, `NodeList Array (click to check details):\n`, allDivs);

//* man kann durch den Array iterieren um auf die einzelnen Elemente dann .methoden anzuwenden

allDivs.forEach((element) => {
  console.log("forEach Element of NodeList above: Hello:)");
  //element.style.fontSize ="2rem";
});

//? schlechte wahl weil verschiedene Divs enthalten sind, Eltern und Kind divs zusammen im Array (check log zeile 40 im Browser)
// for (let div of allDivs) {
//   div.style.width = "10vw";
//   div.style.height = "5vh";
//   div.style.border = "1px solid red";
// }

//* über den Index kann man aber auf einzelne Elemente in dem Array zugreifen
allDivs[2].style.backgroundColor = "red";
allDivs[11].style.border = "1px solid green";

//* Zugriff auf Element mit klassen via querySelectorAll(".blabla")
const fieldsGood = document.querySelectorAll(".field");

console.log(
  `Nur die div's mit der Klasse "field "via querySelectorAll(".class"):\n\n`,
  `kein problem hier weil NodeList Array.\n`,
  `dadurch sind higherOrderFunctions möglich!\n\n`,
  fieldsGood
);

//! ////////////////////////////////////////////////////////////////////////////////////

//! document.getElementsByClassName("string")
//* detectet ALLE Elemente die die klasse haben
//* gibt einen Array zurück
//? nicht mehr unbedingt verwenden weil higher order Functions nicht funktionieren. (weil kein richtiger Array- check consol.log im browser)

const fieldsBad = document.getElementsByClassName("field");
console.log(
  `Nur die div's mit der Klasse "field "via getElementsByClassName("class"):\n\n`,
  `problem hier ist das HTMLCollection.\n`,
  `dadurch sind keine higherOrderFunctions möglich!(why ever)\n`,
  fieldsBad
);

//* standart for of loops durch den HTMLCollections Array sind möglich:
// for (let field of fields) {
//   field.style.display = "flex";
//   field.style.margin = "10px";
//   field.style.width = " 100vw";
//   field.style.height = "30vh";
//   field.style.backgroundColor = "yellow";
// }
//*  higherOrderFunctions nicht
// fields.forEach((element) => {
//   console.log("hello");
// });

//! ////////////////////////////////////////////////////////////////////////////////////

//! document.getElementbyID("string")
//* da id einzigartig im html sein MUSS wird auch nur ein Element wiedergegeben
//* gibt html Element direkt wieder und .methoden sind direkt anwendbar

const chapterTwo = document.getElementById("chapterTwo");
console.log(`Das zweite Field via querrySelector("#id"):\n`, chapterTwo);

chapterTwo.style.backgroundColor = "green";

//! ////////////////////////////////////////////////////////////////////////////////////
//? ////////////////////////////////////////////////////////////////////////////////////
//? ////////////////////////////////////////////////////////////////////////////////////
//! ////////////////////////////////////////////////////////////////////////////////////

//? Kapitel 2: Elemente dem DOM hinzufügen
