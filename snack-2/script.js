const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'


const nomi = []; //array vuoto per contenere i nomi

for (let i = 0; i < people.length; i++) {
  nomi.push(`'${people[i].name}'`);
}

console.log(nomi.join(', '));