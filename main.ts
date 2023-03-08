function moveReverse () {
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 1)
    pins.analogWritePin(AnalogPin.P4, _moveSpeed)
    pins.analogWritePin(AnalogPin.P13, _moveSpeed)
    _inMotion = 1
}
function moveRight () {
    _inMotion = 1
}
function moveForward () {
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.analogWritePin(AnalogPin.P4, _moveSpeed)
    pins.analogWritePin(AnalogPin.P13, _moveSpeed)
    _inMotion = 1
}
function moveM2 (rotateDir: string) {
    if (rotateDir == "CW") {
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else if (rotateDir == "CCW") {
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
    if (_moveSpeed <= speedMin) {
        _moveSpeed = speedMin
    } else if (_moveSpeed >= speedMax) {
        _moveSpeed = speedMax
    }
    pins.analogWritePin(AnalogPin.P12, _moveSpeed)
    _inMotion = 1
}
input.onButtonPressed(Button.A, function () {
    serial.writeValue("Move Speed", _moveSpeed)
    _moveSpeed += 1
    moveM1("CW")
})
function moveM1 (rotateDir: string) {
    if (rotateDir == "CW") {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P9, 0)
    } else if (rotateDir == "CCW") {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P9, 0)
    }
    if (_moveSpeed <= speedMin) {
        _moveSpeed = speedMin
    } else if (_moveSpeed >= speedMax) {
        _moveSpeed = speedMax
    }
    pins.analogWritePin(AnalogPin.P4, _moveSpeed)
    _inMotion = 1
}
pins.onPulsed(DigitalPin.P0, PulseValue.Low, function () {
    _fallFlag = 1
})
pins.onPulsed(DigitalPin.P2, PulseValue.Low, function () {
    _fallFlag = 1
})
function moveStop () {
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P9, 1)
    pins.analogWritePin(AnalogPin.P4, 0)
    pins.analogWritePin(AnalogPin.P13, 0)
    _inMotion = 0
}
input.onButtonPressed(Button.AB, function () {
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
    serial.writeValue("Collision Fag", _collisionFlag)
    serial.writeValue("Fall Fag", _fallFlag)
})
pins.onPulsed(DigitalPin.P1, PulseValue.Low, function () {
    _collisionFlag = 1
})
input.onButtonPressed(Button.B, function () {
    serial.writeValue("Move Speed", _moveSpeed)
    _moveSpeed += -1
    moveM1("CW")
})
pins.onPulsed(DigitalPin.P12, PulseValue.Low, function () {
    _collisionFlag = 1
})
function moveLeft () {
    _inMotion = 1
}
let _inMotion = 0
let _moveSpeed = 0
let speedMax = 0
let speedMin = 0
let _fallFlag = 0
let _collisionFlag = 0
_collisionFlag = 0
_fallFlag = 0
speedMin = 20
speedMax = 150
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
    if (_collisionFlag) {
        basic.showIcon(IconNames.No)
    }
})
