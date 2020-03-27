let name = "Osayi-Ekekhor Abraham";
let arr = ["csharp","Go","html-css-js","kotlin","nodejs"];
let count =0;

console.log("My name is " + name);
console.log("My courses are: ");
arr.forEach(element => {
    console.log(element);
    count++;
});
if(count % 2 === 0){
    for (let i = 0; i <= 200; i++) {
        if (i % 2 === 0){
            console.log(i)
        }
    }
}
else if(count % 2 !== 0){
    for (let i = 0; i <= 200; i++) {
        if (i % 2 !== 0){
            console.log(i)
        }
    }
}