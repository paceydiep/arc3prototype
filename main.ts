let check4 = false
let check3 = false
let check2 = false
let check1 = false
while (check1 == false || check2 == false || check3 == false || check4 == false) {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Heart)
        check1 = true
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Target)
        check2 = true
    } else if (input.compassHeading() == 180) {
        basic.showIcon(IconNames.Butterfly)
        check3 = true
    } else if (input.isGesture(Gesture.Shake)) {
        basic.showIcon(IconNames.Fabulous)
        check4 = true
    }
}
basic.clearScreen()
basic.pause(2000)
basic.showString("Well Done!")
