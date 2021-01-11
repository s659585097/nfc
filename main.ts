NFC.nfcEvent(function () {
    makerbit.showStringOnLcd1602(NFC.getUID(), makerbit.position1602(LcdPosition1602.Pos3), 16)
    if (NFC.getUID() == "85BCDF30") {
        basic.showIcon(IconNames.Yes)
    } else if (NFC.getUID() == "3523BC30") {
        basic.showIcon(IconNames.Yes)
    } else if (NFC.getUID() == "C5B3BD30") {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
NFC.NFC_setSerial(SerialPin.P13, SerialPin.P14)
basic.forever(function () {
	
})
