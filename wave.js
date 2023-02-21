function new_wave (){
    if(TD.enemyList.enemys.length < 15 && TD.game.e_x > -300){
        TD.game.wave++;
        document.getElementById("wave-number").innerText = TD.game.wave;
        for(let es = 0; es <= TD.game.e_spawn-1; es ++){
            TD.enemyList.enemys.push(new TD.CreateObj("enemy", TD.game.e_x, 200));
    
            let random = Math.random();
            if(TD.game.wave > 50){
                if(random > 0.5){
                    TD.enemyList.enemys[TD.enemyList.enemys.length-1].immun += 2;
                    TD.enemyList.enemys[TD.enemyList.enemys.length-1].armored = true;
                }
            } else if(TD.game.wave > 30){
                if(random > 0.7){
                    TD.enemyList.enemys[TD.enemyList.enemys.length-1].immun += 2;
                } else if(random > 0.9){
                    TD.enemyList.enemys[TD.enemyList.enemys.length-1].armored = true;
                }
            } else if(TD.game.wave > 15){
                if(random > 0.8){
                    TD.enemyList.enemys[TD.enemyList.enemys.length-1].immun += 2;
                }
            }
            TD.game.e_x -= 25;
        }
        TD.game.e_spawn++;
            if((TD.game.wave%5)== 0){
            TD.game.enemy_life++;
            TD.game.e_spawn = 1;
            }
        
        document.getElementById("enemy-level").innerText = TD.game.enemy_life;
        }
};

setTimeout(()=>{
    setInterval(()=>{
        if(TD.enemyList.enemys.length === 0 || TD.enemyList.enemys[TD.enemyList.enemys.length-1] === ("undefined" || undefined || null)){
            TD.game.e_x = 0;
        }
    
        if(TD.game.wave === 500){
            alert("Level geschafft! Auf zum nächsten...")
            setTimeout(()=>{
                TD.player.level = 2;
            }, 2000);
        }
    }, 1)
}, 10);