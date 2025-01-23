let date = new Date("2025-01-09T12:00:30");
console.log(
  date.toLocaleString("pt-br", {
    dateStyle: "short",
  })
);
console.log(
  date.toLocaleString("pt-br", {
    dateStyle: "long",
  })
);
console.log(
  date.toLocaleString("pt-br", {
    dateStyle: "medium",
  })
);
console.log(
  date.toLocaleString("pt-br", {
    dateStyle: "full",
  })
);
console.log(
  //formatando para 2 digitos
  date.toLocaleString("pt-br", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })
);
let amount = 10.5;
console.log(
  amount.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })
);
