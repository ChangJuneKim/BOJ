function solution(clothes) {
    const allClothes = clothes.reduce((allClothesObj, cloth) => {
        allClothesObj[cloth[1]] ? allClothesObj[cloth[1]].push(cloth[0]) : allClothesObj[cloth[1]] = [cloth[0]];
        return allClothesObj;
    }, {})

    let combinations = 1;
    for(let key in allClothes) {
        combinations *= (allClothes[key].length + 1);
    }

    return combinations - 1; // 아무것도 선택하지 않는 경우를 제외
}