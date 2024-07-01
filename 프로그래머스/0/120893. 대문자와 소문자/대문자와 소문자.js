function solution(my_string) {
    const convertedString = [...my_string].map(char => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } 
        else {
            return char.toUpperCase();
        }
    });
    
    return convertedString.join('');
}

