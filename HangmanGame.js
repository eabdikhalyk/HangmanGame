var words = ["javascript","monkey","amazing","pancake", "plan", "vacation"];			
			var word = words[Math.floor(Math.random() * words.length)];
			
			var answerArray = [];
			for(var i = 0; i < word.length;i++){
				answerArray[i] = "_";
			}
			
			var remainingLetters = word.length;
			var limitGuess = word.length * 2;
			while(remainingLetters > 0 && limitGuess > 0){
			limitGuess--;
				alert(answerArray.join(" "));
				var guess = prompt("Guess a letter, or click Cancel to stop plaing. Attempt: "+limitGuess);
				if(guess === null){
					break;
				}else if (guess.length !==1){
					alert("Please enter a single letter.");
				}else {
					for(var j = 0; j < word.length; j++){
						if(word[j] === guess.toLowerCase()){
							if(answerArray[j] === "_"){
								answerArray[j] = guess;
							    remainingLetters--;
							
							}else {
								alert( "\"" +guess+"\"" + " letter was ");
								limitGuess++;
							}
							
						}
					}
				}
			}
			
			if (limitGuess!=0){
			alert(answerArray.join(" "));
			alert("Good jod! The answer was "+ word);
			}else {
			  alert(answerArray.join(" "));
			  alert("Game over! You've lost! The answer was "+ word);
			}