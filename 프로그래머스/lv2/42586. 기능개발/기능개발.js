function solution(progresses, speeds) {
    let answer = [];
    
    // 각 기능이 완료되는 데 필요한 날짜를 계산
    const completeDays = progresses.map((progress, index) => {
        return Math.ceil((100 - progress) / speeds[index]);
    });
    
    let maxDay = completeDays[0];
    let count = 1;
    
    for (let i = 1; i < completeDays.length; i++) {
        // 현재 기능이 이전 기능보다 더 빨리 또는 동시에 배포될 수 있는 경우
        if (completeDays[i] <= maxDay) {
            count++;
        } else {
            // 이전까지의 기능들을 배포하고 새로운 배포 날짜와 카운트를 설정
            answer.push(count);
            count = 1;
            maxDay = completeDays[i];
        }
    }
    // 마지막 배포
    answer.push(count);
    
    return answer;
}
