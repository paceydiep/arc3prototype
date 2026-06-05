let check4 = false
let check3 = false
let check2 = false
let check1 = false
basic.showString("Try to input the correct sequence")
let step = 1
while (check1 == false || check2 == false || check3 == false || check4 == false) {
    if (!(input.runningTime() == 45000)) {
        if (input.buttonIsPressed(Button.A) && step == 1) {
            basic.showIcon(IconNames.Heart)
            check1 = true
            step = 2
        } else if (input.buttonIsPressed(Button.B) && step == 2) {
            basic.showIcon(IconNames.Target)
            check2 = true
            step = 3
        } else if (input.compassHeading() == 180 && step == 3) {
            basic.showIcon(IconNames.Butterfly)
            check3 = true
            step = 4
        } else if (input.isGesture(Gesture.Shake) && step == 4) {
            basic.showIcon(IconNames.Fabulous)
            check4 = true
        }
    } else {
        basic.clearScreen()
        basic.pause(2000)
        basic.showString("Time's Up!")
    }
}
basic.clearScreen()
basic.pause(2000)
basic.showString("Well Done!")
