/* 
Question: Given two string , write a method to decide if one is permutation of other. 
    Hints: Two strong that are permutations should have the same character but in diffrent order 
*/


//Using Hashable
function isPermutation(str1, str2){
	let _str1 = str1.split(" ").join("");
	let _str2 = str2.split(" ").join("");
	//console.log(_str1, _str2);
	//Check if the two strings are equal in length
	if(_str1.length != _str2.length){
		return false;
	}
	//Implement a hashtable 
	//Count each character in the str1 incerment it by 1 or assign the character value 1
	//Use str2 to decreament the count
	//Hashtable should contain value "0" for every string then return true otherwise return false
	let hashtable = [];
	for(var i = 0; i < _str1.length; i++) {
		if(hashtable[_str1[i]]){
			hashtable[_str1.charAt(i)]++;
		}
		else{
			hashtable[_str1.charAt(i)] = 1;
			
		}	        
   	}	
   	for(let i = 0; i < _str2.length; i++){
   		hashtable[_str1.charAt(i)]--;
   	}
	for(i in hashtable){
		if(hashtable[i] != 0){
			return false;
		}
	}
	return true;
}
//console.log(isPermutation("SharmaAkshima","Akshima Sharma"));


//Using Sorting

function Sort(str){
	let _str = str.split("");
	return _str.sort();
}

function isPermutationSort(str1, str2){
	if(str1.length != str2.length){
		return false;
	}
	let _str1 = Sort(str1);
	let _str2 = Sort(str2);

	//Check if str1 and str2 is unique
	for (let i = 0; i < str1.length; i++){
		if(_str1[i] === _str2[i]){
			return true;
		}
	}
	return false;

}

//console.log(isPermutationSort("aaadcba", "abcaada"));

