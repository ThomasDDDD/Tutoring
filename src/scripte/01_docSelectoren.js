//TODO: FÜR BESSERE LESBARKEIT Extentsion: Better Comments

//? Kapitel 1: document.querrySelector & document.getElement...

//* Ich möchte erstmal alle gängigen Selectoren zeigen via "class" via "id" und über das "Item-tag" und dabei die Unterschiede Zeigen.
//* Oft kommt es zu Fehlern bei der Anwendung von .methoden auf die Elemente weil der falsche Selector benutzt wurde
//? Führe das Html aus und checke die log's in der Browserconsole!

//! ////////////////////////////////////////////////////////////////////////////////////

//! document.querrySelector("string")

//* detectet NUR das erste Element was er findet als Div!
//* Nicht nur für Tags sondern auch für Id's verwendebar -> weil id's einzigartig im Html sein müssen!
//TODO: document.querrySelector("div") -> Tag's
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

//* detectet ALLE Elemente die auf das html "tag" oder auf ein html mit einer ".class" passen
//* gibt einen ARRAY zurück gefüllt mit den html Elementen!!!
//* Nicht nur für Tags sondern auch für klassen verwendebar
//TODO: document.querrySelectorAll("div") -> Tag's
//TODO: document.querrySelectorAll(".blabla") -> classes
//* .methoden können nicht direkt auf die "allDivs" angewendet werden weil es sich um ein Array handelt!

//* Zugriff auf Elemente via html "tag" querySelectorAll("div")
const allDivs = document.querySelectorAll("div");
console.log(`Alle div's via querrySelectorAll("div"):\n\n`, `"->NodeList Array"(klicke zum öffnen):\n`, allDivs);

//* man kann aber durch den Array iterieren um auf die einzelnen Elemente dann .methoden anzuwenden

allDivs.forEach((element) => {
  console.log("forEach Element des NodeList Array oberhalb ein Log: Hello:)");
  //* element.style.fontSize ="2rem";
});

//? für die div tags eine schlechte Wahl, weil verschiedene Divs enthalten sind.
//? Eltern und Kind divs zusammen im Array (check log zeile 44 im Browser)
// for (let div of allDivs) {
//   div.style.border = "1px solid red";
// }
//* über den Index kann man auch auf einzelne Elemente in dem Array zugreifen
allDivs[2].style.backgroundColor = "red";
allDivs[11].style.border = "3px solid green";

//* Zugriff auf Elemente mit klassen via querySelectorAll(".blabla")
const fieldsGood = document.querySelectorAll(".field");

console.log(
  `Nur die div's mit der Klasse "field" via querySelectorAll(".class"):\n\n`,
  `kein problem hier weil NodeList Array.\n`,
  `dadurch sind higherOrderFunctions möglich!\n`,
  `"->NodeList Array"(klicke zum öffnen):\n`,

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
