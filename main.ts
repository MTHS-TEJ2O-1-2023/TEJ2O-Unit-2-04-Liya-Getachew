/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Liya Getachew
 * Created on: Sep 2023
 * This program shows the temperature.
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

//  variable
let temperature: number

input.onButtonPressed(Button.A, function () {
  temperature = input.temperature()
  basic.showString('The temperature is ' + temperature + 'C.')
}) 
