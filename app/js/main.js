window.addEventListener('DOMContentLoaded', function(){ 
    let playerOne;
    let playerTwo;
    let scoreP1 = 0;
    let scoreP2 = 0;
    let whoPlay;
    let empty;
    let square = document.querySelectorAll('.box div');

    NamePlayerOne();
    NamePlayerTwo();
    whoStart();

    function NamePlayerOne() {
        playerOne = prompt('Please enter Player1 name:'); 
         if ( playerOne === ''){
                playerOne = 'Player1';
        };
        document.querySelector('.player1p').innerHTML = playerOne + ' score: '+ scoreP1;
        };
 

    function NamePlayerTwo(){
        playerTwo = prompt('Please enter Player2 name:');
        if (playerTwo === ''){
            playerTwo = 'Player2';
        };
        document.querySelector('.player2p').innerHTML = playerTwo +' score: ' + scoreP2;
        };
   


    function turn() {
        if (whoPlay === 'player1'){
            document.querySelector('.turn').innerHTML = playerOne + " turn!";
            document.querySelector('.turn').style.backgroundColor = '#ff1919';
            document.querySelector('.turn').style.opacity = '0.6';
            
        }

        else if (whoPlay === 'player2'){
            document.querySelector('.turn').innerHTML = playerTwo + " turn!";
            document.querySelector('.turn').style.backgroundColor = '#3333ff';
            document.querySelector('.turn').style.opacity = '0.6';
            
        }
    };

    function whoStart() {
        let random = Math.floor(Math.random()* 10); 
        if ( random< 5) {
            whoPlay = 'player1';
        }
        else {
            whoPlay = 'player2';
        };
    turn();
    startGame();
    };


    function startGame() {
        empty = 9;
        for (i=0; i < 9; i++) {
            square[i].removeAttribute('class');
        };
    
    clickListener();     
    };

    function clickListener(){                                                  
    square.forEach(
        function(event){
            event.addEventListener('click', clicked);
        }
    )
    };

    function clicked(){                                                         
        this.classList.add(whoPlay);
        this.removeEventListener('click', clicked);
        if(whoPlay === 'player1'){
            whoPlay = 'player2'
        }else{
            whoPlay = 'player1'
        };
        empty--;
        winner();
        turn();
        if(empty === 0){
            alert("TIE!");
            startGame();
        }
    };

    function winner(){                                                          
    var row1 = square[0].className + square[1].className + square[2].className;
    var row2 = square[3].className + square[4].className + square[5].className;
    var row3 = square[6].className + square[7].className + square[8].className;

    var column1 = square[0].className + square[3].className + square[6].className;
    var column2 = square[1].className + square[4].className + square[7].className;
    var column3 = square[2].className + square[5].className + square[8].className;

    var diagonal1 = square[0].className + square[4].className + square[8].className;
    var diagonal2 = square[2].className + square[4].className + square[6].className;

    var winFields = [
        row1, row2, row3, column1, column2, column3, diagonal1, diagonal2
    ];

    if(winFields.includes('player1player1player1')){
        alert(playerOne +' wins!');
        whoPlay = 'player2';             
        startGame();
         scoreP1++;
        document.querySelector('.player1p').innerHTML = playerOne + ' score: ' + scoreP1;

    }else if(winFields.includes('player2player2player2')){
        alert(playerTwo + ' wins!');
        whoPlay = 'player1';              
        startGame();
        scoreP2++;
        document.querySelector('.player2p').innerHTML = playerTwo + ' score: ' + scoreP2;
    }else{
        return
    };
};

});