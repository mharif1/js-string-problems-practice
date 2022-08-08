const phones = [
    { name: 'Xaomi', camera: 50, storage: '64gb', price: 28000, color: 'silver' },
    { name: 'IPhone', camera: 50, storage: '64gb', price: 88000, color: 'silver' },
    { name: 'Oneplus', camera: 50, storage: '64gb', price: 48000, color: 'silver' },
    { name: 'realme', camera: 50, storage: '64gb', price: 18000, color: 'silver' },
    { name: 'realme', camera: 50, storage: '64gb', price: 45000, color: 'silver' },
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.lenght; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const myPhone = cheapestPhone(phones);
console.log(myPhone);