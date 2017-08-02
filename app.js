$(function() { 
	//sets global variables
	var chuck = false
	var turnCount = 0;
	$("#NewGame").hide()


	$("td").click(function(e){  //event listener for when user clicks on a TD
		if( $(this).text() != "" ){  //Don't let the same TD get clicked again. 
			return; //stops the rest of code from running
		}

		turnCount++ //counts turns of users

		if(turnCount % 2 == 0 && !chuck){ //any turn divisible by 2, make 'x' appear 
			$(this).text("x"); 
			$(this).css("background-color", "#EB4F62");
			$(this).addClass('clicked')

			$('table').toggleClass("x o") //toggle table class for x o hover effect
			

		}

		else{ //any other turn, 'o' appears
			$(this).text("o");
			$(this).css("background-color", "#3C7B9C")
			$(this).addClass('clicked')

			$('table').toggleClass("o x")

	 		if (chuck){ //play against Chuck Norris (still in beta)
				turnCount++				
				chucksTurn(); //
			}
		}

		isGameOver(); //checks if anyone won the game on click
		chuckNorris(); 

	});


	function chuckNorris(){ //makes api call to chuckNorris.io and 
		$.ajax({
			type:'GET',
			url:"https://api.chucknorris.io/jokes/random",  
			success:function(d) {
				console.log(d.value);

				$('.chuck').text(d.value) //displaying Chuck Norris quotes at bottom of page
			}


		});
	}

	function isGameOver(){ //shows combination of ways for users to win- so if these cells have matching letters, a player wins!
		if(check('#1', '#2', '#3')){
		}
		else if(check('#4','#5','#6')){
		}
		else if(check('#7','#8','#9')){
		}
		else if(check('#1','#4','#7')){
		}
		else if(check('#2','#5','#8')){
		}
		else if(check('#3','#6','#9')){
		}
		else if(check('#1','#5','#9')){
		}
		else if(check('#3','#5', '#7')){
		}



	}

	function check(a,b,c){ //passes TD id's to see if they match
		//console.log(a,b,c)
		aletter = $(a).text(); 
		bletter = $(b).text();
		cletter = $(c).text();
		//console.log(aletter, bletter,cletter)

		if (aletter == bletter && bletter == cletter && bletter != ""){ //checking whether the letters inside the cells match
			// alert('YOU WIN')
			let message;  
			if(turnCount % 2 == 0 && !chuck){  //determines which player won using turnCount
				message = 'X'
			} else if(turnCount % 2 == 0 && chuck){
				message = 'Chuck Norris'
			} else {
				message = 'O'     	
			}

			$("#NewGame p").text( message + ' Wins!') 

			$("#NewGame").show() //New Game button appears

			return;    
		}

		else if (turnCount == 9){ //if all cells are filled, then the game is over!
			// alert('GAME OVER')

			$("#NewGame p").text('Tie game!')
			$("#NewGame").show()
			
			return; 
		}


	}

	$("#NewGame button").click(function(e){ //everytime the user clicks on the 'New Game' button, it restarts the game

		$('td').text('') //deletes x's and o's from TDs
		$('td').css("background-color", "#F7FAC2") 
		$('td').removeClass('clicked')
		turnCount = 0; //restarts turnCount
		$('table').toggleClass("x o")
		$("#NewGame").hide()
	});






	//chuck norris
        $("#playchuck").click(function(e){
		chuck = true;
		$('button#playchuck').text('its on!')	
     	})


	function chucksTurn(){ //Chuck takes his turn
		var unclicked = $('td:not(.clicked)'); //returns an array of unclicked TDs
		var rand = unclicked[Math.floor(Math.random() * unclicked.length)] //finds random unclicked TD inside array
		console.log(rand); 

		$(rand).text("x"); //sets random one to play 'x'
		$(rand).css("background-color", "#EB4F62");
		$(rand).addClass('clicked')
		
		$('table').toggleClass("x o") 
		//turnCount++
	}


});
