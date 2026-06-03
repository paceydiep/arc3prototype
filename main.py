check4 = False
check3 = False
check2 = False
check1 = False
while check1 == False or check2 == False or check3 == False or check4 == False:
    if input.button_is_pressed(Button.A):
        basic.show_icon(IconNames.HEART)
        check1 = True
    elif input.button_is_pressed(Button.B):
        basic.show_icon(IconNames.TARGET)
        check2 = True
    elif input.compass_heading() == 180:
        basic.show_icon(IconNames.BUTTERFLY)
        check3 = True
    elif input.is_gesture(Gesture.SHAKE):
        basic.show_icon(IconNames.FABULOUS)
        check4 = True
basic.show_string("Well Done!")