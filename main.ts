input.onButtonPressed(Button.A, function () {
    if (speed > 0) {
        speed += -1
        changeSpeed()
    }
})
function changeSpeed() {
    basic.showNumber(speed)
    pins.analogWritePin(AnalogPin.P0, speed * 100)
}
input.onButtonPressed(Button.B, function () {
    if (speed < 9) {
        speed += 1
        changeSpeed()
    }
})
let speed = 0
speed = 0
changeSpeed()
