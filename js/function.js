

// input value check is it is a number or anything

function inputFieldCheck() {
    const inputTags = document.getElementsByClassName('input');
    let x = 0;

    for (const inputTag of inputTags) {
        if (isNaN(parseInt(inputTag.value))) {
            break;
        }
        else {
            x++;
        }
    }

    if (x == 4) {
        document.getElementById('calculate-button').removeAttribute('disabled');
    }
    else {
        document.getElementById('calculate-button').setAttribute('disabled', true);
    }
}

//   input value text to number maker by trasferring id

function moneyMaker(id) {
    let income = document.getElementById(id + '-money');
    const incomeMoney = parseFloat(income.value);
    return incomeMoney;
}

// total expenses and balance update

function totalExpenseAndBalanceUpdata() {

    const incomeMoney = moneyMaker('income');
    const foodMoney = moneyMaker('food');
    const rentMoney = moneyMaker('rent');
    const clothsMoney = moneyMaker('cloths');

    if (incomeMoney >= 0 && foodMoney >= 0 && rentMoney >= 0 && clothsMoney >= 0) {
        const totalExpenseMoney = foodMoney + rentMoney + clothsMoney;
        const balance = incomeMoney - totalExpenseMoney;

        if (totalExpenseMoney > incomeMoney) {
            alert('Your Expenses is higher than your income which is not possible');
        }
        else {
            document.getElementById('totol-expense').innerText = totalExpenseMoney;
            document.getElementById('balance-money').innerText = balance;
        }
    }
    else {
        alert('Negative value of money is not acceptable');
        document.getElementById('totol-expense').innerText = 0;
        document.getElementById('balance-money').innerText = 0;
    }
}


document.getElementById('income-money').addEventListener('keyup', function () {
    inputFieldCheck()
})
document.getElementById('food-money').addEventListener('keyup', function () {
    inputFieldCheck()
})
document.getElementById('rent-money').addEventListener('keyup', function () {
    inputFieldCheck()
})
document.getElementById('cloths-money').addEventListener('keyup', function () {
    inputFieldCheck()
})


document.getElementById('calculate-button').addEventListener('click', function () {
    totalExpenseAndBalanceUpdata();
})

document.getElementById('savings-persantage-money').addEventListener('keyup', function () {
    const savingPersantage = moneyMaker('savings-persantage');
    const income = moneyMaker('income');
    const balance = parseFloat(document.getElementById('balance-money').innerText)
    const savings = income * (savingPersantage / 100);


    if (savings > balance || isNaN(savingPersantage) || savingPersantage <= 0 || savingPersantage > 100) {
        alert('If you input any character or savings is more than you have in your balance or number which is 100>number>=0 ..... Please Change It!!!!');
        document.getElementById('savings-button').setAttribute('disabled', true);
    }
    else {
        document.getElementById('savings-button').removeAttribute('disabled');
    }

})

document.getElementById('savings-button').addEventListener('click', function () {
    const savingPersantage = moneyMaker('savings-persantage');
    const income = moneyMaker('income');
    const balance = parseFloat(document.getElementById('balance-money').innerText)
    const savings = income * (savingPersantage / 100);
    const remainingMoney = balance - savings;
    document.getElementById('saving-money').innerText = savings;
    document.getElementById('remaining-money').innerText = remainingMoney;
})