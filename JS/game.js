class Game{
    constructor(){}
    
    
    
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
    
      start(){
        if(gameState === 0){
          player = new Player();
          player.getCount();
          form = new Form()
          form.display();
        }
        car1=createSprite(100,200)

        car2=createSprite(300,200)

        car3=createSprite(500,200)

        car4=createSprite(700,200)



        
cars=[car1,car2,car3,car4]




      }
play(){
form.hide()
Player.getPlayerInfo()
if(allPlayers!=undefined){
    var yPosition=130
    var index=0
    var x = 0
    var y=0
    for(var i in allPlayers){
        index=index+1
        x=x+200
        y = displayHeight-allPlayers[i].distance
        cars[index-1].x=x
        cars[index-1].y=y
if(index==player.index){
cars[index-1].shapeColor="pink"
camera . position.x=displayWidth/2
camera . position.y=cars[index-1].y
}


else{
    cars[index-1].shapeColor="blue"
    
}
//yPosition=yPosition+20
//textSize(20)
//text(allPlayers[i].name+":"+allPlayers[i].distance,130,yPosition)
        
    }
}
if(keyIsDown (UP_ARROW)&&player.index!=null){
player.distance=player.distance+34
player.update()
}
drawSprites()
}

      
    }