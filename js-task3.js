let number = 10;

function yuGiOhConverter (value) {
    numbersArray = [];
    for (let number = 1; number < (value + 1); number++) {
        numbersArray.push(number);
    }

    for (let index = 0; index < numbersArray.length; index++) {

        if((numbersArray[index] % 2 == 0) && (numbersArray[index] % 3 == 0) && (numbersArray[index] % 5 == 0))
        {
            numbersArray[index] = "yu-gi-oh";
        }
        else if((numbersArray[index] % 2 == 0) && (numbersArray[index] % 3 == 0)){
            numbersArray[index] = "yu-gi";
        }
        else if ((numbersArray[index] % 2 == 0) && (numbersArray[index] % 5 == 0)){
            numbersArray[index] = "yu-oh";
        }
        else if ((numbersArray[index] % 3 == 0) && (numbersArray[index] % 5 == 0)){
            numbersArray[index] = "oh-gi";
        }
        else if ((numbersArray[index] % 2 == 0)){
            numbersArray[index] = "yu";
        }
        else if ((numbersArray[index] % 3 == 0)){
            numbersArray[index] = "gi";
        }
        else if ((numbersArray[index] % 5 == 0)){
            numbersArray[index] = "oh";
        }
        else{
            console.log("hey")
        }
    }
    console.log(numbersArray);
    return numbersArray;
};

//a test of the function with the example
yuGiOhConverter(number);

//calling the function with argument 100
yuGiOhConverter(100);

//calling the function with a random argument of my choice
yuGiOhConverter(45);