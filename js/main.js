const objects = ['phone', 'computer', 'car', 'book']
const animals = ['bat', 'lion', 'eagle', 'tiger']

document.querySelector('#generateBtn').addEventListener('click', generatePokimonName)

function generatePokimonName() {
  const obj = document.querySelector("#objectSelect").value
  const animal = document.querySelector("#animalSelect").value
  
  let combinedName = obj.slice(0,3) + animal.slice(0,3);
  combinedName = combinedName.charAt(0).toUpperCase() + combinedName.slice(1);
  
  document.querySelector("#pokemonName").innerText = combinedName;
}