soil_humidity = 0
water_level = 0
pins.servo_write_pin(AnalogPin.P10, 0)

def on_forever():
    global water_level, soil_humidity
    water_level = Environment.read_water_level(AnalogPin.P1)
    soil_humidity = Environment.read_soil_humidity(AnalogPin.P2)
    if water_level < 10:
        music.start_melody(music.built_in_melody(Melodies.BA_DING), MelodyOptions.ONCE)
    if soil_humidity < 50:
        pins.servo_write_pin(AnalogPin.P10, 90)
    else:
        pins.servo_write_pin(AnalogPin.P10, 0)
basic.forever(on_forever)
