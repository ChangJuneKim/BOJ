function solution(cacheSize, cities) {
    const cache = new Map();
    let time = 0;

    for (let city of cities) {
        city = city.toLowerCase(); // 대소문자 구분 없이 처리

        if (cache.has(city)) {
            // 캐시 히트: 실행 시간 1 증가
            time += 1;
            // LRU를 위해 항목을 재삽입하여 순서 갱신
            cache.delete(city);
            cache.set(city, true);
        } else {
            // 캐시 미스: 실행 시간 5 증가
            time += 5;
            // 캐시가 꽉 찼다면, 가장 오래된 항목 제거
            if (cache.size === cacheSize) {
                const oldestKey = cache.keys().next().value;
                cache.delete(oldestKey);
            }
            // 캐시 사이즈가 0이 아닐 때만 캐시에 추가
            if (cacheSize > 0) {
                cache.set(city, true);
            }
        }
    }

    return time;
}