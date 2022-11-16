class Color{

    getRandom(){
        return parseInt(Math.random()*256);
    }

    getRandomColor(){
        const red = this.getRandom();
        const green = this.getRandom();
        const blue = this.getRandom();
        console.log(`rgb(${red}, ${green}, ${blue})`);
    }
}

const colorRandom = new Color();
colorRandom.getRandomColor();