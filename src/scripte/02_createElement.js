//! .document.createElement() - Erstellen von Elementen

//* Erstellen von Elementen mit document.createElement("tag")
//* Erstellt ein neues Element mit dem angegebenen Tag-Namen
//* gibt das neue Element zurück
//* das neue Element ist noch nicht im DOM eingefügt
//* das neue Element muss noch in den DOM eingefügt werden
//* das neue Element kann noch mit .methoden bearbeitet werden
//* das neue Element muss noch mit .methoden in den DOM eingefügt werden

//? Beispiel: Erstellen eines neuen div's

const newDiv = document.createElement("div");
console.log(`Neues div Element erstellt:\n\n`, newDiv);

//* das neue Element kann noch mit .methoden bearbeitet werden

newDiv.style.backgroundColor = "lightblue";
newDiv.style.border = "1px solid blue";

//! ////////////////////////////////////////////////////////////////////////////////////

//! .appendChild() - Einfügen von Elementen

//* Einfügen von Elementen mit .appendChild("element")
//* fügt ein Element als letzten Kind eines Elements ein
//* gibt das eingefügte Element zurück
//* das eingefügte Element ist jetzt im DOM eingefügt

//? Beispiel: Einfügen des neuen div's in den body
const chapterTwo = document.getElementById("chapterTwo");

chapterTwo.appendChild(newDiv);

//! ////////////////////////////////////////////////////////////////////////////////////

//! .classList - Klassen hinzufügen und entfernen

//* Klassen hinzufügen und entfernen mit .classList.add("class") und .classList.remove("class")
//* gibt das Element zurück
//* die Klasse ist jetzt hinzugefügt oder entfernt

//? Beispiel: Hinzufügen und Entfernen von Klassen

newDiv.classList.add("colorField");
newDiv.classList.add("newClass");

console.log(`Neues div Element mit Klassen hinzugefügt:\n\n`, newDiv);

newDiv.classList.remove("newClass");

console.log(`Neues div Element mit Klassen entfernt:\n\n`, newDiv);

//! ////////////////////////////////////////////////////////////////////////////////////

//! .innerHTML - Inhalt hinzufügen

//* Inhalt hinzufügen mit .innerHTML = "string"
//* gibt das Element zurück
//* der Inhalt ist jetzt hinzugefügt
//* Der gesamte Inhalt des Elements wird ersetzt

//? Beispiel: Hinzufügen von Inhalt

//* chapterTwo.innerHTML = `<div class="colorField"></div>
//*       </div> <div class="colorField"></div>
//*       </div> <div class="colorField"></div>
//*       </div> <div class="colorField"></div>
//*       </div>`;

console.log(`Neuer Inhalt hinzugefügt:\n\n`, chapterTwo);

//! ////////////////////////////////////////////////////////////////////////////////////

//! .innerText - Text hinzufügen

//* Text hinzufügen mit .innerText = "string"
//* gibt das Element zurück
//* der Text ist jetzt hinzugefügt
//* Der gesamte Text des Elements wird ersetzt

//? Beispiel: Hinzufügen von Text

//* chapterTwo.innerText = `<div>Neuer Text hinzugefügt</div>`;

console.log(`Neuer Text hinzugefügt:\n\n`, chapterTwo);

//! ////////////////////////////////////////////////////////////////////////////////////

//!
