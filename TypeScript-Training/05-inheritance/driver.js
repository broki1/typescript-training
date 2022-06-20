"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = require("./circle");
var rectangle_1 = require("./rectangle");
var myCircle = new circle_1.Circle(5, 10, 20);
console.log(myCircle.getInfo());
var myRectangle = new rectangle_1.Rectangle(0, 0, 3, 7);
console.log(myRectangle.getInfo());
