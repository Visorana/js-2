const goods = {
    1: {
        id: 1,
        name: 'Футболка',
        description: 'Женская футболка из 100% хлопка',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        price: 2000,
        available: true,
    },
    2: {
        id: 2,
        name: 'Шорты',
        description: 'Плавательные шорты из 92% полиэстера',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        price: 2500,
        available: true,
    },
    3: {
        id: 3,
        name: 'Худи',
        description: 'Универсальная худи из мягкого и приятного на ощупь хлопкового материала',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        price: 3500,
        available: true,
    },
    4: {
        id: 4,
        name: 'Брюки',
        description: 'Брюки в классическом спортивном стиле из натуральных материалов',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        price: 3000,
        available: true,
    },
    5: {
        id: 5,
        name: 'Кроссовки',
        description: 'Спортивные женские кроссовки из износостойкого материала',
        sizes: [36, 37, 38, 39, 40],
        price: 5000,
        available: true,
    },
}

const goodsIndex = [goods[1], goods[2], goods[3], goods[4], goods[5]]

cart = [
    {
        good: goods[1],
        amount: 2,
    },
    {
        good: goods[5],
        amount: 3,
    },
]

function add(id) {
    newGood = {good: goods[id], amount: 1}
    if (cart.some(item => item.empty === true)){
        cart.pop()
        cart.push(newGood)
    } else if (cart.some(item => item.good.id === id)){
        let good = cart.find(item => item.good.id === id);
        good.amount += 1
    } else {
        cart.push(newGood)
    }
    return cart
}

function remove(id) {
    if (cart.some(item => item.good.id === id)) {
        let good = cart.find(item => item.good.id === id);
        good.amount -= 1
    }
    return cart
}

function clear() {
    cart = []
    return cart
}

function total() {
    return 'totalAmount ' + cart.reduce((sum, good) => sum + good.amount, 0) + '\n' +
    'totalSumm ' + cart.reduce((sum, {good, amount}) => sum + good.price * amount, 0)
}

console.log(clear())
console.log(add(2))
console.log(add(2))
console.log(add(5))
console.log(add(5))
console.log(remove(5))
console.log(total())