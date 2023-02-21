let TD = {
    canvas: document.getElementById('canvas'),
    ctx: this.canvas.getContext("2d"),

    tmr: false,


    game: {
        enemy_life: 1,
        e_spawn: 1,
        e_x: 0,
        wave: 1,
    },

    player: {
        level: 1,
        life: 100,
        stone: 1000
    },

    enemyList: {
        enemys: [],
        towers: [],
        bombers: [],
        sniper: [],
        freeze: [],
        mine: [],
        heal: [],
        decoy: [],
        radar: [],
        goldmine: [],
        sentry: [],
        acid: [],
        toxic: [],
        electric: [],
        support: [],
        nuke: [],
        laser: [],
        arrows: []
    },

    waypoints: [
        [{x: 0, y: 200}, {x: 200, y: 200}, {x: 200, y: 450}, {x: 800, y: 450}],
        [{x: -20, y: 100}, {x: 150, y: 200}, {x: 200, y: 350}, {x: 300, y: 450}, {x: 450, y: 500}, {x: 800, y: 500}]
    ],

    init: function(){


        TD.enemyList.towers.push(new TD.CreateObj("tower", 200, 135));

        this.tmr = setInterval(()=>{
            TD.drawMap();
            for (i = 0; i < TD.enemyList.towers.length; i++) {
                TD.enemyList.towers[i].draw();
                TD.enemyList.towers[i].shootTower();
            }
            for (i = 0; i < TD.enemyList.bombers.length; i++) {
                TD.enemyList.bombers[i].draw();
                TD.enemyList.bombers[i].shootBomber();
            }
            for (i = 0; i < TD.enemyList.freeze.length; i++) {
                TD.enemyList.freeze[i].draw();
                TD.enemyList.freeze[i].shootFreezer();
            }
            for (i = 0; i < TD.enemyList.mine.length; i++) {
                TD.enemyList.mine[i].draw();
                TD.enemyList.mine[i].shootmine();
            }
            for (i = 0; i < TD.enemyList.decoy.length; i++) {
                TD.enemyList.decoy[i].draw();
                TD.enemyList.decoy[i].decoy();
            }
            for (i = 0; i < TD.enemyList.radar.length; i++) {
                TD.enemyList.radar[i].draw();
                TD.enemyList.radar[i].radar();
            }
            for (i = 0; i < TD.enemyList.goldmine.length; i++) {
                TD.enemyList.goldmine[i].draw();
                TD.enemyList.goldmine[i].mine();
            }
            for (i = 0; i < TD.enemyList.sentry.length; i++) {
                TD.enemyList.sentry[i].draw();
                TD.enemyList.sentry[i].shootSentry();
            }
            for (i = 0; i < TD.enemyList.acid.length; i++) {
                TD.enemyList.acid[i].draw();
                TD.enemyList.acid[i].acid();
            }
            for (i = 0; i < TD.enemyList.toxic.length; i++) {
                TD.enemyList.toxic[i].draw();
                TD.enemyList.toxic[i].toxic();
            }
            for (i = 0; i < TD.enemyList.electric.length; i++) {
                TD.enemyList.electric[i].draw();
                TD.enemyList.electric[i].shootElectric();
            }
            for (i = 0; i < TD.enemyList.support.length; i++) {
                TD.enemyList.support[i].draw();
                TD.enemyList.support[i].support();
            }
            for (i = 0; i < TD.enemyList.nuke.length; i++) {
                TD.enemyList.nuke[i].draw();
                TD.enemyList.nuke[i].shootNuke();
            }
            for (i = 0; i < TD.enemyList.laser.length; i++) {
                TD.enemyList.laser[i].draw();
                TD.enemyList.laser[i].shootLaser();
            }
            for (i = 0; i < TD.enemyList.heal.length; i++) {
                TD.enemyList.heal[i].draw();
                TD.enemyList.heal[i].heal();
            }
            for (i = 0; i < TD.enemyList.sniper.length; i++) {
                TD.enemyList.sniper[i].draw();
                TD.enemyList.sniper[i].shootA();
            }
            for (let i = 0; i < TD.enemyList.enemys.length; i++) {
                TD.enemyList.enemys[i].update();
            }
            for (let i = 0; i < TD.enemyList.arrows.length; i++) {
                TD.enemyList.arrows[i].update();
            }
        }, 1000/60);
        
        return true;
    },

    drawMap: function(){
        TD.ctx.clearRect(0, 0, TD.canvas.width, TD.canvas.height);

        TD.ctx.fillStyle = "rgb(220, 220, 220)";
        TD.ctx.fillRect(0, 0, TD.canvas.width, TD.canvas.height);

        TD.ctx.moveTo(TD.waypoints[TD.player.level-1][0].x, TD.waypoints[TD.player.level-1][0].y);
        TD.ctx.beginPath();
        TD.ctx.strokeStyle = "rgb(180, 180, 180)";
        TD.ctx.lineWidth = 80;
        for(i = 0; i <= TD.waypoints[TD.player.level-1].length-1; i++){
            TD.ctx.lineTo(TD.waypoints[TD.player.level-1][i].x, TD.waypoints[TD.player.level-1][i].y);
        }
        TD.ctx.stroke();
    },

    CreateObj: function(type, x, y){
        this.type = type;
        this.x = x;
        this.y = y;

        const defaultProperties = {
            index: 0,
            stufe: 1,
            firerate: 1,
            size: 20,
            range: 20 * 5.5,
            img: "",
            precision: 1,
            bossdmg: 0,
            strong: false,
            strongDmg: 0,
        };
        
        if (type === "tower") {
            Object.assign(this, defaultProperties, {
                power: 1,
                fire_delay_now: 14,
                fire_delay_begin: 14,
            });
        }
        if (type === "bomber") {
            Object.assign(this, defaultProperties, {
                power: 2,
                size: 15,
                bombRadius: 10,
                fire_delay_now: 40,
                fire_delay_begin: 40,
                split: false
            });
        }
        if (type === "sniper") {
            Object.assign(this, defaultProperties, {
                power: 5,
                target_x: 0,
                target_y: 0,
                shootBevor: false,
                fire_delay_now: 40,
                fire_delay_begin: 40,
            });
        }
        if (type === "poison") {
            Object.assign(this, defaultProperties, {
                type: "poison",
                power: 1,
                range: 100,
                attackSpeed: 1,
                cost: 100,
                upgradeCost: 50,
                poisonDuration: 3,
                poisonDamage: 0.5
            });
        }
        if (type === "freeze") {
            Object.assign(this, defaultProperties, {
                type: "freeze",
                power: 1,
                range: 100,
                attackSpeed: 1,
                cost: 100,
                upgradeCost: 50,
                freezeDuration: 3,
                freezeSlow: 0.5
            });
        }
        if (type === "mine") {
            Object.assign(this, defaultProperties, {
                type: "mine",
                power: 1,
                range: 100,
                attackSpeed: 1,
                cost: 100,
                upgradeCost: 50,
                mineRadius: 3,
                mineDamage: 0.5
            });
        }
        if (type === "decoy") {
            Object.assign(this, defaultProperties, {
                size: 15,
                range: 20 * 3,
                decoyDuration: 30
            });
        }
          if (type === "toxic") {
            Object.assign(this, defaultProperties, {
              power: 2,
              range: 20 * 4.5,
              fire_delay_now: 20,
              fire_delay_begin: 20,
            });
          }
          if (type === "radar") {
            Object.assign(this, defaultProperties, {
              power: 1,
              range: 20 * 9,
              firerate: 0,
              fire_delay_now: 0,
              fire_delay_begin: 0,
            });
          }
          if (type === "goldmine") {
            Object.assign(this, defaultProperties, {
              power: 0,
              range: 0,
              firerate: 0,
              fire_delay_now: 0,
              fire_delay_begin: 0,
            });
          }
          if (type === "sentry") {
            Object.assign(this, defaultProperties, {
              power: 1,
              range: 20 * 4.5,
              fire_delay_now: 14,
              fire_delay_begin: 14,
            });
          }
          if (type === "heal") {
            Object.assign(this, defaultProperties, {
              power: 0,
              range: 20 * 4,
              firerate: 1,
              fire_delay_now: 40,
              fire_delay_begin: 40,
            });
          }
          if (type === "acid") {
            Object.assign(this, defaultProperties, {
              power: 3,
              range: 20 * 4,
              fire_delay_now: 40,
              fire_delay_begin: 40,
            });
          }
          if (type === "electric") {
            Object.assign(this, defaultProperties, {
            power: 2,
            size: 15,
            electricRadius: 10,
            fire_delay_now: 40,
            fire_delay_begin: 40,
            chain: false
            });
            }
            if (type === "nuke") {
                Object.assign(this, defaultProperties, {
                    power: 5,
                    size: 20,
                    firerate: 0,
                    fire_delay_now: 70,
                    fire_delay_begin: 70,
                    range: 1000,
                    precision: 1,
                    nuke: true,
                    rocketSize: 10,
                });
            }    
            if (type === "support") {
                Object.assign(this, defaultProperties, {
                    power: 1,
                    size: 10,
                    firerate: 1,
                    fire_delay_now: 40,
                    fire_delay_begin: 40,
                    range: 100,
                    precision: 2,
                    support: true
                });
            }
            if (type === "laser") {
                Object.assign(this, defaultProperties, {
                power: 5,
                size: 20,
                range: 50,
                firerate: 1,
                fire_delay_now: 40,
                fire_delay_begin: 40,
                laserSize: 10,
                });
                }
    
        if (type === "enemy") {
            Object.assign(this, defaultProperties, {
                fire_delay_now: 20,
                fire_delay_begin: 20,
                dir_x: 0,
                dir_y: 0,
                vel_x: 1,
                vel_y: 1,
                life: TD.game.enemy_life,
                immun: 0,
                armored: false,
                waypoint: 0,
                boss: false,
                size: 3 + Math.floor(Math.random() * 5),
                fontColor: 'red'
            });
        }
        if (type === "arrow") {
            Object.assign(this, defaultProperties, {
                speed: 1,
                size: 1,
                lifetime: 0,
                target_x: 0,
                target_y: 0,
                aoedmg: false,
                m_k: false,
                fromEnemy: false,
                rocket: false
            });
        }        

        this.update = function(){
            if(this.type == "enemy"){
                if(this.life <= 0){
                    this.removeObj("enemy");
                    // TD.enemyList.arrows[0].removeObj("arrow");
                }
                this.shootEnemy();
                this.dir_x = 0;
                this.dir_y = 0;
                
                if(this.x < TD.waypoints[TD.player.level-1][this.waypoint].x){
                    this.x += this.vel_x;
                    this.dir_x = 1;
                }
                if(this.x > TD.waypoints[TD.player.level-1][this.waypoint].x){
                    this.x -= this.vel_x;
                    this.dir_x = -1;
                }
                if(this.y < TD.waypoints[TD.player.level-1][this.waypoint].y){
                    this.y += this.vel_y;
                    this.dir_y = 1;
                }
                if(this.y > TD.waypoints[TD.player.level-1][this.waypoint].y){
                    this.y -= this.vel_y;
                    this.dir_y = -1;
                }
                if(this.x == TD.waypoints[TD.player.level-1][this.waypoint].x && 
                    this.y == TD.waypoints[TD.player.level-1][this.waypoint].y){
                        if(typeof(TD.waypoints[TD.player.level-1][this.waypoint+1])== "undefined"){
                            if(this.type == "enemy"){
                                this.removeObj("enemy");
                            }
                            
                            TD.player.life--;
                            TD.player.stone += 100;
                            
                            if(TD.player.life === 0){
                                
                                document.getElementById("game-over").style.display = "block";
                                // document.getElementById("gameoversound").play();
                                window.clearInterval(TD.tmr);
                                setTimeout(()=>{
                                    location.reload();
                                }, 1000);
                            }
                        } else {
                            this.waypoint++;
                        }
                    }
                    this.draw();
                    return;
                }
                
                if(this.type == "arrow"){
                    if(!this.aoedmg){
                        if(Math.floor(this.x) == Math.floor(this.target_x) && Math.floor(this.y) == Math.floor(this.target_y)
                         || Math.ceil(this.x) == Math.floor(this.target_x) && Math.ceil(this.y) == Math.floor(this.target_y)
                         || Math.floor(this.x) == Math.floor(this.target_x) && Math.ceil(this.y) == Math.floor(this.target_y)
                         || Math.ceil(this.x) == Math.floor(this.target_x) && Math.floor(this.y) == Math.floor(this.target_y)
                         || TD.enemyList.enemys.length == 0) {
                            this.removeObj("arrow");
                            return;
                        }
                    }
                    if(this.lifetime >= 50){
                        this.removeObj('arrow');
                        return;
                    }
                    this.lifetime++;
                        let dis_x = this.target_x - this.x;
                        let dis_y = this.target_y - this.y;
                
                        this.x += dis_x > 0 ? this.speed + Math.abs(dis_x / dis_y) : -this.speed - Math.abs(dis_x / dis_y);
                        this.y += dis_y > 0 ? this.speed + Math.abs(dis_y / dis_x) : -this.speed - Math.abs(dis_y / dis_x);
                
                        for(let p = 0; p <= TD.enemyList.enemys.length-1; p++) {
                            let e = TD.enemyList.enemys[p];
                            if(this.collidesWith(e) && !this.fromEnemy) {
                                if(e.immun == 0 || this.rocket) {
                                    e.life -= this.power;
                                } else if(this.strong) {
                                    e.life -= this.power - this.strongDmg;
                                }
                                if(e.boss) {
                                    e.life -= this.power - this.bossdmg;
                                }
                                if(e.life <= 0) {
                                    TD.player.stone += 25;
                                    document.getElementById("stone").innerText = TD.player.stone;
                                }
                                this.removeObj("arrow");
                            } else if(this.collidesWith(TD.enemyList.enemys[p+1]) && !this.fromEnemy && this.rocket){
                                if(e.immun == 0 || this.rocket) {
                                    e.life -= this.power;
                                } else if(this.strong) {
                                    e.life -= this.power - this.strongDmg;
                                }
                                if(e.boss) {
                                    e.life -= this.bossdmg;
                                }
                                if(e.life <= 0) {
                                    TD.player.stone += 25;
                                    document.getElementById("stone").innerText = TD.player.stone;
                                }
                                this.removeObj("arrow");
                            } else if(this.collidesWith(TD.enemyList.enemys[p+2]) && !this.fromEnemy && this.rocket){
                                if(e.immun == 0 || this.rocket) {
                                    e.life -= this.power;
                                } else if(this.strong) {
                                    e.life -= this.power - this.strongDmg;
                                }
                                if(e.boss) {
                                    e.life -= this.bossdmg;
                                }
                                if(e.life <= 0) {
                                    TD.player.stone += 25;
                                    document.getElementById("stone").innerText = TD.player.stone;
                                }
                                this.removeObj("arrow");
                            } else if(this.collidesWith(TD.enemyList.enemys[p-1]) && !this.fromEnemy && this.rocket){
                                if(e.immun == 0 || this.rocket) {
                                    e.life -= this.power;
                                } else if(this.strong) {
                                    e.life -= this.power - this.strongDmg;
                                }
                                if(e.boss) {
                                    e.life -= this.bossdmg;
                                }
                                if(e.life <= 0) {
                                    TD.player.stone += 25;
                                    document.getElementById("stone").innerText = TD.player.stone;
                                }
                                this.removeObj("arrow");
                            } else if(this.collidesWith(TD.enemyList.enemys[p-2]) && !this.fromEnemy){
                                if(e.immun == 0 || this.rocket) {
                                    e.life -= this.power;
                                } else if(this.strong) {
                                    e.life -= this.power - this.strongDmg;
                                }
                                if(e.boss) {
                                    e.life -= this.bossdmg;
                                }
                                if(e.life <= 0) {
                                    TD.player.stone += 25;
                                    document.getElementById("stone").innerText = TD.player.stone;
                                }
                                this.removeObj("arrow");
                            } else if(this.fromEnemy) {
                                Object.values(TD.enemyList).forEach(array => {
                                    array.forEach(element => {
                                        if(element.type == 'enemy' || element.type == 'arrow'){
                                            return;
                                        } else {
                                            if(this.collidesWith(element) && this.fromEnemy){
                                                // element.life -= this.power; TODO
                                                console.log('I Hit!');
                                            }
                                        }
                                    });
                                });
                            }
                        }
                        this.draw();
                        return
                }

            };
            this.collidesWith = function(obj) {
                if(obj == (undefined || null)){
                    return false;
                }
                return this.x >= obj.x - obj.size && this.x <= obj.x + obj.size && this.y >= obj.y - obj.size && this.y <= obj.y + obj.size;
            };

        this.removeObj = function(type){
            if(type == "tower"){
                TD.enemyList.towers.splice(this.index, 1);
                for(i = 0; i <= TD.enemyList.towers.length - 1; i++){
                    TD.enemyList.towers[i].index = i;
                }
                return;
            }
            if(type == "bomber"){
                TD.enemyList.bombers.splice(this.index, 1);
                for(i = 0; i <= TD.enemyList.bombers.length - 1; i++){
                    TD.enemyList.bombers[i].index = i;
                }
                return;
            }
            if(type == "sniper"){
                TD.enemyList.sniper.splice(this.index, 1);
                for(i = 0; i <= TD.enemyList.sniper.length - 1; i++){
                    TD.enemyList.sniper[i].index = i;
                }
                return;
            }
            if(type == "freeze"){
                TD.enemyList.freeze.splice(this.index, 1);
                for(i = 0; i <= TD.enemyList.freeze.length - 1; i++){
                    TD.enemyList.freeze[i].index = i;
                }
                return;
            }
            if(type == "toxic"){
                TD.enemyList.toxic.splice(this.index, 1);
                for(i = 0; i <= TD.enemyList.toxic.length - 1; i++){
                    TD.enemyList.toxic[i].index = i;
                }
                return;
            }
            if(type == "sentry"){
                TD.enemyList.sentry.splice(this.index, 1);
                for(i = 0; i <= TD.enemyList.sentry.length - 1; i++){
                    TD.enemyList.sentry[i].index = i;
                }
                return;
            }
            if(type == "heal"){
                TD.enemyList.heal.splice(this.index, 1);
                for(i = 0; i <= TD.enemyList.heal.length - 1; i++){
                    TD.enemyList.heal[i].index = i;
                }
                return;
            }
            if(type == "acid"){
                TD.enemyList.acid.splice(this.index, 1);
                for(i = 0; i <= TD.enemyList.acid.length - 1; i++){
                    TD.enemyList.acid[i].index = i;
                }
                return;
            }
            if(type == "laser"){
                TD.enemyList.laser.splice(this.index, 1);
                for(i = 0; i <= TD.enemyList.laser.length - 1; i++){
                    TD.enemyList.laser[i].index = i;
                }
                return;
            }
            if(type == "electric"){
                TD.enemyList.electric.splice(this.index, 1);
                for(i = 0; i <= TD.enemyList.electric.length - 1; i++){
                    TD.enemyList.electric[i].index = i;
                }
                return;
            }
            if(type == "support"){
                TD.enemyList.support.splice(this.index, 1);
                for(i = 0; i <= TD.enemyList.support.length - 1; i++){
                    TD.enemyList.support[i].index = i;
                }
                return;
            }
            if(type == "nuke"){
                TD.enemyList.nuke.splice(this.index, 1);
                for(i = 0; i <= TD.enemyList.nuke.length - 1; i++){
                    TD.enemyList.nuke[i].index = i;
                }
                return;
            }
            if(type == "radar"){
                TD.enemyList.radar.splice(this.index, 1);
                for(i = 0; i <= TD.enemyList.radar.length - 1; i++){
                    TD.enemyList.radar[i].index = i;
                }
                return;
            }
            if(type == "decoy"){
                TD.enemyList.decoy.splice(this.index, 1);
                for(i = 0; i <= TD.enemyList.decoy.length - 1; i++){
                    TD.enemyList.decoy[i].index = i;
                }
                return;
            }

            if(type == "goldmine"){
                TD.enemyList.goldmine.splice(this.index, 1);
                for(i = 0; i <= TD.enemyList.goldmine.length - 1; i++){
                    TD.enemyList.goldmine[i].index = i;
                }
                return;
            }
            if(type == "enemy"){
                TD.enemyList.enemys.splice(this.index, 1);
                for(i = 0; i <= TD.enemyList.enemys.length - 1; i++){
                    TD.enemyList.enemys[i].index = i;
                }
                return;
            }
            if(type == "arrow"){
                TD.enemyList.arrows.splice(this.index, 1);
                for(i = 0; i <= TD.enemyList.arrows.length - 1; i++){
                    TD.enemyList.arrows[i].index = i;
                }
                return;
            }

        }

        this.draw = function(){
            TD.ctx.beginPath();

            this.draw = function(){
                TD.ctx.beginPath();
            
                if(this.type=="enemy"){
                    TD.ctx.fillStyle = this.immun == 0 ? "red" : "grey";
                    TD.ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
                    TD.ctx.fill();
            
                    TD.ctx.fillStyle = this.fontColor;
                    TD.ctx.textAlign = "center";
                    TD.ctx.font = "10px Comic Sans MS";
                    TD.ctx.fillText("HP: " + this.life, this.x, this.y-this.size-5)
                    return;
                }
            
                if(this.type=="tower" || this.type=="bomber" || this.type=="sniper"){
            
                    TD.ctx.beginPath();
                    TD.ctx.fillStyle = this.type === "tower" ? "blue" : this.type === "bomber" ? "red" : "green";
                    TD.ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
                    TD.ctx.fill();
            
                    TD.ctx.fillStyle = this.fontColor;
                    TD.ctx.textAlign = "center";
                    TD.ctx.font = "12px Comic Sans MS";
            
                    if(this.type !== 'sniper'){
                        TD.ctx.fillText("Reichweite: " + this.range, this.x, this.y-this.size-21)
                        TD.ctx.fillText("Schaden: " + this.power, this.x, this.y-this.size-47)
                        TD.ctx.fillText("Feuerrate (Stufe): " + this.firerate, this.x, this.y-this.size-34)
                        TD.ctx.fillText("Treffsicherheit: " + this.precision, this.x, this.y-this.size-9)
                        TD.ctx.beginPath();
                        TD.ctx.strokeStyle = this.type === "tower" ? "black" : "red";
                        TD.ctx.fillStyle = "tranzparenz";
                        TD.ctx.arc(this.x, this.y, this.range, 0, 2*Math.PI);
                        TD.ctx.lineWidth = 0.5;
                        TD.ctx.stroke();
                    } else {
                        TD.ctx.fillText("Schaden: " + this.power, this.x, this.y-this.size-47)
                        TD.ctx.fillText("Feuerrate (Stufe): " + this.firerate, this.x, this.y-this.size-34)
                        TD.ctx.fillText("Treffsicherheit: " + this.precision, this.x, this.y-this.size-21)
                    }
                }
                if(this.type=="freeze"){
                    TD.ctx.beginPath();
                    TD.ctx.fillStyle = "cyan";
                    TD.ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
                    TD.ctx.fill();
                    TD.ctx.fillStyle = this.fontColor;
                    TD.ctx.textAlign = "center";
                    TD.ctx.font = "12px Comic Sans MS";
                    TD.ctx.fillText("Feuerrate (Stufe): " + this.firerate, this.x, this.y-this.size-41)
                    TD.ctx.fillText("Reichweite: " + this.range, this.x, this.y-this.size-28)
                    TD.ctx.fillText("Treffsicherheit: " + this.precision, this.x, this.y-this.size-15)
                    TD.ctx.fillText("Freeze: " + this.freeze, this.x, this.y-this.size-2)
                    TD.ctx.beginPath();
                    TD.ctx.strokeStyle = "black";
                    TD.ctx.fillStyle = "tranzparenz";
                    TD.ctx.arc(this.x, this.y, this.range, 0, 2*Math.PI);
                    TD.ctx.lineWidth = 0.5;
                    TD.ctx.stroke();
                    return;
                }
                if(this.type=="mine"){
                    TD.ctx.beginPath();
                    TD.ctx.fillStyle = "brown";
                    TD.ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
                    TD.ctx.fill();
                    TD.ctx.fillStyle = this.fontColor;
                    TD.ctx.textAlign = "center";
                    TD.ctx.font = "12px Comic Sans MS";
                    TD.ctx.fillText("Schaden: " + this.power, this.x, this.y-this.size-47)
                    TD.ctx.fillText("Feuerrate (Stufe): " + this.firerate, this.x, this.y-this.size-34)
                    TD.ctx.fillText("Reichweite: " + this.range, this.x, this.y-this.size-21)
                    TD.ctx.fillText("Treffsicherheit: " + this.precision, this.x, this.y-this.size-9)
                    TD.ctx.beginPath();
                    TD.ctx.strokeStyle = "black";
                    TD.ctx.fillStyle = "tranzparenz";
                    TD.ctx.arc(this.x, this.y, this.range, 0, 2*Math.PI);
                    TD.ctx.lineWidth = 0.5;
                    TD.ctx.stroke();
                    return;
                }
                if (this.type === "decoy") {
                    TD.ctx.beginPath();
                    TD.ctx.fillStyle = "red";
                    TD.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
                    TD.ctx.fill();
                    TD.ctx.fillStyle = this.fontColor;
                    TD.ctx.textAlign = "center";
                    TD.ctx.font = "12px Comic Sans MS";
                    TD.ctx.fillText("Decoy: " + this.decoyDuration, this.x, this.y - this.size - 5);
                    TD.ctx.beginPath();
                    TD.ctx.strokeStyle = "black";
                    TD.ctx.fillStyle = "tranzparenz";
                    TD.ctx.arc(this.x, this.y, this.range, 0, 2*Math.PI);
                    TD.ctx.lineWidth = 0.5;
                    TD.ctx.stroke();
                    return;
                  }
                  if (this.type === "heal") {
                    TD.ctx.beginPath();
                    TD.ctx.fillStyle = "green";
                    TD.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
                    TD.ctx.fill();
                    TD.ctx.fillStyle = this.fontColor;
                    TD.ctx.textAlign = "center";
                    TD.ctx.font = "12px Comic Sans MS";
                    TD.ctx.fillText("Heal Rate (Level): " + this.healRate, this.x, this.y - this.size - 34);
                    TD.ctx.fillText("Range: " + this.range, this.x, this.y - this.size - 21);
                    TD.ctx.beginPath();
                    TD.ctx.strokeStyle = "green";
                    TD.ctx.fillStyle = "transparency";
                    TD.ctx.arc(this.x, this.y, this.range, 0, 2 * Math.PI);
                    TD.ctx.lineWidth = 0.5;
                    TD.ctx.stroke();
                    return;
                    }
                    if(this.type == "laser"){
                        TD.ctx.beginPath();
                        TD.ctx.fillStyle = "red";
                        TD.ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
                        TD.ctx.fill();
                        TD.ctx.fillStyle = this.fontColor;
                        TD.ctx.textAlign = "center";
                        TD.ctx.font = "12px Comic Sans MS";
                        TD.ctx.fillText("Feuerrate (Stufe): " + this.firerate, this.x, this.y-this.size-34)
                        TD.ctx.fillText("Schaden: " + this.power, this.x, this.y-this.size-21)
                        return;
                    }
                    if (this.type == "electric") {
                        TD.ctx.beginPath();
                        TD.ctx.fillStyle = "yellow";
                        TD.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
                        TD.ctx.fill();
                        TD.ctx.fillStyle = this.fontColor;
                        TD.ctx.textAlign = "center";
                        TD.ctx.font = "12px Comic Sans MS";
                        TD.ctx.fillText("Feuerrate (Stufe): " + this.firerate, this.x, this.y - this.size - 34)
                        TD.ctx.fillText("Reichweite: " + this.range, this.x, this.y - this.size - 21)
                        TD.ctx.fillText("Treffsicherheit: " + this.precision, this.x, this.y - this.size - 9)
                        TD.ctx.beginPath();
                        TD.ctx.strokeStyle = "black";
                        TD.ctx.fillStyle = "transparent";
                        TD.ctx.arc(this.x, this.y, this.range, 0, 2 * Math.PI);
                        TD.ctx.lineWidth = 0.5;
                        TD.ctx.stroke();
                        return;
                        }
                    if (this.type === "nuke") {
                        TD.ctx.fillText("Power: " + this.power, this.x, this.y - this.size - 21)
                        TD.ctx.fillText("Range: " + this.range, this.x, this.y - this.size - 8)
                        TD.ctx.beginPath();
                        TD.ctx.fillStyle = "red";                            
                        TD.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
                        TD.ctx.fill();
                        TD.ctx.beginPath();
                        TD.ctx.fillStyle = "gray";
                        TD.ctx.arc(this.x, this.y, this.size / 2, 0, 2 * Math.PI);
                        TD.ctx.fill();
                        TD.ctx.fillStyle = "white";
                        TD.ctx.textAlign = "center";
                        TD.ctx.font = "12px Comic Sans MS";
                        return;
                        }
                    if (this.type == "radar") {
                        TD.ctx.beginPath();
                        TD.ctx.fillStyle = "blue";
                        TD.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
                        TD.ctx.fill();
                        TD.ctx.fillStyle = this.fontColor;
                        TD.ctx.textAlign = "center";
                        TD.ctx.font = "12px Comic Sans MS";
                        TD.ctx.fillText("Feuerrate (Stufe): " + this.firerate, this.x, this.y - this.size - 34)
                        TD.ctx.fillText("Reichweite: " + this.range, this.x, this.y - this.size - 21)
                        TD.ctx.beginPath();
                        TD.ctx.strokeStyle = "blue";
                        TD.ctx.fillStyle = "transparent";
                        TD.ctx.arc(this.x, this.y, this.range, 0, 2 * Math.PI);
                        TD.ctx.lineWidth = 0.5;
                        TD.ctx.stroke();
                        return;
                        }
                    if (this.type == "support") {
                        TD.ctx.beginPath();
                        TD.ctx.fillStyle = "green";
                        TD.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
                        TD.ctx.fill();
                        TD.ctx.fillStyle = this.fontColor;
                        TD.ctx.textAlign = "center";
                        TD.ctx.font = "12px Comic Sans MS";
                        TD.ctx.fillText("Feuerrate (Stufe): " + this.firerate, this.x, this.y - this.size - 34)
                        TD.ctx.fillText("Reichweite: " + this.range, this.x, this.y - this.size - 21)
                        TD.ctx.fillText("Treffsicherheit: " + this.precision, this.x, this.y - this.size - 9)
                        TD.ctx.beginPath();
                        TD.ctx.strokeStyle = "black";
                        TD.ctx.fillStyle = "transparent";
                        TD.ctx.arc(this.x, this.y, this.range, 0, 2 * Math.PI);
                        TD.ctx.lineWidth = 0.5;
                        TD.ctx.stroke();
                        return;
                        }
                    if (this.type == "sentry") {
                        TD.ctx.beginPath();
                        TD.ctx.fillStyle = "green";
                        TD.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
                        TD.ctx.fill();
                        TD.ctx.fillStyle = this.fontColor;
                        TD.ctx.textAlign = "center";
                        TD.ctx.font = "12px Comic Sans MS";
                        TD.ctx.fillText("Feuerrate (Stufe): " + this.firerate, this.x, this.y - this.size - 34)
                        TD.ctx.fillText("Reichweite: " + this.range, this.x, this.y - this.size - 21)
                        TD.ctx.fillText("Treffsicherheit: " + this.precision, this.x, this.y - this.size - 9)
                        TD.ctx.beginPath();
                        TD.ctx.strokeStyle = "green";
                        TD.ctx.fillStyle = "transparent";
                        TD.ctx.arc(this.x, this.y, this.range, 0, 2 * Math.PI);
                        TD.ctx.lineWidth = 0.5;
                        TD.ctx.stroke();
                        return;
                        }
                    if (this.type == "toxic") {
                        TD.ctx.beginPath();
                        TD.ctx.fillStyle = "green";
                        TD.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
                        TD.ctx.fill();
                        TD.ctx.fillStyle = this.fontColor;
                        TD.ctx.textAlign = "center";
                        TD.ctx.font = "12px Comic Sans MS";
                        TD.ctx.fillText("Feuerrate (Stufe): " + this.firerate, this.x, this.y - this.size - 34)
                        TD.ctx.fillText("Reichweite: " + this.range, this.x, this.y - this.size - 21)
                        TD.ctx.fillText("Treffsicherheit: " + this.precision, this.x, this.y - this.size - 9)
                        TD.ctx.beginPath();
                        TD.ctx.strokeStyle = "black";
                        TD.ctx.fillStyle = "transparent";
                        TD.ctx.arc(this.x, this.y, this.range, 0, 2 * Math.PI);
                        TD.ctx.lineWidth = 0.5;
                        TD.ctx.stroke();
                        return;
                        }
                    if (this.type == "acid") {
                        TD.ctx.beginPath();
                        TD.ctx.fillStyle = "green";
                        TD.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
                        TD.ctx.fill();
                        TD.ctx.fillStyle = this.fontColor;
                        TD.ctx.textAlign = "center";
                        TD.ctx.font = "12px Comic Sans MS";
                        TD.ctx.fillText("Feuerrate (Stufe): " + this.firerate, this.x, this.y - this.size - 34)
                        TD.ctx.fillText("Reichweite: " + this.range, this.x, this.y - this.size - 21)
                        TD.ctx.fillText("Treffsicherheit: " + this.precision, this.x, this.y - this.size - 9)
                        TD.ctx.beginPath();
                        TD.ctx.strokeStyle = "black";
                        TD.ctx.fillStyle = "transparent";
                        TD.ctx.arc(this.x, this.y, this.range, 0, 2 * Math.PI);
                        TD.ctx.lineWidth = 0.5;
                        TD.ctx.stroke();
                        return;
                        }
                          
                // Other if statements here for other types of towers or objects
                if(this.type == "arrow"){
                    if (this.type == "arrow") {
                        if (this.rocket) {
                          // calculate the angle between the rocket and the enemy
                          var angle = Math.atan2(this.target_y - this.y, this.target_x - this.x);
                      
                          TD.ctx.save(); // save the current canvas state
                          TD.ctx.translate(this.x, this.y); // move to the rocket's position
                          TD.ctx.rotate(angle + Math.PI / 2); // rotate to face the enemy
                      
                          // draw the rocket
                          TD.ctx.beginPath();
                          TD.ctx.fillStyle = "yellow";
                          TD.ctx.moveTo(0, -this.size);
                          TD.ctx.lineTo(this.size, this.size);
                          TD.ctx.lineTo(-this.size, this.size);
                          TD.ctx.lineTo(0, -this.size);
                          TD.ctx.fill();
                      
                          TD.ctx.beginPath();
                          TD.ctx.fillStyle = "orange";
                          TD.ctx.moveTo(-this.size / 2, this.size);
                          TD.ctx.lineTo(0, this.size * 2);
                          TD.ctx.lineTo(this.size / 2, this.size);
                          TD.ctx.lineTo(-this.size / 2, this.size);
                          TD.ctx.fill();
                      
                          TD.ctx.restore(); // restore the canvas state
                        } else {
                          TD.ctx.beginPath();
                          TD.ctx.fillStyle = "yellow";
                          TD.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
                          TD.ctx.fill();
                        }
                        return;
                      }
                      
                      
                      
                     else {
                        TD.ctx.beginPath();
                        TD.ctx.fillStyle = "yellow";
                        TD.ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
                        TD.ctx.fill();
                    }
                    return;
                }
                
            }
        }

        this.findEnemy = function(){
            let list = [];
            if(this.type == "enemy"){
                if(this.type == 'arrow'){
                    return;
                }
                if(!this.armored){
                    return;
                }

                Object.values(TD.enemyList).forEach(array => {
                    array.forEach(element => {
                        if(element.type == 'enemy' || element.type == 'arrow'){
                            return
                        } else {
                            let disx = Math.abs(this.x - element.x);
                            let disy = Math.abs(this.y - element.y);
            
                            if(disx <= this.range && disy <= this.range){
                                list.push(element);
                            }
                        }
                    });
                  });
                return list;
            }

            for(t = 0; t <= TD.enemyList.enemys.length-1; t++){
                let e = TD.enemyList.enemys[t];

                let disx = Math.abs(this.x - e.x);
                let disy = Math.abs(this.y - e.y);

                if(disx <= this.range && disy <= this.range){
                    if(e.x >= 0){
                        list.push(e);
                    }
                } else if(this.range == (undefined || null)){
                    if(e.x >= 0){
                        list.push(e);
                    }
                }

                if(this.type == "sniper"){
                    if(this.shootBevor){
                        list.push(e);
                    } else if(TD.enemyList.enemys[t].x >= 0){
                        list.push(e);
                    }
                }
            }
            return list;
        };

        this.shootEnemy = function(){
            if(this.armored){
                let list = this.findEnemy();
                if(list.length == 0){
                    return;
                }
    
                let r = Math.floor(Math.random()*list.length);
    
                this.fire_delay_now --;
                if(this.fire_delay_now <= 0){
                let arrow = new TD.CreateObj("arrow", this.x, this.y);
                arrow.target_x = list[r].x;
                arrow.target_y = list[r].y;
                arrow.fromEnemy = true;
                arrow.power = this.life/2;
                if(arrow.power < 1){
                    arrow.power = 1;
                }
    
                TD.enemyList.arrows.push(arrow);
    
                this.fire_delay_now = this.fire_delay_begin - this.firerate;
                }
                return;
            }
        }

        this.shootTower = function(){

            let list = this.findEnemy();

            if(list.length == 0){
                return;
            }

            let r = Math.floor(Math.random()*list.length);

            this.fire_delay_now --;
            if(this.fire_delay_now <= 0){
            let arrow = new TD.CreateObj("arrow", this.x, this.y);
            arrow.target_x = list[r].x + (list[r].dir_x * this.precision*10);
            arrow.target_y = list[r].y + (list[r].dir_y * this.precision*10);
            arrow.power = this.power;

            TD.enemyList.arrows.push(arrow);

            this.fire_delay_now = this.fire_delay_begin - this.firerate;
            }
            return;
        }
        this.shootBomber = function(){
            let list = this.findEnemy();
            if(list.length == 0){
                return;
            }
            this.fire_delay_now --;
            if(this.fire_delay_now <= 0){
            animateBomb(list, this);
            this.fire_delay_now = this.fire_delay_begin - this.firerate;
            }
            return;
        }
        this.shootA = function(){
            let list = this.findEnemy();
            if(list.length == 0){
                return;
            }
            let r = Math.floor(Math.random()*list.length);
            this.fire_delay_now --;
            if(this.fire_delay_now <= 0){
                let arrow = new TD.CreateObj("arrow", this.x, this.y);
                let distance = Math.sqrt(Math.pow(list[r].x - this.x, 2) + Math.pow(list[r].y - this.y, 2));
                let angle = Math.atan2(list[r].y - this.y, list[r].x - this.x);
                arrow.target_x = this.x + (distance * list[r].vel_x * Math.cos(angle));
                arrow.target_y = this.y + (distance * list[r].vel_y * Math.sin(angle));
                arrow.power = this.power;
                arrow.size += 2;
                arrow.lifetime -= 10;
                TD.enemyList.arrows.push(arrow);
                this.fire_delay_now = this.fire_delay_begin - this.firerate;
            }
            return;
        }
        this.shootFreezer = function(){
            let list = this.findEnemy();
            if(list.length == 0){
                return;
            }
            let r = Math.floor(Math.random()*list.length); 
            this.fire_delay_now --;
            if(this.fire_delay_now <= 0){
                list[r].speed -= this.freeze;
                this.fire_delay_now = this.fire_delay_begin - this.firerate;
            }
            return;
        }
        this.shootmine = function(){
            let list = this.findEnemy();

            if(list.length == 0){
                return;
            }

            let r = Math.floor(Math.random()*list.length);

            this.fire_delay_now --;
            if(this.fire_delay_now <= 0){
            let arrow = new TD.CreateObj("arrow", this.x, this.y);
            arrow.target_x = list[r].x + (list[r].dir_x * this.precision*10);
            arrow.target_y = list[r].y + (list[r].dir_y * this.precision*10);
            arrow.power = this.power;

            TD.enemyList.arrows.push(arrow);

            this.fire_delay_now = this.fire_delay_begin - this.firerate;
            }
            return;
        };
        this.decoy = function(){};
        this.radar = function(){};
        this.mine = function(){};
        this.shootSentry = function(){
            let list = this.findEnemy();

            if(list.length == 0){
                return;
            }

            let r = Math.floor(Math.random()*list.length);

            this.fire_delay_now --;
            if(this.fire_delay_now <= 0){
            let arrow = new TD.CreateObj("arrow", this.x, this.y);
            arrow.target_x = list[r].x + (list[r].dir_x * this.precision*10);
            arrow.target_y = list[r].y + (list[r].dir_y * this.precision*10);
            arrow.power = this.power;

            TD.enemyList.arrows.push(arrow);

            this.fire_delay_now = this.fire_delay_begin - this.firerate;
            }
            return;
        };
        this.acid = function(){
            let list = this.findEnemy();

            if(list.length == 0){
                return;
            }

            let r = Math.floor(Math.random()*list.length);

            this.fire_delay_now --;
            if(this.fire_delay_now <= 0){
            let arrow = new TD.CreateObj("arrow", this.x, this.y);
            arrow.target_x = list[r].x + (list[r].dir_x * this.precision*10);
            arrow.target_y = list[r].y + (list[r].dir_y * this.precision*10);
            arrow.power = this.power;

            TD.enemyList.arrows.push(arrow);

            this.fire_delay_now = this.fire_delay_begin - this.firerate;
            }
            return;
        };
        this.toxic = function(){
            let list = this.findEnemy();

            if(list.length == 0){
                return;
            }

            let r = Math.floor(Math.random()*list.length);

            this.fire_delay_now --;
            if(this.fire_delay_now == 0){
            let arrow = new TD.CreateObj("arrow", this.x, this.y);
            arrow.target_x = list[r].x + (list[r].dir_x * this.precision*10);
            arrow.target_y = list[r].y + (list[r].dir_y * this.precision*10);
            arrow.power = this.power;

            TD.enemyList.arrows.push(arrow);

            this.fire_delay_now = this.fire_delay_begin - this.firerate;
            }
            return;
        };
        this.shootElectric = function(){
            let list = this.findEnemy();

            if(list.length == 0){
                return;
            }

            let r = Math.floor(Math.random()*list.length);

            this.fire_delay_now --;
            if(this.fire_delay_now <= 0){
            let arrow = new TD.CreateObj("arrow", this.x, this.y);
            arrow.target_x = list[r].x + (list[r].dir_x * this.precision*10);
            arrow.target_y = list[r].y + (list[r].dir_y * this.precision*10);
            arrow.power = this.power;

            TD.enemyList.arrows.push(arrow);

            this.fire_delay_now = this.fire_delay_begin - this.firerate;
            }
            return;
        };
        this.support = function(){
            let list = this.findEnemy();

            if(list.length == 0){
                return;
            }

            let r = Math.floor(Math.random()*list.length);

            this.fire_delay_now --;
            if(this.fire_delay_now <= 0){
            let arrow = new TD.CreateObj("arrow", this.x, this.y);
            arrow.target_x = list[r].x + (list[r].dir_x * this.precision*10);
            arrow.target_y = list[r].y + (list[r].dir_y * this.precision*10);
            arrow.power = this.power;

            TD.enemyList.arrows.push(arrow);

            this.fire_delay_now = this.fire_delay_begin - this.firerate;
            }
            return;
        };
        this.shootNuke = function(){
            let list = this.findEnemy();

            if(list.length == 0){
                return;
            }

            let r = Math.floor(Math.random()*list.length);

            this.fire_delay_now --;
            if(this.fire_delay_now <= 0){
            let arrow = new TD.CreateObj("arrow", this.x, this.y);
            arrow.target_x = list[r].x + (list[r].dir_x * this.precision*10);
            arrow.target_y = list[r].y + (list[r].dir_y * this.precision*15);
            arrow.power = this.power;
            arrow.size = this.rocketSize;
            arrow.speed = 3;
            arrow.rocket = true;

            TD.enemyList.arrows.push(arrow);

            this.fire_delay_now = this.fire_delay_begin - this.firerate;
            }
            return;
        };
        this.shootLaser = function(){
            let list = this.findEnemy();

            if(list.length == 0){
                return;
            }

            let r = Math.floor(Math.random()*list.length);

            this.fire_delay_now --;
            if(this.fire_delay_now <= 0){
            let arrow = new TD.CreateObj("arrow", this.x, this.y);
            arrow.target_x = list[r].x + (list[r].dir_x * this.precision*10);
            arrow.target_y = list[r].y + (list[r].dir_y * this.precision*10);
            arrow.power = this.power;

            TD.enemyList.arrows.push(arrow);

            this.fire_delay_now = this.fire_delay_begin - this.firerate;
            }
            return;
        };
        this.heal = function(){};
    }
}

