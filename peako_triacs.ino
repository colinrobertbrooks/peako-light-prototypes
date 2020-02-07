/*
  Arduino Uno
  60 hz
  4x digital output > triac > lamp
  triacs can access different parts of the power wave
  sync value is for timing chopping of power wave

  Digital Outputs:
    - 3 is the sync (terminal on triac board)
    - 4 end lamp (triac channel)
    - 5 middle lamp (triac channel)
    - 6 middle lamp (triac channel)
    - 7 end lamp (triac channel)
*/

/*
  RBDDimmer
    - min value
      * 10 one lamp
      * 65 four lamps

    - max value
      * 35 one lamp
      * 70 four lamps
*/
