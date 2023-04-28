            //task2

// function volumeOfBox(a) {
//     return a.width*a.height*a.length;
// }

// console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));  


            //task3
// function fiftyThirtyTwenty(a) {
//     let b= {
//         Needs:a*50/100,
//         Wants:a*30/100,
//         Savings:a*20/100,
//     }
//     return b
// }
// console.log(fiftyThirtyTwenty(10000)); 


//        task4
// function relationToLuke(a) {
//     let b={
//         "Darth Vader":"father",
//         "Leia":"sister.",
//         "Han":"brother",
//     }
//     return `Luke, I am your${b[a]}`
// }
// console.log(relationToLuke("Darth Vader"));

//      task 5
// function isInRange(n,obj) {
//   return n>=obj.min&&n<=obj.max;
// }


// console.log(isInRange(4, { min: 0, max: 5 }));

           //task6
// function totalAmountAdjectives(obj) {
//     return Object.keys(obj).length;
// }

// console.log( totalAmountAdjectives({ a: "moron" }));
//          task7
// function hasKey(obj,d) {
//     let a=Object.values(obj)
//     return a.includes(d)
    
// }

// console.log(hasKey({ a: 44, b: 55, c: 46 }, "d"));

//       Tesk8
// function isEmpty(obj) {
//     return Object.keys(obj).length==0
// }

// console.log(isEmpty({}) );

//          task9notnot
// function maximumScore(a) {
//    let sum=0;
//    for (let i = 0; i < a.length; i++) {
//     sum=sum+Object.values(a[i].score)
    
//    }
//    return sum
// }

// console.log(maximumScore([ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]));


function calculateDifference(obj,num) {
   return Object.values(obj)-num
}

console.log(calculateDifference({ "baseball bat": 20 }, 5) );
console.log();