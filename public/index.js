import * as mech from "/wasmtest";

mech.compile(`# Program

  block
    x = 1:100
    #ball = [|x y vx vy|
              x x x  x]`);