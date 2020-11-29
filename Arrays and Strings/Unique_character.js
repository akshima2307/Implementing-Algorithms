//Question:: Implement an algorithm to determine if a string has all unique character. What if you cannot use any addition data structure ?
// Hint : Try a hashtable

//Approch 1 :- Keep a track of character with Set data structure 
//Time: O(N)
//Additional space complexity: O(N)
function isUniqueChars(str){
    let char = new Set();
    for(let i = 0; i < str.length; i++){
        if(char.has(str[i])){
            return false;
        }
        char.add(str[i]);
        //console.log(char);
    }
    return true;
    
}
//console.log(isUniqueChars("asafghjkl"));

/* 
    Approch 2: Sort the string first then iterate through the string. 
    When the two adjacent characters are same the return false.
*/
//Time: O(nlogn)
//Space: O(1)

function isUniqueCharsSorting(str){
    var _str = str.split("");
    _str.sort();
    console.log(_str);
    for(let i = 0; i < _str.length-1; i++){
        if(_str[i] === _str[i+1]){
            return false;
        }
        return true;
    }
}
//console.log(isUniqueCharsSorting("asdfghjka"));


/* 
    *Approch 3: Using hashtable
    * Step 1-Create an empty hashtablw
    * Step 2-Iterate through the string and start inserting character one by one in the hashtable
    * Step 3-At the same time check if the character exist on the hash table
    * Step 4-If it does than string DOES NOT have unique charaters

    Time Complexity: O(n)
    In worst case we iterate through the string
 */


function isUniqueHash(str){
    let hashtable = {};
    
    for(let i = 0; i <str.length; i++){
        if(hashtable[str[i]] != null){
            hashtable[str[i]] = 1;
            //console.log(hashtable);
            return false;
        }
        else{
            hashtable[str[i]] = 0;      
        }
    }
    //console.log(hashtable);
    return true;
}
//console.log(isUniqueHash("akshima"));


/* 
    Approch 4: Comparing each character of string with other character of string.
    Time: O(n^2)
*/