let k = 0;
window.addEventListener("keydown", e => {
    if(e.key === " "){
        if(k === 0){
            
            k = 1;
            TD.init();
            TD.ctx.clearRect(0, 0, TD.canvas.width, TD.canvas.height);
            document.getElementById("start").style.display = "none";
            document.getElementById("pause").style.display = "none";

        }}
});

setTimeout(()=>{
    setInterval(()=>{
        document.getElementById("stone").innerText = TD.player.stone;
        document.getElementById("life").innerText = TD.player.life;
        document.getElementById("wave-number").innerText = TD.game.wave;
        document.getElementById("enemy-level").innerText = TD.game.enemy_life;
    }, 10);
}, 100);

function container(){
    document.getElementById('tuerme').style.visibility = 'hidden';
}
//mousemove, dblclick
function animateBomb(list, tower) {
    let nearestEnemy;
    let nearestDistance = Infinity;
    for (let i = 0; i < list.length; i++) {
        const distance = Math.sqrt(Math.pow(list[i].x - tower.x, 2) + Math.pow(list[i].y - tower.y, 2));
        if (distance < nearestDistance) {
            nearestEnemy = list[i];
            nearestDistance = distance;
        }
    }
  
    let bomb = {
        x: tower.x,
        y: tower.y,
        targetX: nearestEnemy.x + nearestEnemy.vel_x,
        targetY: nearestEnemy.y + nearestEnemy.vel_y,
        xDiff: (nearestEnemy.x + nearestEnemy.vel_x) -tower.x,
        yDiff: (nearestEnemy.y + nearestEnemy.vel_y) -tower.y,
        dist: Math.sqrt(((nearestEnemy.x + nearestEnemy.vel_x) -tower.x) * ((nearestEnemy.x + nearestEnemy.vel_x) -tower.x) + ((nearestEnemy.y + nearestEnemy.vel_y) -tower.y) * ((nearestEnemy.y + nearestEnemy.vel_y) -tower.y)),
        xSpeed: ((nearestEnemy.x + nearestEnemy.vel_x) -tower.x) / Math.sqrt(((nearestEnemy.x + nearestEnemy.vel_x) -tower.x) * ((nearestEnemy.x + nearestEnemy.vel_x) -tower.x) + ((nearestEnemy.y + nearestEnemy.vel_y) -tower.y) * ((nearestEnemy.y + nearestEnemy.vel_y) -tower.y))*10,
        ySpeed: ((nearestEnemy.y + nearestEnemy.vel_y) -tower.y) / Math.sqrt(((nearestEnemy.x + nearestEnemy.vel_x) -tower.x) * ((nearestEnemy.x + nearestEnemy.vel_x) -tower.x) + ((nearestEnemy.y + nearestEnemy.vel_y) -tower.y) * ((nearestEnemy.y + nearestEnemy.vel_y) -tower.y))*10,
        lifetime: 0,
        explodet: false
    }
    
    let animationInterval = setInterval(() => {
        if(bomb.lifetime >= 10){
            if(!bomb.explodet){
                explode(nearestEnemy, tower.power, false, bomb);
                bomb.explodet = true;
                TD.ctx.clearRect(bomb.x-5, bomb.y-5, 10, 10);
            }
            return;
        }
        bomb.lifetime += 1;
        bomb.x += bomb.xSpeed;
        bomb.y += bomb.ySpeed;
        TD.ctx.beginPath();
        TD.ctx.arc(bomb.x, bomb.y, 5, 0, 2 * Math.PI);
        TD.ctx.fillStyle = "red";
        TD.ctx.fill();
        console.log(Math.sqrt(((nearestEnemy.x + nearestEnemy.vel_x) -tower.x) * ((nearestEnemy.x + nearestEnemy.vel_x) -tower.x) + ((nearestEnemy.y + nearestEnemy.vel_y) -tower.y) * ((nearestEnemy.y + nearestEnemy.vel_y) -tower.y)), bomb.explodet, !bomb.explodet);
            if(!bomb.explodet && Math.sqrt(((nearestEnemy.x + nearestEnemy.vel_x) -tower.x) * ((nearestEnemy.x + nearestEnemy.vel_x) -tower.x) + ((nearestEnemy.y + nearestEnemy.vel_y) -tower.y) * ((nearestEnemy.y + nearestEnemy.vel_y) -tower.y)) <= 70){
                explode(nearestEnemy, tower.power, tower.split, bomb);
                console.log(bomb.x, nearestEnemy.x, bomb.y, nearestEnemy.y, bomb.dist);
                bomb.explodet = true;
                TD.ctx.clearRect(bomb.x-5, bomb.y-5, 10, 10);
            }
        TD.ctx.clearRect(bomb.x-5, bomb.y-5, 10, 10);
    }, 50)
}
  
