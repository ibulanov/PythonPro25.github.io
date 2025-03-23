let tg = window.Telegram.WebApp;


tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#2cab37"

let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')

let name = ""
let phone = ""
let e-mail = ""

let items = {
    MC: 0,
    PK: 0,
    KK: 0,
    PB: 0
}

btn1.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали Москва-Санкт-Петербург")
        item = "МС"
        items['MC'] += 1
        tg.MainButton.show()
        update_orders()
    }
}

btn2.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали Ростов-Краснодар")
        item = "РК"
        items['РК'] += 1
        update_orders()
    }
}

btn3.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали Кисловодск-Краснодар")
        item = "КК"
        items['КК'] += 1
        update_orders()
    }
}

btn4.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали Ростов-Волгодонск")
        item = "РВ"
        items['PB'] += 1
        update_orders()
    }
}

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(item);
})

function update_orders() {
    usercard.innerHTML = "Ваши заказы: "
    for (let item in items) {
        if (items[item] != 0) {
            let li = document.createElement("li")
            li.innerHTML = item + ": " + items[item]
            usercard.appendChild(li)
        }
    }
}

tg.expand()