const product = {
  description: "Teclado",
  price: 150,
};

const { description, price } = product;
console.log("Descrição: ", description);
console.log("Preço: R$", price);

let newProduct = ({description, price}) => {
  console.log("### NOVO PRODUTO ###");
  console.log("Descrição: ", description);
  console.log("Preço: R$", price);
};

newProduct({
    description: "Mouse",
    price: 70
})