let tg = window.Telegram.WebApp;
let btn = document.querySelector("#click");

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#2cab37"

let item = ""

let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")
let btn4 = document.querySelector("#btn4")
let btn5 = document.querySelector("#btn5")
let btn6 = document.querySelector("#btn6")

btn1.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали Москва-Нижний Новгород!")
        item = "Москва-Нижний Новгород"
        tg.MainButton.show()
    }
}

btn2.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали Самара-Казань!")
        item = "Самара-Казань"
        tg.MainButton.show()
    }
}

btn3.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали Ижевск-Брянск!")
        item = "Ижевск-Брянск"
        tg.MainButton.show()
    }
}

btn4.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали Владивосток-Сочи!")
        item = "Владивосток-Сочи"
        tg.MainButton.show()
    }
}

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(item);
})

tg.expand();