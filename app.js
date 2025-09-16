// app.js

// Array of motivational phrases or jokes
const phrases = [
  "¡El éxito es la suma de pequeños esfuerzos repetidos día tras día!",
  "Un chiste: ¿Qué le dice un semáforo a otro? ¡No me mires, me estoy cambiando!",
  "El futuro pertenece a quienes creen en la belleza de sus sueños.",
  "La única manera de hacer un gran trabajo es amar lo que haces.",
  "Otro chiste: ¿Qué hace una abeja en el gimnasio? ¡Zumba!",
  "No cuentes los días, haz que los días cuenten.",
  "Un chiste más: ¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
];

// Get the HTML elements
const button = document.getElementById('generate-btn');
const phraseContainer = document.getElementById('phrase-container');

// Function to get a random phrase
function getRandomPhrase() {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
}

// Add a click event listener to the button
button.addEventListener('click', () => {
  const randomPhrase = getRandomPhrase();
  phraseContainer.textContent = randomPhrase;
});

// const newPhraseInput = document.getElementById('new-phrase-input');
// const addPhraseBtn = document.getElementById('add-phrase-btn');

// addPhraseBtn.addEventListener('click', () => {
//   const newPhrase = newPhraseInput.value.trim();
//   if (newPhrase) {
//     phrases.push(newPhrase);
//     newPhraseInput.value = ''; // Limpiar el campo de texto
//     alert('¡Frase agregada con éxito!');
//   }
// });