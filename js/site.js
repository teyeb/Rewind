
//obtain the string from the input
//controller
const getString = ()=>{
    document.getElementById("alert").classList.add("invisible");
    const string = document.getElementById("inputReverse").value;
    return splitString(string)
}


// split into an array
//model 1
const splitString = string=>{
    const array = string.split("");
    return reverseString(array);
}

//concat a new string in reverse
//model2
const reverseString = array=>{
    let reversedString = "";

    //read array in reverse and concat into string
    for(let i = array.length-1; i>=0; i--){
        reversedString += array[i];
    }

    return displayMessage(reversedString);
}

//display message with reversed string
//view
const displayMessage = reversedString =>{
    //grab id of display message paragraph element
    const paragraph = document.getElementById("msg");

    //make it visible

    document.getElementById("alert").classList.remove("invisible");
    return paragraph.innerHTML = `Your reversed string is ${reversedString}`;
}