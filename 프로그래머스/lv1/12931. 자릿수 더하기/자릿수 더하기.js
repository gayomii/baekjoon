function solution(n)
{
    const nums = n.toString().split('').map(num => Number(num))
    let answer = nums.reduce((num, cur) => cur+num)
    
    return answer
}