// function solution(arr)
// {
//     let beforeNumber
//     const answer = []
//     arr.forEach(num=>{
//         if(beforeNumber !== num){
//             answer.push(num)
//         }
//         beforeNumber = num
//     })

//     return answer
// }

function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}