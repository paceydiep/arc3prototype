step = 0
was_at_180 = False

def try_again():
    basic.clear_screen()
    basic.show_string("Try Again")
    basic.clear_screen()

def correct_action(icon):
    basic.show_icon(icon)
    basic.pause(500)
    basic.clear_screen()

while step < 4:

    current_heading_is_180 = input.compass_heading() == 180

    # Step 1: Press A
    if input.button_is_pressed(Button.A):
        if step == 0:
            correct_action(IconNames.HEART)
            step = 1
        else:
            try_again()
            step = 0

        while input.button_is_pressed(Button.A):
            basic.pause(50)

    # Step 2: Press B
    elif input.button_is_pressed(Button.B):
        if step == 1:
            correct_action(IconNames.DIAMOND)
            step = 2
        else:
            try_again()
            step = 0

        while input.button_is_pressed(Button.B):
            basic.pause(50)

    # Rotate to 180 degrees
    # This now works as an input at ANY step
    elif current_heading_is_180 and was_at_180 == False:
        if step == 2:
            correct_action(IconNames.NO)
            step = 3
        else:
            try_again()
            step = 0

        was_at_180 = True

    # Step 4: Shake
    elif input.is_gesture(Gesture.SHAKE):
        if step == 3:
            correct_action(IconNames.CHESSBOARD)
            step = 4
        else:
            try_again()
            step = 0

        basic.pause(800)

    # Reset rotate detection after leaving 180 degrees
    if current_heading_is_180 == False:
        was_at_180 = False

basic.clear_screen()
basic.pause(1000)
basic.show_string("Well Done!")