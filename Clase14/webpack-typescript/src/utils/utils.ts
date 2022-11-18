export const getTime = ()=>{
    return {
        date: new Date().toISOString(),
        timestamp: Date.now()
    }
}