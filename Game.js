class Game {
    constructor(){

    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
      async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
        player1 = createSprite(600,600,50,50);
    }

    play(){
        form.hide();
        
        Player.getPlayerInfo();
        
        if(allPlayers !== undefined){
          background(rgb(198,135,103));
          image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
          
          //var display_position = 100;
          
          //index of the array
          var index = 0;
    
          //x and y position of the cars
          var x = 175 ;
          var y;
    
          for(var plr in allPlayers){
            //add 1 to the index for every loop
            index = index + 1 ;
    
            //position the cars a little away from each other in x direction
            x = x + 200;
            //use data form the database to display the cars in y direction
            y = displayHeight - allPlayers[plr].distance;
            players[index-1].x = x;
            players[index-1].y = y;
           // console.log(index, player.index)
    
           
            if (index === player.index){
              camera.position.x = displayWidth/2;
              camera.position.y = cars[index-1].y;
            }
           
          }
    
        }
       
        drawSprites();
      }
    
      end(){
        console.log("Game Ended");
      }

}