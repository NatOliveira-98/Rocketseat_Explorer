/*
  Capture 10 itens para compor a lista
  de um supermercado;
  Após capturar os 10 itens, imprima-os,
  separando por vírgula;
*/

alert('Adicione itens para a lista de compras.');
const shoppingList = [];
for (let i = 0; i < 10; i++) {
  const item = prompt(`Item ${i + 1} da lista:`);
  shoppingList.push(item);
}

alert(`Lista de compras: ${shoppingList}.`);
