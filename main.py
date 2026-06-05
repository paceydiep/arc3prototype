check4 = False
check3 = False
check2 = False
check1 = False
basic.show_string("Try to input the correct sequence")
while check1 == False or check2 == False or check3 == False or check4 == False:
    if not (input.running_time() == 45000):
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
    else:
        basic.clear_screen()
        basic.pause(2000)
        music.play(music.string_playable("C5 A B G A F G E ", 120),
            music.PlaybackMode.IN_BACKGROUND)
        basic.show_string("Time's Up!")
basic.clear_screen()
basic.pause(2000)
music.play(music.string_playable("G B A G C5 B A B ", 120),
    music.PlaybackMode.IN_BACKGROUND)
basic.show_string("Well Done!")