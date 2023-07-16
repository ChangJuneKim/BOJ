function solution(arr)
{
    let beforeNumber
    const answer = []
    arr.forEach(num=>{
        if(beforeNumber !== num){
            answer.push(num)
        }
        beforeNumber = num
    })

    return answer
}