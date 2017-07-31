$("td").click(function(e){     //function_td
  
  turnCount++


  if(turnCount % 2 ==0){
  	$(this).text("x");
    $(this).css("background-color", "#EB4F62");
    $('table').toggleClass("x o")
  }

  else{
  	$(this).text("o");
    $(this).css("background-color", "#3C7B9C")
    $('table').toggleClass("o x")
  }
  
  $(this).addClass('clicked')

  //check()
  isGameOver();
  // e.stopPropagation();
});

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
  console.log(a,b,c)

  aletter = $(a).text();
  bletter = $(b).text();
  cletter = $(c).text();

  console.log(aletter, bletter,cletter)

  if (aletter == bletter && bletter == cletter && bletter != ""){
    alert('YOU WIN')

    $('td').text('') 
    $('td').css("background-color", "#F7FAC2")
    $('td').removeClass('clicked')


    turnCount = 0

    // '#'+Math.random().toString(16).substr(-6);

    
    
    }

  else if (turnCount == 9){
    alert('GAME OVER')

    $('td').text('')
    $('td').css("background-color", "#F7FAC2")
    $('td').removeClass('clicked')


    turnCount = 0;
  }


}

// $("#NewGame").click(function(e)){
//     $('td').text('')
//     $('td').css("background-color", "#F7FAC2")
//     $('td').removeClass('clicked')


//     turnCount = 0;
// }


var turnCount = 0;

