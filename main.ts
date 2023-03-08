input.onButtonPressed(Button.A, function () {
	
})
pins.onPulsed(DigitalPin.P0, PulseValue.Low, function () {
    _collision_flag = 1
})
pins.onPulsed(DigitalPin.P2, PulseValue.Low, function () {
    _collision_flag = 1
})
pins.onPulsed(DigitalPin.P1, PulseValue.Low, function () {
    _collision_flag = 1
})
input.onButtonPressed(Button.B, function () {
    serial.writeValue("pin 0", pins.digitalReadPin(DigitalPin.P0))
    serial.writeValue("pin 1", pins.digitalReadPin(DigitalPin.P1))
    serial.writeValue("pin 2", pins.digitalReadPin(DigitalPin.P2))
    serial.writeValue("pin 4", pins.digitalReadPin(DigitalPin.P4))
    serial.writeValue("pin 6", pins.digitalReadPin(DigitalPin.P6))
    serial.writeValue("pin 7", pins.digitalReadPin(DigitalPin.P7))
    serial.writeValue("pin 8", pins.digitalReadPin(DigitalPin.P8))
    serial.writeValue("pin 9", pins.digitalReadPin(DigitalPin.P9))
    serial.writeValue("pin 12", pins.digitalReadPin(DigitalPin.P12))
    serial.writeValue("pin 13", pins.digitalReadPin(DigitalPin.P13))
    serial.writeValue("pin 15", pins.digitalReadPin(DigitalPin.P15))
    serial.writeValue("pin 16", pins.digitalReadPin(DigitalPin.P16))
    serial.writeValue("Collision Fag", _collision_flag)
})
pins.onPulsed(DigitalPin.P12, PulseValue.Low, function () {
    _collision_flag = 1
})
let _collision_flag = 0
_collision_flag = 0
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.setPull(DigitalPin.P4, PinPullMode.PullUp)
pins.setPull(DigitalPin.P6, PinPullMode.PullUp)
pins.setPull(DigitalPin.P7, PinPullMode.PullUp)
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
pins.setPull(DigitalPin.P9, PinPullMode.PullUp)
pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (_collision_flag) {
        basic.showIcon(IconNames.No)
    }
})