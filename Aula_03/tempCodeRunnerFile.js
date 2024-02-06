
 const listaDeCompras = new Map();

 listaDeCompras.set("Maca", "5");
 listaDeCompras.set("Banana", "3");
 listaDeCompras.set("Leite", "4");
 listaDeCompras.set("Pao", "10");
 
 //Verifique se um item específico está na lista de compras
 console.log("Item específico: " + listaDeCompras.has("Pao"));

 //Verifique a quantidade de um item específico da lista
 console.log("O Quantidade do item na lista é : " + listaDeCompras.get("Leite"))

 //Modifique a quantidade de um item específico da lista

 console.log(listaDeCompras.set("Banana", "150"))
 console.log("Quantidade atualizada: " + listaDeCompras.get("Banana"))


 // Remova um item específico da lista
 listaDeCompras.delete("Maca")
 console.log(listaDeCompras)