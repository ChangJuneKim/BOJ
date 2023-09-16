function solution(phone_book) {
    let hashMap = {};

    // 모든 전화번호의 접두어를 해시맵에 저장합니다.
    for(let phone of phone_book) {
        let prefix = "";
        for(let i = 0; i < phone.length - 1; i++) {  // 전체 번호는 제외하기 위해 -1 합니다.
            prefix += phone[i];
            hashMap[prefix] = (hashMap[prefix] || 0) + 1;
        }
    }

    // 전화번호가 해시맵에 있는 접두어와 일치하는지 확인합니다.
    for(let phone of phone_book) {
        if(hashMap[phone]) {
            return false;
        }
    }

    return true;
}
