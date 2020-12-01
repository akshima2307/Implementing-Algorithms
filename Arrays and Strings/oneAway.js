/* 
	There are three type of edits that can be performed on a string: insertion, removal or replacing a character. Given two string, 
	write a function to check if they are one edit(or zero edit) away.

		Example: 
		pale, ple -> true
		pales, pale -> true 
		pale, bale -> true
		pale, bake -> false

		Hints:- 
		Start with the easy thing. Can you check each of the condition separately?
		What is relationship between inserting a character and removing one ? Do these need to be two separate checks?
		Can You do all three checks in single pass?
*/


/*function oneAway(str1, str2){

}
*/

function oneAway(str1 , str2){
	if(str1.length == str2.length - 1){
		return checkOneMissing(str1,str2);
	}
	else if(str1.length - 1 == str2.length){
		return checkOneMissing(str2, str1);
	}
	else if(str1.length == str2.length){
		return oneEditReplace(str1, str2);
	}
	return false;
}


var oneEditReplace = function(first, second){
	var status = false;
	for(var i = 0; i < first.length; i++){
		if(first.charAt(i) != second.charAt(i)){
			if(status){
				return false;
			}
			status = true;
		}	
	}
	return true;
}



//check if you can insert a character into s1 to amke s2
var checkOneMissing = function(first, second){
	var fp = 0;
	var sp = 0;
		while(sp < second.length && fp < first.length){
			if(first.charAt(fp) != second.charAt(sp)){
				if(fp != sp){
					return false;
				}
				sp++;
			}

			else{
				fp++;
				sp++;
			}
		}
		return true;			
};

console.log(oneAway("pale", "ple"));
console.log(oneAway("ple", "pale"));
console.log(oneAway("pale", "bale"));
console.log(oneAway("pale", "bake"));

