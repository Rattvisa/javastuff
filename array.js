//en array tillsäts med []

index=Math.floor(Math.random()*3)

let fruits=["äpple", "päron", "banan", "vindruvor"];

console.log(fruits[index]);
fruits[2]="kiwi"
console.log(fruits[2]);
console.log(fruits);
fruits.push("banan")
console.log(fruits);

//shift() och pop() tar ut första respektiva sista medlemen arrayen
let eatfruit=(fruits.shift())
console.log(eatfruit);
//andra array metoderreverse() sort() slice() concat()