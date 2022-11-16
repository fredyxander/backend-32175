const saludar = (nombre: string)=>{
    console.log(`Hola ${nombre}`);
}

saludar("pedro");

class Color{

    getRandom():number{
        return Math.ceil(Math.random()*256);
    }

    getRandomColor(){
        const red: number = this.getRandom();
        const green: number = this.getRandom();
        const blue: number = this.getRandom();
        return `rgb(${red}, ${green}, ${blue})`;
        // console.log(`rgb(${red}, ${green}, ${blue})`);
    }
}

const colorRandom = new Color();
const result = colorRandom.getRandomColor();
console.log("result", result);