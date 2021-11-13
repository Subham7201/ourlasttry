// let array = {
//     name: "Subham", 
//     home: "aali vihar"
// }
// let array1 = {
//     name: "prabhakar", 
//     home: "uttam nagar"
// }

// let sk = [];
// sk.push(array);
// sk.push(array1);

// // sk = JSON.stringify(sk);

// sk.forEach(function(element, indes){
//     console.log(element.name);
// })


let notesObj = []

let campDetail = [];
campDetail.push("best");
campDetail.push('east');
campDetail.push('west');

notesObj.push(campDetail);

console.log(notesObj);

notesObj = JSON.stringify(notesObj);
console.log(notesObj)

notesObj = JSON.parse(notesObj)
console.log(notesObj)


notesObj.forEach((element, index) => {
    console.log(element[0])
    console.log(element[1])
    console.log(element[2])
});