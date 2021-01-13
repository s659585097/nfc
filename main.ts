NFC.nfcEvent(function () {
    makerbit.showStringOnLcd1602(NFC.getUID(), makerbit.position1602(LcdPosition1602.Pos3), 16)
    if (NFC.getUID() == "85BCDF30") {
        robotbit.StepperDegree(robotbit.Steppers.M2, 30)
        basic.showIcon(IconNames.Yes)
        music.playMelody("C C G G A A G - ", 120)
        robotbit.StepperDegree(robotbit.Steppers.M2, -30)
    } else if (NFC.getUID() == "3523BC30") {
        robotbit.StepperDegree(robotbit.Steppers.M2, 30)
        basic.showIcon(IconNames.Yes)
        music.playMelody("C C G G A A G - ", 120)
        robotbit.StepperDegree(robotbit.Steppers.M2, -30)
    } else if (NFC.getUID() == "C5B3BD30") {
        robotbit.StepperDegree(robotbit.Steppers.M2, 30)
        basic.showIcon(IconNames.Yes)
        music.playMelody("C C G G A A G - ", 120)
        robotbit.StepperDegree(robotbit.Steppers.M2, -30)
    } else {
        basic.showIcon(IconNames.No)
        music.playMelody("D - D - D - D - ", 120)
    }
    basic.pause(100)
    basic.clearScreen()
})
dfplayermini.connect(SerialPin.P0, SerialPin.P1)
dfplayermini.playLoopAllFiles()
NFC.NFC_setSerial(SerialPin.P13, SerialPin.P14)
basic.forever(function () {
	
})
