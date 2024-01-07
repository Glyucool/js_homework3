// Змінна для збереження суми
let сума = 0;

// Цикл від 1 до 100
for (let число = 1; число <= 100; число++) {
    // Перевірка, чи число не кратне 3
    if (число % 3 !== 0) {
        // Додаємо число до суми
        сума += число;
    }
}

// Виводимо суму на екран
console.log('Сума чисел від 1 до 100, які не кратні 3: ' + сума);