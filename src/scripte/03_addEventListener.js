//! Event Listener
//* sind Funktionen die aufgerufen werden wenn ein bestimmtes Event eintritt
//* werden mit .addEventListener("event", function) hinzugefügt
//* gibt das Element zurück
//* der EventListener wird nur einmal hinzugefügt
//* die Funktion wird nur ausgeführt wenn das Event eintritt

//? Beispiel: Event Listener mit "click" hinzufügen

const button = document.querySelector("#checkMe");

// button.addEventListener("click", (event) => changeBackground(event));

function changeBackground(event) {
  event.preventDefault();
  console.log(event);
  event.target.style.backgroundColor = "red";
  const background = document.querySelector("#chapterThree");
  background.style.backgroundColor = "green";
}

//! ////////////////////////////////////////////////////////////////////////////////////

//? Beispiel: Event Listener mit "submit" auf form Element hinzufügen

//* submit wird auf form Elementen verwendet
//* wird ausgeführt wenn das Formular abgeschickt wird
//* wird auf das Formular angewendet und nicht auf den Button
//* benötigt event.preventDefault() um das neu Laden der Seite zu verhindern
//* löst auch mit Enter aus wenn das Formular fokussiert ist

const form = document.querySelector("#form");
const Person = {};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstName = document.querySelector("#firstName");
  Person.firstName = firstName.value;
  firstName.value = "";
  const lastName = document.querySelector("#lastName");
  Person.lastName = lastName.value;
  lastName.value = "";
  const birthdate = document.querySelector("#birthdate");
  Person.birthdate = birthdate.value;
  birthdate.value = "";
  const agb = document.querySelector("#agb");
  Person.agb = agb.checked;
  console.log(Person);
});
