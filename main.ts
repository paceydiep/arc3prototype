let current_heading_is_180: any;
let step = 0
let was_at_180 = false
function try_again() {
    basic.clearScreen()
    basic.showString("Try Again")
    basic.clearScreen()
}

function correct_action(icon: number) {
    basic.showIcon(icon)
    basic.pause(500)
    basic.clearScreen()
}

while (step < 4) {
    current_heading_is_180 = input.compassHeading() == 180
    //  Step 1: Press A
    if (input.buttonIsPressed(Button.A)) {
        if (step == 0) {
            correct_action(IconNames.Heart)
            step = 1
        } else {
            try_again()
            step = 0
        }
        
        while (input.buttonIsPressed(Button.A)) {
            basic.pause(50)
        }
    } else if (input.buttonIsPressed(Button.B)) {
        //  Step 2: Press B
        if (step == 1) {
            correct_action(IconNames.Diamond)
            step = 2
        } else {
            try_again()
            step = 0
        }
        
        while (input.buttonIsPressed(Button.B)) {
            basic.pause(50)
        }
    } else if (current_heading_is_180 && was_at_180 == false) {
        //  Rotate to 180 degrees
        //  This now works as an input at ANY step
        if (step == 2) {
            correct_action(IconNames.No)
            step = 3
        } else {
            try_again()
            step = 0
        }
        
        was_at_180 = true
    } else if (input.isGesture(Gesture.Shake)) {
        //  Step 4: Shake
        if (step == 3) {
            correct_action(IconNames.Chessboard)
            step = 4
        } else {
            try_again()
            step = 0
        }
        
        basic.pause(800)
    }
    
    //  Reset rotate detection after leaving 180 degrees
    if (current_heading_is_180 == false) {
        was_at_180 = false
    }
    
}
basic.clearScreen()
basic.pause(1000)
basic.showString("Well Done!")
