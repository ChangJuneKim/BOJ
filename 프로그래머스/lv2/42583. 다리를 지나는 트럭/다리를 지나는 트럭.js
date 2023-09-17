function solution(bridge_length, weight, truck_weights) {
    const 지난_트럭 = [];
    const 건너는_트럭 = [];
    const 대기_트럭 = truck_weights.map(truck => ({weight: truck, remainTime: bridge_length}));
    let 다리위무게 = 0;
    let 경과시간 = 0;

    while(지난_트럭.length !== truck_weights.length){
        경과시간++;

        if(건너는_트럭.length > 0 && 건너는_트럭[0].remainTime <= 0) {
            const 건넌트럭 = 건너는_트럭.shift();
            지난_트럭.push(건넌트럭);
            다리위무게 -= 건넌트럭.weight;
        }
        
        if(대기_트럭.length > 0 && (다리위무게 + 대기_트럭[0].weight) <= weight){
            const 출발트럭 = 대기_트럭.shift();
            다리위무게 += 출발트럭.weight;
            건너는_트럭.push(출발트럭);
        }

        건너는_트럭.forEach(truck => truck.remainTime--);
    }
    
    return 경과시간;
}
