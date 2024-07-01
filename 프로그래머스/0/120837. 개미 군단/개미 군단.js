function solution(hp) {
    const generalAnts = Math.floor(hp / 5);
    hp %= 5;

    const soldierAnts = Math.floor(hp / 3);
    hp %= 3;

    const workerAnts = hp;

    return generalAnts + soldierAnts + workerAnts;
}
