function solution(priorities, location) {
    const queue = priorities.map((priority, index) => ({ priority, location: index }));
    let count = 0;

    while (queue.length > 0) {
        const current = queue.shift();
        const maxPriority = Math.max(...queue.map(doc => doc.priority));

        if (current.priority < maxPriority) {
            queue.push(current);
        } else {
            count++;
            if (current.location === location) {
                return count;
            }
        }
    }

    return count;
}