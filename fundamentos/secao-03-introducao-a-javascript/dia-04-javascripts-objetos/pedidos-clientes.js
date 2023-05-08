let order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

function customerInfo(order) {
  // Adicione abaixo as informações necessárias.
  console.log('Olá, ' + order['order']['delivery']['deliveryPerson']+', entrega para: '+order['name']+', Telefone: '+order['phoneNumber']+', R. '+order['address']['street']+', Nº: '+order['address']['number']+', AP: '+order['address']['apartment']);
}

customerInfo(order);

function orderModifier(order) {
  // Adicione abaixo as informações necessárias.
  let newBuyer = order.name = 'Luiz Silva';
  let newTotal = order.payment.total = '50';
  let keysPizza = Object.keys(order.order['pizza']);
  let keysDrinks = order.order.drinks.coke.type;
  // console.log(keys);
  console.log(`Olá, ${newBuyer}, o valor total do seu pedido de ${keysPizza[0]}, ${keysPizza[1]} e ${keysDrinks} é R$ ${newTotal},00`);
  // console.log('Olá, ' + order['name']+', o valor total de seu pedido de '+keysPizza[0]+ ', '+keysPizza[1]+' e '+keysDrinks+' é '+'R$ '+newTotal+',00');
}

orderModifier(order);