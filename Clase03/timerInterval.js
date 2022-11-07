let i=0;
const contador = setInterval(() => {
    i++;
    console.log(i)
    if(i===10){
        clearInterval(contador)
    }
}, 1000);