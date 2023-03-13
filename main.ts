let soil_humidity = 0
let water_level = 0
OLED.init(128, 64)
pins.servoWritePin(AnalogPin.P10, 0)
basic.forever(function () {
    water_level = Environment.ReadWaterLevel(AnalogPin.P1)
    soil_humidity = Environment.ReadSoilHumidity(AnalogPin.P2)
    if (water_level < 10) {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    }
    if (soil_humidity < 50) {
        pins.servoWritePin(AnalogPin.P10, 90)
    } else {
        pins.servoWritePin(AnalogPin.P10, 0)
    }
    if (tinkercademy.MoistureSensor(AnalogPin.P1) < 50) {
        OLED.writeStringNewLine("Moisture Level is: ")
        OLED.writeNumNewLine(tinkercademy.MoistureSensor(AnalogPin.P1))
        OLED.writeStringNewLine("Water your Plant!!")
    }
})
