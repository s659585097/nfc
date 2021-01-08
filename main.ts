NFC.nfcEvent(function () {
    makerbit.showStringOnLcd1602(NFC.getUID(), makerbit.position1602(LcdPosition1602.Pos3), 16)
})
NFC.NFC_setSerial(SerialPin.P13, SerialPin.P14)
basic.forever(function () {
	
})
