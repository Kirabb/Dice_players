var picNumber1 = Math.floor ( Math.random()*6+1);
    picNumber2 = Math.floor ( Math.random()*6+1);
    sourseNum1 = "images/dice"+ picNumber1 +".png";
    sourseNum2 = "images/dice"+ picNumber2 +".png";
    winnerTitle = document.querySelector( "h1" );


document.querySelector( ".img1" ).setAttribute( "src", sourseNum1 );

document.querySelector( ".img2" ).setAttribute( "src", sourseNum2 );



  if ( picNumber1 > picNumber2 ){

    winnerTitle.innerHTML = "Player1 Won!" ;

  }else if ( picNumber1 === picNumber2){

    winnerTitle.innerHTML = "hha!" ;

  }else {

    winnerTitle.innerHTML = "Player2 Won!" ;

  }
