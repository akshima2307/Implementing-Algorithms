//Question: Write a methode to replace all the spaces in the string with "%20" 

/* 
    Input: "Mr John Smith     ", 13
    Output: "Mr%20John%20Smith"
 */

//Hint-1 It is easy to modify string by going from the end of the string to the beginning.
//Hint-2 You might find you need to count the number of spaces.Can you just count them?

function replaceSpaces(str , num){
    return str.trim().replace(/\s/g , '%20');
}


function replaceSpacesArr(str, num){
    str = str.trim('');
    var _str = str.split("");
    console.log(_str);
    var spaces = 0;
    for (var i = num - 1; i > 0; i-- ){
        if(_str[i] === " "){
            spaces++;
        }
    }

    let index = num + (2 * spaces);
    //console.log(index);
    //console.log(typeof num);

    for(i = num - 1; i >= 8; i--){
        if(_str[i] === " "){
            _str[index - 1] = "0";
            _str[index - 2] = "2";
            _str[index - 3] = "%";
            index = index - 3;
        } else{
            _str[index - 1] = _str[i];
            index--;
            console.log(index);
        }
    }
    return _str.join("");
}
//console.log(replaceSpacesArr("Mr John Smith  ", 13));
//console.log(replaceSpaces("Mr John Smith  ", "13"));