function explode(centerEnemy, power, split, bigBomb) {
    // Damage all enemies in the radius of 10 units
    for (let i = 0; i < TD.enemyList.enemys.length; i++) {
        if (Math.sqrt(Math.pow(TD.enemyList.enemys[i].x - centerEnemy.x, 2) + Math.pow(TD.enemyList.enemys[i].y - centerEnemy.y, 2)) <= 10) {
            TD.enemyList.enemys[i].life -= power;
        }
    }
    //Add beautiful visual effect
    TD.ctx.beginPath();
    TD.ctx.arc(centerEnemy.x, centerEnemy.y, 10, 0, 2 * Math.PI);
    TD.ctx.fillStyle = "orange";
    TD.ctx.fill();
    TD.ctx.stroke();
    //Check if the bomb is splitting
    if(split) {
        for(let i = 0; i < 3; i++) {
            let bomb = {
                x: bigBomb.x,
                y: bigBomb.y,
                lifetime: 0,
                explodet: false
            }
            
            let animationInterval = setInterval(() => {
                // if(bomb.lifetime >= 100){
                //     if(!bomb.explodet){
                //         explode(centerEnemy, power/2, false, false);
                //         clearInterval(animationInterval);
                //         return;
                //     }
                // }
                bomb.lifetime += 1;
                if(i == 0){
                    bomb.x += 0;
                    bomb.y += 0;
                } else if(i == 1){
                    bomb.x -= 0;
                    bomb.y -= 0;
                } else if(i == 2){
                    bomb.y += 0;
                }
                TD.ctx.beginPath();
                TD.ctx.arc(bomb.x, bomb.y, 5, 0, 2 * Math.PI);
                TD.ctx.fillStyle = "black";
                TD.ctx.fill();
                for(let j = 0; j < TD.enemyList.enemys.length; j++) {
                    if(bomb.x >= TD.enemyList.enemys[j].x - TD.enemyList.enemys[j].size && bomb.x <= TD.enemyList.enemys[j].x + TD.enemyList.enemys[j].size && bomb.y >= TD.enemyList.enemys[j].y - TD.enemyList.enemys[j].size && bomb.y <= TD.enemyList.enemys[j].y + TD.enemyList.enemys[j].size){
                        if(!bomb.explodet){
                            explode(centerEnemy, power/2, false, false);
                            clearInterval(animationInterval);
                            return;
                        }
                    }
                }
            }
            )}}}