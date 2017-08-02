$(function() {

	var chuck = false
	var turnCount = 0;
	$("#NewGame").hide()


	$("td").click(function(e){     
		if( $(this).text() != "" ){  //Don't let the same TD get clicked again. 
			return;
		}

		turnCount++

		if(turnCount % 2 == 0 && !chuck){ 
			$(this).text("x");
			$(this).css("background-color", "#EB4F62");
			$(this).addClass('clicked')

			$('table').toggleClass("x o")
			

		}

		else{
			$(this).text("o");
			$(this).css("background-color", "#3C7B9C")
			$(this).addClass('clicked')

			$('table').toggleClass("o x")

	 		if (chuck){
				turnCount++				
				chucksTurn(); 
			}
		}
		isGameOver(); 
		chuckNorris();

	});


	function chuckNorris(){
		$.ajax({
			type:'GET',
			url:"https://api.chucknorris.io/jokes/random",  
			success:function(d) {
				console.log(d.value);

				$('.chuck').text(d.value)
			}


		});
	}

	function isGameOver(){
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

	function check(a,b,c){
		//console.log(a,b,c)
		aletter = $(a).text();
		bletter = $(b).text();
		cletter = $(c).text();
		//console.log(aletter, bletter,cletter)

		if (aletter == bletter && bletter == cletter && bletter != ""){
			// alert('YOU WIN')
			let message;  
			if(turnCount % 2 == 0 && !chuck){  
				message = 'X'
			} else if(turnCount % 2 == 0 && chuck){
				message = 'Chuck Norris'
			} else {
				message = 'O'     	
			}

			$("#NewGame p").text( message + ' Wins!')

			$("#NewGame").show()

			return;    
		}

		else if (turnCount == 9){
			// alert('GAME OVER')

			$("#NewGame p").text('Tie game!')
			$("#NewGame").show()
			
			return; 
		}


	}

	$("#NewGame button").click(function(e){

		$('td').text('')
		$('td').css("background-color", "#F7FAC2")
		$('td').removeClass('clicked')
		turnCount = 0;
		$('table').toggleClass("x o")
		$("#NewGame").hide()
	});






	//chuck norris
        $("#playchuck").click(function(e){
		chuck = true;
		$('button#playchuck').text('its on!')	
     	})


	function chucksTurn(){
		var unclicked = $('td:not(.clicked)'); 
		var rand = unclicked[Math.floor(Math.random() * unclicked.length)]
		console.log(rand); 

		$(rand).text("x");
		$(rand).css("background-color", "#EB4F62");
		$(rand).addClass('clicked')
		
		$('table').toggleClass("x o")
		//turnCount++
	}


});
