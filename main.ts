let motor = stepperMotor.createMotor(
DigitalPin.P13,
DigitalPin.P14,
DigitalPin.P15,
DigitalPin.P16
)
motor.setDelay(0)
basic.forever(function () {
    basic.showArrow(ArrowNames.East)
    motor.moveClockwise(2000, stepUnit.Steps)
    basic.showArrow(ArrowNames.West)
    motor.moveClockwise(2000, stepUnit.Steps)
})
