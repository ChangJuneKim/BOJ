function solution(price) {
    function calcDiscountPrice(price){
        let discount = 0;
        if(price >= 500000) discount = 20;
        else if(price >= 300000) discount = 10;
        else if(price >= 100000) discount = 5;
        
        return parseInt(price * (100 - discount) / 100)
    }
    
    return calcDiscountPrice(price);
}