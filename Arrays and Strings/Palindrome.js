/* 
	Question :-
	Given a String, write a function to check if it is a permutation of a palindrome. A palindrome is a word or a phrase that 
	is the same forwords and backwords. A permutation is a reaarangement of letters. The palindrome does not need to be limited 
	to the dictionary words.

		Example :-
			Input - Tact Coa
			Output - True (permutation: "taco cat", "atco cta" etc)

		Hint :- 
			* You do not have to or should not genrate all permutation as it is really very inefficient.
			* Can hash table be Usefull?
			* Use hashtable you should be able to get it down to O(N).
			* Can you reduce the space usage by using a space vector.
*/





//Map each character to a number a -> 0, b -> 1, c -> 2 etc. . No-letter charcter maps to -1.


function palindrome(str){
	//Count how many time each character appear.
	var counts = {};
	var ch, count;
	for(var i = 0; i < str.length; i++){
		if(str[i] != " "){
			ch = str.charAt(i);
			count = counts[ch];
			counts[ch] = count ? count + 1 : 1;
		}
		
	}
	//Check that no more than one character has a odd Count.
	let oddCount = 0;
	for(ch in counts){
		if(counts[ch] % 2 != 0){
			oddCount++;
		} 
	}
	return oddCount > 1 ? false : true;
}

function palindrome2(str){
	let lowStr = str.toLowerCase();
	let reverseStr = lowStr.split("").reverse().join("");
	return lowStr === reverseStr;
}

function 



console.log(palindrome2("Aks"));