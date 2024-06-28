function solution(money) {
    const ICE_AMERICANO = 5500;
    
    function getAmericanoCountAndChange(){
        const count = parseInt(money / ICE_AMERICANO);
        const change = money % ICE_AMERICANO;
        
        return [count, change];
    }
    return getAmericanoCountAndChange();
}