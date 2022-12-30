basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
        music.playTone(262, music.beat(BeatFraction.Double))
        pins.servoWritePin(AnalogPin.P2, 180)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(1000)
    }
})
