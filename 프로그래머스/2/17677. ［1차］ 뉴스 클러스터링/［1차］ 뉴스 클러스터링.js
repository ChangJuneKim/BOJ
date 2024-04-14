function solution(str1, str2) {
    
    
    const 다중집합1 = 다중집합만들기(str1);
    const 다중집합2 = 다중집합만들기(str2);
    
    const 교집합크기 = 교집합만들기(다중집합1, 다중집합2);
    const 합집합크기 = 합집합만들기(다중집합1, 다중집합2);

    const 자카드유사도 = 합집합크기 === 0 ? 1 : 교집합크기 / 합집합크기;
    return Math.floor(자카드유사도 * 65536);

    function 다중집합만들기(str) {
        const map = new Map();
        str = str.toLowerCase();
        for (let i = 0; i < str.length - 1; i++) {
            const s = str.substring(i, i + 2);
            if (s.match(/[a-z]{2}/)) {
                map.set(s, (map.get(s) || 0) + 1);
            }
        }
        return map;
    }

    function 교집합만들기(map1, map2) {
        let 교집합크기 = 0;
        for (const [key, value] of map1) {
            if (map2.has(key)) {
                교집합크기 += Math.min(value, map2.get(key));
            }
        }
        return 교집합크기;
    }

    function 합집합만들기(map1, map2) {
        const 합집합 = new Map(map1);
        for (const [key, value] of map2) {
            const 현재값 = 합집합.get(key) || 0;
            합집합.set(key, Math.max(value, 현재값));
        }
        let 합집합크기 = 0;
        for (const value of 합집합.values()) {
            합집합크기 += value;
        }
        return 합집합크기;
    }
}