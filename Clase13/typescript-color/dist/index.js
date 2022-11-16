"use strict";
const saludar = (nombre) => {
    console.log(`Hola ${nombre}`);
};
saludar("pedro");
class Color {
    getRandom() {
        return Math.ceil(Math.random() * 256);
    }
    getRandomColor() {
        const red = this.getRandom();
        const green = this.getRandom();
        const blue = this.getRandom();
        return `rgb(${red}, ${green}, ${blue})`;
        // console.log(`rgb(${red}, ${green}, ${blue})`);
    }
}
const colorRandom = new Color();
const result = colorRandom.getRandomColor();
console.log("result", result);
