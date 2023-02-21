// let tower_costs = {
//     damage: 100,
//     firerate: 100,
//     range: 80,
//     precision: 175,
//     new: 150
// }
// let bomber_costs = {
//     damage: 150,
//     firerate: 150,
//     range: 150,
//     precision: 200,
//     new: 350
// }
let towerUpgrades = [];
let bomberUpgrades = [];
let sniperUpgrades = [];
let freezeUpgrades = [];
let acidUpgrades = [];
let laserUpgrades = [];
let electricUpgrades = [];
let toxicUpgrades = [];
let sentryUpgrades = [];
let supportUpgrades = [];
let mineUpgrades = [];
let radarUpgrades = [];
let healUpgrades = [];
let decoyUpgrades = [];
let nukeUpgrades = [];
let goldmineUpgrades = [];

let push = {
    index: 0,
    one: 0,
    two: 0,
    three: 0
}
towerUpgrades.push(push);
let coordinates = [];
let c_push = {
    x: 200,
    y: 135
}
coordinates.push(c_push);

function upgrade(type, n){
    //Insg. 10 Upgrades /Abwehreinheit möglich
    //Zb:
    //5
    //3
    //2
    //Ist jedes Feld (1-3) 2x Geupgradet
    //2 Felder auf Stufe 3 Geupgrade
    //3. Feld (welches nicht auf Stufe 3 ist) kann nicht weiter geupgradet werden.
    //1 Feld auf Stufe 4:
    //Beide anderen Felder sind Maxed (1x Stufe 2, 1x Stufe 3) TODO
    
    if(type == "tower"){
        if(n == 1){
            if(towerUpgrades[lastTowerIndex].two >= 2 && towerUpgrades[lastTowerIndex].three >= 2 && towerUpgrades[lastTowerIndex].one == 2){
                document.getElementById(`tower_1_${lastTowerIndex}`).innerText = 'Max Out';
                document.getElementById(`tower_a_${lastTowerIndex}`).innerText = '';
            } else
            if(towerUpgrades[lastTowerIndex].one == 0){
                if(TD.player.stone >= 100){
                    TD.enemyList.towers[lastTowerIndex].power += 3;
                    document.getElementById(`tower_1_${lastTowerIndex}`).innerText = 'NOCH mehr Schaden';
                    document.getElementById(`tower_a_${lastTowerIndex}`).innerText = '150';
                    towerUpgrades[lastTowerIndex].one++;
                    TD.player.stone -= 100;
                }
            } else if(towerUpgrades[lastTowerIndex].one == 1){
                if(TD.player.stone >= 150){
                        TD.enemyList.towers[lastTowerIndex].power += 3;
                        document.getElementById(`tower_1_${lastTowerIndex}`).innerText = 'Starke Treffer';
                        document.getElementById(`tower_a_${lastTowerIndex}`).innerText = '200';
                        TD.player.stone -= 150;
                        towerUpgrades[lastTowerIndex].one++;
                        if(towerUpgrades[lastTowerIndex].one >= 2 && towerUpgrades[lastTowerIndex].three >= 2 && towerUpgrades[lastTowerIndex].two == 2){
                            document.getElementById(`tower_2_${lastTowerIndex}`).innerText = 'Max Out';
                            document.getElementById(`tower_b_${lastTowerIndex}`).innerText = '';
                        } else if(towerUpgrades[lastTowerIndex].two >= 2 && towerUpgrades[lastTowerIndex].one >= 2 && towerUpgrades[lastTowerIndex].three == 2){
                            document.getElementById(`tower_3_${lastTowerIndex}`).innerText = 'Max Out';
                            document.getElementById(`tower_c_${lastTowerIndex}`).innerText = '';
                        }
                }
            } else if(towerUpgrades[lastTowerIndex].one == 2){
                if(TD.player.stone >= 200){
                    TD.enemyList.towers[lastTowerIndex].precision += 2;
                    document.getElementById(`tower_1_${lastTowerIndex}`).innerText = '+8 zusätzlichen Schaden';
                    document.getElementById(`tower_a_${lastTowerIndex}`).innerText = '400';
                    towerUpgrades[lastTowerIndex].one++;
                    TD.player.stone -= 200;
                }
            } else if(towerUpgrades[lastTowerIndex].one == 3){
                if(TD.player.stone >= 400){
                    if(towerUpgrades[lastTowerIndex].three < 3 && towerUpgrades[lastTowerIndex].two < 3){

                    }
                    TD.enemyList.towers[lastTowerIndex].power += 8;
                    document.getElementById(`tower_1_${lastTowerIndex}`).innerText = 'Schießt extrem Schnell';
                    document.getElementById(`tower_a_${lastTowerIndex}`).innerText = '500';
                    towerUpgrades[lastTowerIndex].one++;
                    TD.player.stone -= 400;
                }
            } else if(towerUpgrades[lastTowerIndex].one == 4){
                if(TD.player.stone >= 500){
                    TD.enemyList.towers[lastTowerIndex].firerate += 5;
                    document.getElementById(`tower_1_${lastTowerIndex}`).innerText = 'Max Out';
                    document.getElementById(`tower_a_${lastTowerIndex}`).innerText = '';
                    towerUpgrades[lastTowerIndex].one++;
                    TD.player.stone -= 500;
                }
            }
            //Schaden 100
            //Noch mehr Schaden 150
            //Trefferrate 200                       //Gesamt: 1350
            //+8 Extraschaden an Gegner 400
            //Greift sehr schnell an 500
        } else if(n == 2){
            if(towerUpgrades[lastTowerIndex].one >= 2 && towerUpgrades[lastTowerIndex].three >= 2 && towerUpgrades[lastTowerIndex].two == 2){
                document.getElementById(`tower_2_${lastTowerIndex}`).innerText = 'Max Out';
                document.getElementById(`tower_b_${lastTowerIndex}`).innerText = '';
            } else 
        if(towerUpgrades[lastTowerIndex].two == 0){
            if(TD.player.stone >= 100){
                TD.enemyList.towers[lastTowerIndex].firerate += 3;
                document.getElementById(`tower_2_${lastTowerIndex}`).innerText = 'Trifft noch besser';
                document.getElementById(`tower_b_${lastTowerIndex}`).innerText = '200';
                towerUpgrades[lastTowerIndex].two++;
                TD.player.stone -= 100;
            }
        } else if(towerUpgrades[lastTowerIndex].two == 1){
            if(TD.player.stone >= 200){
                    TD.enemyList.towers[lastTowerIndex].precision += 2;
                    document.getElementById(`tower_2_${lastTowerIndex}`).innerText = 'Extreme Reichweite!';
                    document.getElementById(`tower_b_${lastTowerIndex}`).innerText = '250';
                    TD.player.stone -= 200;
                    towerUpgrades[lastTowerIndex].two++;
                    if(towerUpgrades[lastTowerIndex].two >= 2 && towerUpgrades[lastTowerIndex].three >= 2 && towerUpgrades[lastTowerIndex].one == 2){
                        document.getElementById(`tower_1_${lastTowerIndex}`).innerText = 'Max Out';
                        document.getElementById(`tower_a_${lastTowerIndex}`).innerText = '';
                    } else if(towerUpgrades[lastTowerIndex].two >= 2 && towerUpgrades[lastTowerIndex].one >= 2 && towerUpgrades[lastTowerIndex].three == 2){
                        document.getElementById(`tower_3_${lastTowerIndex}`).innerText = 'Max Out';
                        document.getElementById(`tower_c_${lastTowerIndex}`).innerText = '';
                    }
            }
        } else if(towerUpgrades[lastTowerIndex].two == 2){
            if(TD.player.stone >= 250){
                TD.enemyList.towers[lastTowerIndex].range += 30;
                document.getElementById(`tower_2_${lastTowerIndex}`).innerText = '+10 zusätzlichen Schaden an Bossen';
                document.getElementById(`tower_b_${lastTowerIndex}`).innerText = '400';
                towerUpgrades[lastTowerIndex].two++;
                TD.player.stone -= 250;
            }
        } else if(towerUpgrades[lastTowerIndex].two == 3){
            if(TD.player.stone >= 400){
                TD.enemyList.towers[lastTowerIndex].bossdmg += 10;
                document.getElementById(`tower_2_${lastTowerIndex}`).innerText = 'Schneller als das Auge';
                document.getElementById(`tower_b_${lastTowerIndex}`).innerText = '500';
                towerUpgrades[lastTowerIndex].two++;
                TD.player.stone -= 400;
            }
        } else if(towerUpgrades[lastTowerIndex].two == 4){
            if(TD.player.stone >= 600){
                TD.enemyList.towers[lastTowerIndex].firerate += 5;
                document.getElementById(`tower_2_${lastTowerIndex}`).innerText = 'Max Out';
                document.getElementById(`tower_b_${lastTowerIndex}`).innerText = '';
                towerUpgrades[lastTowerIndex].two++;
                TD.player.stone -= 600;
            }
        }
        //Feuerrate 100
        //Trefferrate 200
        //Extrem Hohe Reichweite 250            //Gesamt: 1550
        //+10 Extraschaden an Bossen 400
        //Schneller als das Auge 600
        } else if(n == 3){
            if(towerUpgrades[lastTowerIndex].two >= 2 && towerUpgrades[lastTowerIndex].one >= 2 && towerUpgrades[lastTowerIndex].three == 2){
                document.getElementById(`tower_3_${lastTowerIndex}`).innerText = 'Max Out';
                document.getElementById(`tower_c_${lastTowerIndex}`).innerText = '';
            } else 
            if(towerUpgrades[lastTowerIndex].three == 0){
                if(TD.player.stone >= 80){
                    TD.enemyList.towers[lastTowerIndex].range += 30;
                    document.getElementById(`tower_3_${lastTowerIndex}`).innerText = 'Schaden erhöhen';
                    document.getElementById(`tower_c_${lastTowerIndex}`).innerText = '300';
                    towerUpgrades[lastTowerIndex].three++;
                    TD.player.stone -= 80;
                }
            } else if(towerUpgrades[lastTowerIndex].three == 1){
                if(TD.player.stone >= 300){
                        TD.enemyList.towers[lastTowerIndex].power += 5;
                        document.getElementById(`tower_3_${lastTowerIndex}`).innerText = 'Extreme Schussgeschwindigkeit!';
                        document.getElementById(`tower_c_${lastTowerIndex}`).innerText = '150';
                        TD.player.stone -= 300;
                        towerUpgrades[lastTowerIndex].three++;
                        if(towerUpgrades[lastTowerIndex].two >= 2 && towerUpgrades[lastTowerIndex].three >= 2 && towerUpgrades[lastTowerIndex].one == 2){
                            document.getElementById(`tower_1_${lastTowerIndex}`).innerText = 'Max Out';
                            document.getElementById(`tower_a_${lastTowerIndex}`).innerText = '';
                        } else if(towerUpgrades[lastTowerIndex].one >= 2 && towerUpgrades[lastTowerIndex].three >= 2 && towerUpgrades[lastTowerIndex].two == 2){
                            document.getElementById(`tower_2_${lastTowerIndex}`).innerText = 'Max Out';
                            document.getElementById(`tower_b_${lastTowerIndex}`).innerText = '';
                        }
                }
            } else if(towerUpgrades[lastTowerIndex].three == 2){
                if(TD.player.stone >= 150){
                    TD.enemyList.towers[lastTowerIndex].firerate += 3;
                    document.getElementById(`tower_3_${lastTowerIndex}`).innerText = 'Trifft nun noch besser!';
                    document.getElementById(`tower_c_${lastTowerIndex}`).innerText = '200';
                    towerUpgrades[lastTowerIndex].three++;
                    TD.player.stone -= 150;
                }
            } else if(towerUpgrades[lastTowerIndex].three == 3){
                if(TD.player.stone >= 200){
                    TD.enemyList.towers[lastTowerIndex].precision += 2;
                    document.getElementById(`tower_3_${lastTowerIndex}`).innerText = 'Senkt die Spawnrate gepanzerter Gegner um 5%';
                    document.getElementById(`tower_c_${lastTowerIndex}`).innerText = '700';
                    towerUpgrades[lastTowerIndex].three++;
                    TD.player.stone -= 200;
                }
            } else if(towerUpgrades[lastTowerIndex].three == 4){
                if(TD.player.stone >= 700){
                    // TD.enemyList.towers[lastTowerIndex].firerate += 5; TODO
                    document.getElementById(`tower_3_${lastTowerIndex}`).innerText = 'Max Out';
                    document.getElementById(`tower_c_${lastTowerIndex}`).innerText = '';
                    towerUpgrades[lastTowerIndex].three++;
                    TD.player.stone -= 700;
                }
            }
            //Reichweite 80
            //Schaden 300
            //Feuerrate 150                         //Gesamt: 1430
            //Trefferrate 200
            //Senkt die Wahrscheinlichkeit/Spawnrate auf Gepanzerte Gegner um 5% 700
        }
    } else if(type == "bomber"){
        
        if(bomberUpgrades[lastBomberIndex].two >= 2 && bomberUpgrades[lastBomberIndex].three >= 2 && bomberUpgrades[lastBomberIndex].one == 2){
            document.getElementById(`bomber_1_${lastBomberIndex}`).innerText = 'Max Out';
            document.getElementById(`bomber_a_${lastBomberIndex}`).innerText = '';
        } else

        if(n == 1){
            if(bomberUpgrades[lastBomberIndex].one == 0){
                if(TD.player.stone >= 100){
                    TD.enemyList.bombers[lastBomberIndex].power += 3;
                    document.getElementById(`bomber_1_${lastBomberIndex}`).innerText = 'Nicht getroffene Schüsse werden zu Tretminen';
                    document.getElementById(`bomber_a_${lastBomberIndex}`).innerText = '200';
                    bomberUpgrades[lastBomberIndex].one++;
                    TD.player.stone -= 100;
                }
            } else if(bomberUpgrades[lastBomberIndex].one == 1){
                if(TD.player.stone >= 200){
                        // TD.enemyList.towers[lastBomberIndex].power += 3; TODO
                        document.getElementById(`bomber_1_${lastBomberIndex}`).innerText = 'Noch mehr Schaden';
                        document.getElementById(`bomber_a_${lastBomberIndex}`).innerText = '250';
                        TD.player.stone -= 200;
                        bomberUpgrades[lastBomberIndex].one++;
                        if(bomberUpgrades[lastBomberIndex].one >= 2 && bomberUpgrades[lastBomberIndex].three >= 2 && bomberUpgrades[lastBomberIndex].two == 2){
                            document.getElementById(`bomber_2_${lastBomberIndex}`).innerText = 'Max Out';
                            document.getElementById(`bomber_b_${lastBomberIndex}`).innerText = '';
                        } else if(bomberUpgrades[lastBomberIndex].two >= 2 && bomberUpgrades[lastBomberIndex].one >= 2 && bomberUpgrades[lastBomberIndex].three == 2){
                            document.getElementById(`bomber_3_${lastBomberIndex}`).innerText = 'Max Out';
                            document.getElementById(`bomber_c_${lastBomberIndex}`).innerText = '';
                        }
                }
            } else if(bomberUpgrades[lastBomberIndex].one == 2){
                if(TD.player.stone >= 250){
                    TD.enemyList.bombers[lastBomberIndex].power += 2;
                    document.getElementById(`bomber_1_${lastBomberIndex}`).innerText = 'Schnelle Bomben';
                    document.getElementById(`bomber_a_${lastBomberIndex}`).innerText = '300';
                    bomberUpgrades[lastBomberIndex].one++;
                    TD.player.stone -= 250;
                }
            } else if(bomberUpgrades[lastBomberIndex].one == 3){
                if(TD.player.stone >= 300){
                    TD.enemyList.bombers[lastBomberIndex].firerate += 12;
                    document.getElementById(`bomber_1_${lastBomberIndex}`).innerText = 'Verlangsamt Gegner und Bosse';
                    document.getElementById(`bomber_a_${lastBomberIndex}`).innerText = '500';
                    bomberUpgrades[lastBomberIndex].one++;
                    TD.player.stone -= 300;
                }
            } else if(bomberUpgrades[lastBomberIndex].one == 4){
                if(TD.player.stone >= 500){
                    // TD.enemyList.bombers[lastBomberIndex].firerate += 5; TODO
                    document.getElementById(`bomber_1_${lastBomberIndex}`).innerText = 'Max Out';
                    document.getElementById(`bomber_a_${lastBomberIndex}`).innerText = '';
                    bomberUpgrades[lastBomberIndex].one++;
                    TD.player.stone -= 500;
                }
            }
                //Schaden 100
                //Nicht getroffene Schüsse werden zu Tretminen 200
                //Noch mehr Schaden 250                 //Gesamt: 1350
                //Feuerrate 300
                //Verlangsamt Gegner und Bosse 500
        }
        else if(n == 2){

            if(bomberUpgrades[lastBomberIndex].one >= 2 && bomberUpgrades[lastBomberIndex].three >= 2 && bomberUpgrades[lastBomberIndex].two == 2){
                document.getElementById(`bomber_2_${lastBomberIndex}`).innerText = 'Max Out';
                document.getElementById(`bomber_b_${lastBomberIndex}`).innerText = '';
            } else

        if(bomberUpgrades[lastBomberIndex].two == 0){
            if(TD.player.stone >= 100){
                TD.enemyList.bombers[lastBomberIndex].firerate += 8;
                document.getElementById(`bomber_2_${lastBomberIndex}`).innerText = 'Schnelle Bomben';
                document.getElementById(`bomber_b_${lastBomberIndex}`).innerText = '150';
                bomberUpgrades[lastBomberIndex].two++;
                TD.player.stone -= 100;
            }
        } else if(bomberUpgrades[lastBomberIndex].two == 1){
            if(TD.player.stone >= 150){
                    TD.enemyList.bombers[lastBomberIndex].firerate += 8;
                    document.getElementById(`bomber_2_${lastBomberIndex}`).innerText = 'Schneller, Schneller, Schneller!';
                    document.getElementById(`bomber_b_${lastBomberIndex}`).innerText = '200';
                    TD.player.stone -= 150;
                    bomberUpgrades[lastBomberIndex].two++;
                    if(bomberUpgrades[lastBomberIndex].two >= 2 && bomberUpgrades[lastBomberIndex].three >= 2 && bomberUpgrades[lastBomberIndex].one == 2){
                        document.getElementById(`bomber_1_${lastBomberIndex}`).innerText = 'Max Out';
                        document.getElementById(`bomber_a_${lastBomberIndex}`).innerText = '';
                    } else if(bomberUpgrades[lastBomberIndex].two >= 2 && bomberUpgrades[lastBomberIndex].one >= 2 && bomberUpgrades[lastBomberIndex].three == 2){
                        document.getElementById(`bomber_3_${lastBomberIndex}`).innerText = 'Max Out';
                        document.getElementById(`bomber_c_${lastBomberIndex}`).innerText = '';
                    }
            }
        } else if(bomberUpgrades[lastBomberIndex].two == 2){
            if(TD.player.stone >= 200){
                TD.enemyList.bombers[lastBomberIndex].firerate += 8;
                document.getElementById(`bomber_2_${lastBomberIndex}`).innerText = 'Extremer Schaden!';
                document.getElementById(`bomber_b_${lastBomberIndex}`).innerText = '300';
                bomberUpgrades[lastBomberIndex].two++;
                TD.player.stone -= 200;
            }
        } else if(bomberUpgrades[lastBomberIndex].two == 3){
            if(TD.player.stone >= 300){
                TD.enemyList.bombers[lastBomberIndex].power += 10; 
                document.getElementById(`bomber_2_${lastBomberIndex}`).innerText = '+10 Schaden an Bossen';
                document.getElementById(`bomber_b_${lastBomberIndex}`).innerText = '700';
                bomberUpgrades[lastBomberIndex].two++;
                TD.player.stone -= 300;
            }
        } else if(bomberUpgrades[lastBomberIndex].two == 4){
            if(TD.player.stone >= 700){
                TD.enemyList.bombers[lastBomberIndex].bossdmg += 10; //TODO nur an bossen
                document.getElementById(`bomber_2_${lastBomberIndex}`).innerText = 'Max Out';
                document.getElementById(`bomber_b_${lastBomberIndex}`).innerText = '';
                bomberUpgrades[lastBomberIndex].two++;
                TD.player.stone -= 700;
            }
        }
            //Feuerrate 100
            //Feuerrate 150
            //Feuerrate 200                         //Gesamt: 1550
            //Unvorstellbarer Schaden! 300
            //+10 Schaden an Bossen 700
        } else if(n == 3){

            if(bomberUpgrades[lastBomberIndex].two >= 2 && bomberUpgrades[lastBomberIndex].one >= 2 && bomberUpgrades[lastBomberIndex].three == 2){
                document.getElementById(`bomber_3_${lastBomberIndex}`).innerText = 'Max Out';
                document.getElementById(`bomber_c_${lastBomberIndex}`).innerText = '';
            } else 

            if(bomberUpgrades[lastBomberIndex].three == 0){
                if(TD.player.stone >= 100){
                    TD.enemyList.bombers[lastBomberIndex].range += 30;
                    document.getElementById(`bomber_3_${lastBomberIndex}`).innerText = 'Trefferrate';
                    document.getElementById(`bomber_c_${lastBomberIndex}`).innerText = '200';
                    bomberUpgrades[lastBomberIndex].three++;
                    TD.player.stone -= 100;
                }
            } else if(bomberUpgrades[lastBomberIndex].three == 1){
                if(TD.player.stone >= 200){
                        TD.enemyList.bombers[lastBomberIndex].precision += 1;
                        document.getElementById(`bomber_3_${lastBomberIndex}`).innerText = 'Schnelle Bomben';
                        document.getElementById(`bomber_c_${lastBomberIndex}`).innerText = '200';
                        TD.player.stone -= 200;
                        bomberUpgrades[lastBomberIndex].three++;
                        if(bomberUpgrades[lastBomberIndex].two >= 2 && bomberUpgrades[lastBomberIndex].three >= 2 && bomberUpgrades[lastBomberIndex].one == 2){
                            document.getElementById(`bomber_1_${lastBomberIndex}`).innerText = 'Max Out';
                            document.getElementById(`bomber_a_${lastBomberIndex}`).innerText = '';
                        } else if(bomberUpgrades[lastBomberIndex].one >= 2 && bomberUpgrades[lastBomberIndex].three >= 2 && bomberUpgrades[lastBomberIndex].two == 2){
                            document.getElementById(`bomber_2_${lastBomberIndex}`).innerText = 'Max Out';
                            document.getElementById(`bomber_b_${lastBomberIndex}`).innerText = '';
                        }
                }
            } else if(bomberUpgrades[lastBomberIndex].three == 2){
                if(TD.player.stone >= 200){
                    TD.enemyList.bombers[lastBomberIndex].firerate += 8;
                    document.getElementById(`bomber_3_${lastBomberIndex}`).innerText = 'Reichweite erhöhen';
                    document.getElementById(`bomber_c_${lastBomberIndex}`).innerText = '300';
                    bomberUpgrades[lastBomberIndex].three++;
                    TD.player.stone -= 200;
                }
            } else if(bomberUpgrades[lastBomberIndex].three == 3){
                if(TD.player.stone >= 300){
                    TD.enemyList.bombers[lastBomberIndex].range += 30;
                    document.getElementById(`bomber_3_${lastBomberIndex}`).innerText = 'Schneller, höher, weiter...';
                    document.getElementById(`bomber_c_${lastBomberIndex}`).innerText = '500';
                    bomberUpgrades[lastBomberIndex].three++;
                    TD.player.stone -= 300;
                }
            } else if(bomberUpgrades[lastBomberIndex].three == 4){
                if(TD.player.stone >= 500){
                    TD.enemyList.bombers[lastBomberIndex].firerate += 8;
                    TD.enemyList.bombers[lastBomberIndex].range += 20;
                    TD.enemyList.bombers[lastBomberIndex].power += 5;
                    document.getElementById(`bomber_3_${lastBomberIndex}`).innerText = 'Max Out';
                    document.getElementById(`bomber_c_${lastBomberIndex}`).innerText = '';
                    bomberUpgrades[lastBomberIndex].three++;
                    TD.player.stone -= 500;
                }
            }
            //Reichweite 100
            //Trefferrate 200
            //Feuerrate 200                         //Gesamt: 1300
            //Reichweite 300
            //Von allem ein bisschen... 500
        }
    } else if(type == "sniper"){
        if(n == 1){
            if(sniperUpgrades[lastSniperIndex].one == 0){
                if(TD.player.stone >= 150){
                    TD.enemyList.sniper[lastSniperIndex].power += 3;
                    document.getElementById(`sniper_1_${lastSniperIndex}`).innerText = 'Noch mehr Schaden';
                    document.getElementById(`sniper_a_${lastSniperIndex}`).innerText = '200';
                    sniperUpgrades[lastSniperIndex].one++;
                    TD.player.stone -= 150;
                }
            } else if(sniperUpgrades[lastSniperIndex].one == 1){
                if(TD.player.stone >= 200){
                        TD.enemyList.sniper[lastSniperIndex].power += 5;
                        document.getElementById(`sniper_1_${lastSniperIndex}`).innerText = 'Schaden, Schaden, Schaden!';
                        document.getElementById(`sniper_a_${lastSniperIndex}`).innerText = '350';
                        TD.player.stone -= 200;
                        sniperUpgrades[lastSniperIndex].one++;
                        if(sniperUpgrades[lastSniperIndex].one >= 2 && sniperUpgrades[lastSniperIndex].three >= 2 && sniperUpgrades[lastSniperIndex].two == 2){
                            document.getElementById(`sniper_2_${lastSniperIndex}`).innerText = 'Max Out';
                            document.getElementById(`sniper_b_${lastSniperIndex}`).innerText = '';
                        } else if(sniperUpgrades[lastSniperIndex].two >= 2 && sniperUpgrades[lastSniperIndex].one >= 2 && sniperUpgrades[lastSniperIndex].three == 2){
                            document.getElementById(`sniper_3_${lastSniperIndex}`).innerText = 'Max Out';
                            document.getElementById(`sniper_c_${lastSniperIndex}`).innerText = '';
                        }
                }
            } else if(sniperUpgrades[lastSniperIndex].one == 2){
                if(TD.player.stone >= 350){
                    TD.enemyList.sniper[lastSniperIndex].power += 5;
                    document.getElementById(`sniper_1_${lastSniperIndex}`).innerText = 'Macht an Bossen DOPPELTEN Schaden!';
                    document.getElementById(`sniper_a_${lastSniperIndex}`).innerText = '500';
                    sniperUpgrades[lastSniperIndex].one++;
                    TD.player.stone -= 350;
                }
            } else if(sniperUpgrades[lastSniperIndex].one == 3){
                if(TD.player.stone >= 500){
                    TD.enemyList.sniper[lastSniperIndex].bossdmg = TD.enemyList.sniper[lastSniperIndex].power; //TODO
                    document.getElementById(`sniper_1_${lastSniperIndex}`).innerText = 'Geringe Chance, Bosse zu Stunnen!';
                    document.getElementById(`sniper_a_${lastSniperIndex}`).innerText = '700';
                    sniperUpgrades[lastSniperIndex].one++;
                    TD.player.stone -= 500;
                }
            } else if(sniperUpgrades[lastSniperIndex].one == 4){
                if(TD.player.stone >= 700){
                    // TD.enemyList.bombers[lastBomberIndex].firerate += 5; TODO
                    document.getElementById(`sniper_1_${lastSniperIndex}`).innerText = 'Max Out';
                    document.getElementById(`sniper_a_${lastSniperIndex}`).innerText = '';
                    sniperUpgrades[lastSniperIndex].one++;
                    TD.player.stone -= 700;
                }
            }
            //Schaden 150
            //Schaden 200
            //Schaden, Schaden, Schaden! 350        //Gesamt: 1900
            //Macht bei Bossen doppelten Schaden! 500
            //Geringe Chance, Bosse zu Stunnen 700
        } else if(n == 2){
            
            if(sniperUpgrades[lastSniperIndex].one >= 2 && sniperUpgrades[lastSniperIndex].three >= 2 && sniperUpgrades[lastSniperIndex].two == 2){
                document.getElementById(`sniper_2_${lastSniperIndex}`).innerText = 'Max Out';
                document.getElementById(`sniper_b_${lastSniperIndex}`).innerText = '';
            } else

        if(sniperUpgrades[lastSniperIndex].two == 0){
            if(TD.player.stone >= 100){
                TD.enemyList.sniper[lastSniperIndex].firerate += 8;
                document.getElementById(`sniper_2_${lastSniperIndex}`).innerText = 'Schnelle Schüsse';
                document.getElementById(`sniper_b_${lastSniperIndex}`).innerText = '150';
                sniperUpgrades[lastSniperIndex].two++;
                TD.player.stone -= 100;
            }
        } else if(sniperUpgrades[lastSniperIndex].two == 1){
            if(TD.player.stone >= 150){
                    TD.enemyList.sniper[lastSniperIndex].firerate += 8;
                    document.getElementById(`sniper_2_${lastSniperIndex}`).innerText = 'Schneller, Schneller, Schneller!';
                    document.getElementById(`sniper_b_${lastSniperIndex}`).innerText = '200';
                    TD.player.stone -= 150;
                    sniperUpgrades[lastSniperIndex].two++;
                    if(sniperUpgrades[lastSniperIndex].two >= 2 && sniperUpgrades[lastSniperIndex].three >= 2 && sniperUpgrades[lastSniperIndex].one == 2){
                        document.getElementById(`sniper_1_${lastSniperIndex}`).innerText = 'Max Out';
                        document.getElementById(`sniper_a_${lastSniperIndex}`).innerText = '';
                    } else if(sniperUpgrades[lastSniperIndex].two >= 2 && sniperUpgrades[lastSniperIndex].one >= 2 && sniperUpgrades[lastSniperIndex].three == 2){
                        document.getElementById(`sniper_3_${lastSniperIndex}`).innerText = 'Max Out';
                        document.getElementById(`sniper_c_${lastSniperIndex}`).innerText = '';
                    }
            }
        } else if(sniperUpgrades[lastSniperIndex].two == 2){
            if(TD.player.stone >= 200){
                TD.enemyList.sniper[lastSniperIndex].firerate += 8;
                document.getElementById(`sniper_2_${lastSniperIndex}`).innerText = 'Die Mischung machts';
                document.getElementById(`sniper_b_${lastSniperIndex}`).innerText = '500';
                sniperUpgrades[lastSniperIndex].two++;
                TD.player.stone -= 200;
            }
        } else if(sniperUpgrades[lastSniperIndex].two == 3){
            if(TD.player.stone >= 300){
                TD.enemyList.sniper[lastSniperIndex].power += 8; 
                document.getElementById(`sniper_2_${lastSniperIndex}`).innerText = 'Bosse spawnen mit 10HP weniger!';
                document.getElementById(`sniper_b_${lastSniperIndex}`).innerText = '700';
                sniperUpgrades[lastSniperIndex].two++;
                TD.player.stone -= 300;
            }
        } else if(sniperUpgrades[lastSniperIndex].two == 4){
            if(TD.player.stone >= 700){
                // TD.enemyList.sniper[lastSniperIndex].power += 10; TODO
                document.getElementById(`sniper_2_${lastSniperIndex}`).innerText = 'Max Out';
                document.getElementById(`sniper_b_${lastSniperIndex}`).innerText = '';
                sniperUpgrades[lastSniperIndex].two++;
                TD.player.stone -= 700;
            }
        }
            //Feuerrate 100
            //Feuerrate 150
            //Feuerrate 200                         //Gesamt: 1650
            //Die Mischung machts... Schaden 500
            //Bosse spawnen mit 10HP weniger 700
        } else if(n == 3){
            if(sniperUpgrades[lastSniperIndex].two >= 2 && sniperUpgrades[lastSniperIndex].one >= 2 && sniperUpgrades[lastSniperIndex].three == 2){
                document.getElementById(`sniper_3_${lastSniperIndex}`).innerText = 'Max Out';
                document.getElementById(`sniper_c_${lastSniperIndex}`).innerText = '';
            } else 

            if(sniperUpgrades[lastSniperIndex].three == 0){
                if(TD.player.stone >= 350){
                    // TD.enemyList.sniper[lastSniperIndex].range += 30; TODO
                    document.getElementById(`sniper_3_${lastSniperIndex}`).innerText = 'Schneller und Stärker';
                    document.getElementById(`sniper_c_${lastSniperIndex}`).innerText = '200';
                    sniperUpgrades[lastSniperIndex].three++;
                    TD.player.stone -= 350;
                }
            } else if(sniperUpgrades[lastSniperIndex].three == 1){
                if(TD.player.stone >= 200){
                        TD.enemyList.sniper[lastSniperIndex].firerate += 8;
                        TD.enemyList.sniper[lastSniperIndex].power += 3;
                        document.getElementById(`sniper_3_${lastSniperIndex}`).innerText = 'Kann nun schon auf Gegner schießen, kurz bevor sie auf der Map erscheinen!';
                        document.getElementById(`sniper_c_${lastSniperIndex}`).innerText = '300';
                        TD.player.stone -= 200;
                        sniperUpgrades[lastSniperIndex].three++;
                        if(sniperUpgrades[lastSniperIndex].two >= 2 && sniperUpgrades[lastSniperIndex].three >= 2 && sniperUpgrades[lastSniperIndex].one == 2){
                            document.getElementById(`sniper_1_${lastSniperIndex}`).innerText = 'Max Out';
                            document.getElementById(`sniper_a_${lastSniperIndex}`).innerText = '';
                        } else if(sniperUpgrades[lastSniperIndex].one >= 2 && sniperUpgrades[lastSniperIndex].three >= 2 && sniperUpgrades[lastSniperIndex].two == 2){
                            document.getElementById(`sniper_2_${lastSniperIndex}`).innerText = 'Max Out';
                            document.getElementById(`sniper_b_${lastSniperIndex}`).innerText = '';
                        }
                }
            } else if(sniperUpgrades[lastSniperIndex].three == 2){
                if(TD.player.stone >= 300){
                    TD.enemyList.sniper[lastSniperIndex].shootBevor = true;
                    document.getElementById(`sniper_3_${lastSniperIndex}`).innerText = '+10 Zusatzschaden an Bossen und Gepanzerten Gegnern!';
                    document.getElementById(`sniper_c_${lastSniperIndex}`).innerText = '500';
                    sniperUpgrades[lastSniperIndex].three++;
                    TD.player.stone -= 300;
                }
            } else if(sniperUpgrades[lastSniperIndex].three == 3){
                if(TD.player.stone >= 500){
                    TD.enemyList.sniper[lastSniperIndex].bossdmg += 10;
                    TD.enemyList.sniper[lastSniperIndex].strongDmg += 10;
                    document.getElementById(`sniper_3_${lastSniperIndex}`).innerText = 'Extremer Schaden!';
                    document.getElementById(`sniper_c_${lastSniperIndex}`).innerText = '700';
                    sniperUpgrades[lastSniperIndex].three++;
                    TD.player.stone -= 500;
                }
            } else if(sniperUpgrades[lastSniperIndex].three == 4){
                if(TD.player.stone >= 700){
                    TD.enemyList.sniper[lastSniperIndex].power += 15;
                    document.getElementById(`sniper_3_${lastSniperIndex}`).innerText = 'Max Out';
                    document.getElementById(`sniper_c_${lastSniperIndex}`).innerText = '';
                    sniperUpgrades[lastSniperIndex].three++;
                    TD.player.stone -= 700;
                }
            }
            //Strong enemys 350
            //Feuerrate & Schaden 200               //Gesamt: 1900
            //Kann nun schon auf Gegner schießen, bevor sie auf der Map erscheinen! 300
            //+10 Zusatzschaden an Bossen und Gepanzerten Gegnern! 500
            //Schaden 700
        }
    } else if(type !== ('tower' || 'bomber' || 'sniper')){
        if(n == 1 && TD.player.stone >= 100){
            //Damage
            if(type == 'goldmine'){
                goldmineUpgrades[lastGoldmineIndex].one++;
                // TD.enemyList.goldmine[lastGoldmineIndex].power += 2;
                TD.player.stone -= 100; //TODO
                return
            } else if(type == 'nuke'){
                nukeUpgrades[lastNukeIndex].one++;
                TD.enemyList.nuke[lastNukeIndex].power += 2;
                TD.player.stone -= 100;
                return
            } else if(type == 'decoy'){
                decoyUpgrades[lastDecoyIndex].one++;
                TD.enemyList.decoy[lastDecoyIndex].power += 2;
                TD.player.stone -= 100; //TODO
                return
            } else if(type == 'radar'){
                radarUpgrades[lastRadarIndex].one++;
                TD.enemyList.radar[lastRadarIndex].power += 2;
                TD.player.stone -= 100; //TODO
                return
            } else if(type == 'mine'){
                mineUpgrades[lastMineIndex].one++;
                TD.enemyList.mine[lastMineIndex].power += 2;
                TD.player.stone -= 100;
                return
            } else if(type == 'support'){
                supportUpgrades[lastSupportIndex].one++;
                TD.enemyList.support[lastSupportIndex].power += 2;
                TD.player.stone -= 100;
                return
            } else if(type == 'sentry'){
                sentryUpgrades[lastSentryIndex].one++;
                TD.enemyList.sentry[lastSentryIndex].power += 2;
                TD.player.stone -= 100;
                return
            } else if(type == 'toxic'){
                toxicUpgrades[lastToxicIndex].one++;
                TD.enemyList.toxic[lastToxicIndex].power += 2;
                TD.player.stone -= 100;
                return
            } else if(type == 'electric'){
                electricUpgrades[lastElectricIndex].one++;
                TD.enemyList.electric[lastElectricIndex].power += 2;
                TD.player.stone -= 100;
                return
            } else if(type == 'laser'){
                laserUpgrades[lastLaserIndex].one++;
                TD.enemyList.laser[lastLaserIndex].power += 2;
                TD.player.stone -= 100;
                return
            } else if(type == 'acid'){
                acidUpgrades[lastAcidIndex].one++;
                TD.enemyList.acid[lastAcidIndex].power += 2;
                TD.player.stone -= 100;
                return
            } else if(type == 'heal'){
                healUpgrades[lastHealIndex].one++;
                TD.enemyList.heal[lastHealIndex].power += 2;
                TD.player.stone -= 100; //TODO
                return
            } else if(type == 'freeze'){
                freezeUpgrades[lastFreezeIndex].one++;
                TD.enemyList.freeze[lastFreezeIndex].power += 2;
                TD.player.stone -= 100;
                return
            }
        } else if(n == 2 && TD.player.stone >= 100){
            //Feuerrate
            if(type == 'goldmine'){
                goldmineUpgrades[lastGoldmineIndex].one++;
                // TD.enemyList.goldmine[lastGoldmineIndex].power += 2;
                TD.player.stone -= 100; //TODO
                return
            } else if(type == 'nuke'){
                nukeUpgrades[lastNukeIndex].one++;
                TD.enemyList.nuke[lastNukeIndex].firerate += 0.25;
                TD.player.stone -= 100;
                return
            } else if(type == 'decoy'){
                decoyUpgrades[lastDecoyIndex].one++;
                TD.enemyList.decoy[lastDecoyIndex].firerate += 0.5;
                TD.player.stone -= 100;
                return
            } else if(type == 'radar'){
                radarUpgrades[lastRadarIndex].one++;
                TD.enemyList.radar[lastRadarIndex].firerate += 0.5;
                TD.player.stone -= 100;
                return
            } else if(type == 'mine'){
                mineUpgrades[lastMineIndex].one++;
                TD.enemyList.mine[lastMineIndex].firerate += 0.5;
                TD.player.stone -= 100;
                return
            } else if(type == 'support'){
                supportUpgrades[lastSupportIndex].one++;
                TD.enemyList.support[lastSupportIndex].firerate += 0.5;
                TD.player.stone -= 100;
                return
            } else if(type == 'sentry'){
                sentryUpgrades[lastSentryIndex].one++;
                TD.enemyList.sentry[lastSentryIndex].firerate += 0.5;
                TD.player.stone -= 100;
                return
            } else if(type == 'toxic'){
                toxicUpgrades[lastToxicIndex].one++;
                TD.enemyList.toxic[lastToxicIndex].firerate += 0.5;
                TD.player.stone -= 100;
                return
            } else if(type == 'electric'){
                electricUpgrades[lastElectricIndex].one++;
                TD.enemyList.electric[lastElectricIndex].firerate += 0.5;
                TD.player.stone -= 100;
                return
            } else if(type == 'laser'){
                laserUpgrades[lastLaserIndex].one++;
                TD.enemyList.laser[lastLaserIndex].firerate += 0.5;
                TD.player.stone -= 100;
                return
            } else if(type == 'acid'){
                acidUpgrades[lastAcidIndex].one++;
                TD.enemyList.acid[lastAcidIndex].firerate += 0.5;
                TD.player.stone -= 100;
                return
            } else if(type == 'heal'){
                healUpgrades[lastHealIndex].one++;
                TD.enemyList.heal[lastHealIndex].firerate += 0.5;
                TD.player.stone -= 100;
                return
            } else if(type == 'freeze'){
                freezeUpgrades[lastFreezeIndex].one++;
                TD.enemyList.freeze[lastFreezeIndex].firerate += 0.5;
                TD.player.stone -= 100;
                return
            }
        } else if(n == 3 && TD.player.stone >= 80){
            //Range
            if(type == 'goldmine'){
                goldmineUpgrades[lastGoldmineIndex].one++;
                // TD.enemyList.goldmine[lastGoldmineIndex].power += 2;
                TD.player.stone -= 80; //TODO
                return
            } else if(type == 'nuke'){
                if(TD.player.stone >= 150){
                    nukeUpgrades[lastNukeIndex].one++;
                    TD.enemyList.nuke[lastNukeIndex].rocketSize += 0.19;
                    console.log(TD.enemyList.nuke[lastNukeIndex].rocketSize);
                    TD.player.stone -= 150;
                }
                return
            } else if(type == 'decoy'){
                decoyUpgrades[lastDecoyIndex].one++;
                TD.enemyList.decoy[lastDecoyIndex].radar += 2;
                TD.player.stone -= 80;
                return
            } else if(type == 'radar'){
                radarUpgrades[lastRadarIndex].one++;
                TD.enemyList.radar[lastRadarIndex].range += 2;
                TD.player.stone -= 80;
                return
            } else if(type == 'mine'){
                mineUpgrades[lastMineIndex].one++;
                TD.enemyList.mine[lastMineIndex].range += 2;
                TD.player.stone -= 80;
                return
            } else if(type == 'support'){
                supportUpgrades[lastSupportIndex].one++;
                TD.enemyList.support[lastSupportIndex].range += 2;
                TD.player.stone -= 80;
                return
            } else if(type == 'sentry'){
                sentryUpgrades[lastSentryIndex].one++;
                TD.enemyList.sentry[lastSentryIndex].range += 2;
                TD.player.stone -= 80;
                return
            } else if(type == 'toxic'){
                toxicUpgrades[lastToxicIndex].one++;
                TD.enemyList.toxic[lastToxicIndex].range += 2;
                TD.player.stone -= 80;
                return
            } else if(type == 'electric'){
                electricUpgrades[lastElectricIndex].one++;
                TD.enemyList.electric[lastElectricIndex].range += 2;
                TD.player.stone -= 80;
                return
            } else if(type == 'laser'){
                if(TD.player.stone >= 150){
                    laserUpgrades[lastLaserIndex].one++;
                    TD.enemyList.laser[lastLaserIndex].laserSize += 0.19;
                    TD.player.stone -= 150;
                }
                return
            } else if(type == 'acid'){
                acidUpgrades[lastAcidIndex].one++;
                TD.enemyList.acid[lastAcidIndex].range += 2;
                TD.player.stone -= 80;
                return
            } else if(type == 'heal'){
                healUpgrades[lastHealIndex].one++;
                TD.enemyList.heal[lastHealIndex].range += 2;
                TD.player.stone -= 80;
                return
            } else if(type == 'freeze'){
                freezeUpgrades[lastFreezeIndex].one++;
                TD.enemyList.freeze[lastFreezeIndex].range += 2;
                TD.player.stone -= 80;
                return
            }
        }
    }
}

function tower(type) {
    let cost = 0;
    switch(type){
        case 'tower': cost = 150;
            break;
        case 'bomber':
        case 'sniper':
        case 'decoy':
        case 'radar':
        case 'mine': cost = 250;
            break;
        case 'goldmine': cost = 500;
            break;
        case 'sentry':
        case 'heal':
        case 'freeze': cost = 300;
            break;
        case 'acid':
        case 'toxic': cost = 275;
            break;
        case 'electric':
        case 'support': cost = 325;
            break;
        case 'nuke': cost = 400;
            break;
        case 'laser': cost = 350;
            break;
    }
    if (TD.player.stone >= cost) {
        let btn = document.getElementById('closebtn');
        let try_ = true;

        alert('Tippe zum Platzieren auf das Spielfeld!');
        canvas.style.cursor = 'crosshair';
        btn.style.display = "block";
        btn.addEventListener('click', () => {
            try_ = false;
            canvas.style.cursor = '';
            btn.style.display = "none";
        });
        canvas.addEventListener('click', (e) => {
            let mousePos = {
                x: e.clientX - canvas.offsetLeft,
                y: e.clientY - canvas.offsetTop
            }

            // check if the clicked position is within 80 units of a waypoint
            for (let i = 0; i < TD.waypoints[TD.player.level - 1].length; i++) {
                let waypoint = TD.waypoints[TD.player.level - 1][i];
                if (Math.abs(mousePos.x - waypoint.x) < 80 && Math.abs(mousePos.y - waypoint.y) < 80) {
                    try_ = false;
                    break;
                }
            }

            if (try_) {
                switch(type){
                    case 'tower': TD.enemyList.towers.push(new TD.CreateObj(`${type}`, mousePos.x, mousePos.y)); newTower(`${type}`, TD.enemyList.towers.length, mousePos);
                        break;
                    case 'bomber': TD.enemyList.bombers.push(new TD.CreateObj(`${type}`, mousePos.x, mousePos.y)); newTower(`${type}`, TD.enemyList.bombers.length, mousePos);
                        break;
                    case 'sniper': TD.enemyList.sniper.push(new TD.CreateObj(`${type}`, mousePos.x, mousePos.y)); newTower(`${type}`, TD.enemyList.sniper.length, mousePos);
                        break;
                    case 'decoy': TD.enemyList.decoy.push(new TD.CreateObj(`${type}`, mousePos.x, mousePos.y)); newTower(`${type}`, TD.enemyList.decoy.length, mousePos);
                        break;
                    case 'radar': TD.enemyList.radar.push(new TD.CreateObj(`${type}`, mousePos.x, mousePos.y)); newTower(`${type}`, TD.enemyList.radar.length, mousePos);
                        break;
                    case 'mine': TD.enemyList.mine.push(new TD.CreateObj(`${type}`, mousePos.x, mousePos.y)); newTower(`${type}`, TD.enemyList.mine.length, mousePos);
                        break;
                    case 'goldmine': TD.enemyList.goldmine.push(new TD.CreateObj(`${type}`, mousePos.x, mousePos.y)); newTower(`${type}`, TD.enemyList.goldmine.length, mousePos);
                        break;
                    case 'sentry': TD.enemyList.sentry.push(new TD.CreateObj(`${type}`, mousePos.x, mousePos.y)); newTower(`${type}`, TD.enemyList.sentry.length, mousePos);
                        break;
                    case 'heal': TD.enemyList.heal.push(new TD.CreateObj(`${type}`, mousePos.x, mousePos.y)); newTower(`${type}`, TD.enemyList.heal.length, mousePos);
                        break;
                    case 'freeze': TD.enemyList.freeze.push(new TD.CreateObj(`${type}`, mousePos.x, mousePos.y)); newTower(`${type}`, TD.enemyList.freeze.length, mousePos);
                        break;
                    case 'acid': TD.enemyList.acid.push(new TD.CreateObj(`${type}`, mousePos.x, mousePos.y)); newTower(`${type}`, TD.enemyList.acid.length, mousePos);
                        break;
                    case 'toxic': TD.enemyList.toxic.push(new TD.CreateObj(`${type}`, mousePos.x, mousePos.y)); newTower(`${type}`, TD.enemyList.toxic.length, mousePos);
                        break;
                    case 'electric': TD.enemyList.electric.push(new TD.CreateObj(`${type}`, mousePos.x, mousePos.y)); newTower(`${type}`, TD.enemyList.electric.length, mousePos);
                        break;
                    case 'support': TD.enemyList.support.push(new TD.CreateObj(`${type}`, mousePos.x, mousePos.y)); newTower(`${type}`, TD.enemyList.support.length, mousePos);
                        break;
                    case 'nuke': TD.enemyList.nuke.push(new TD.CreateObj(`${type}`, mousePos.x, mousePos.y)); newTower(`${type}`, TD.enemyList.nuke.length, mousePos);
                        break;
                    case 'laser': TD.enemyList.laser.push(new TD.CreateObj(`${type}`, mousePos.x, mousePos.y)); newTower(`${type}`, TD.enemyList.laser.length, mousePos);
                        break;
                }

                TD.player.stone -= cost;
            }

            canvas.style.cursor = '';
            btn.style.display = "none";
            try_ = false;
        });
    }
}

function refull(){
    let costs = parseFloat(document.getElementById("lr").innerText);
    if(TD.player.stone >= costs){
        if(TD.player.life < 100){
            TD.player.life = 100;
            TD.player.stone -= costs;
            document.getElementById("lr").innerText = costs + 50;
        } else {
            alert("Du hast bereits full live!")
        }
    } else {
        alert("Nicht genügend Steine! Töte mehr Gegner für mehr Steine!")
    }
}

function newTower(towerType, index, mousePos) {
    let div = document.getElementById('set');
    index -= 1;
    const newDiv = document.createElement('div');
    newDiv.id = `${towerType}_${index}`;
    let br1 = document.createElement('br');
    let br2 = document.createElement('br');
    let br3 = document.createElement('br');

    const closeBtn = document.createElement('div');
    closeBtn.classList.add('closebtn');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', () => newDiv.style.display = 'none');

    const upgradeBtn1 = document.createElement('button');
    upgradeBtn1.classList.add('anzeige');
    
    upgradeBtn1.addEventListener('click', () => upgrade(towerType, 1));

    const upgradeBtn2 = document.createElement('button');
    upgradeBtn2.classList.add('anzeige');
    
    upgradeBtn2.addEventListener('click', () => upgrade(towerType, 2));

    const upgradeBtn3 = document.createElement('button');
    upgradeBtn3.classList.add('anzeige');

    upgradeBtn3.addEventListener('click', () => upgrade(towerType, 3));
    
    switch(towerType){
        case 'tower': upgradeBtn1.innerHTML = `<p id="${towerType}_1_${index}">Schaden erhöhen <p id="${towerType}_a_${index}">100</p></p>`;
                      upgradeBtn2.innerHTML = `<p id="${towerType}_2_${index}">Feuerrate erhöhen <p id="${towerType}_b_${index}">100</p></p>`;
                      upgradeBtn3.innerHTML = `<p id="${towerType}_3_${index}">Reichweite erhöhen <p id="${towerType}_c_${index}">80</p></p>`;
            break;
        case 'bomber': upgradeBtn1.innerHTML = `<p id="${towerType}_1_${index}">Schaden erhöhen <p id="${towerType}_a_${index}">150</p></p>`;
                       upgradeBtn2.innerHTML = `<p id="${towerType}_2_${index}">Feuerrate erhöhen <p id="${towerType}_b_${index}">150</p></p>`;
                       upgradeBtn3.innerHTML = `<p id="${towerType}_3_${index}">Trifft noch besser! <p id="${towerType}_c_${index}">150</p></p>`;
            break;
        case 'sniper': upgradeBtn1.innerHTML = `<p id="${towerType}_1_${index}">Schaden erhöhen <p id="${towerType}_a_${index}">150</p></p>`;
                       upgradeBtn2.innerHTML = `<p id="${towerType}_2_${index}">Feuerrate erhöhen <p id="${towerType}_b_${index}">150</p></p>`;
                       upgradeBtn3.innerHTML = `<p id="${towerType}_3_${index}">Kann jetzt auch gepanzerte Gegner zerstören! <p id="${towerType}_c_${index}">350</p></p>`;
            break;
        case 'nuke': upgradeBtn1.innerHTML = `<p id="${towerType}_1_${index}">Schaden erhöhen <p id="${towerType}_a_${index}">100</p></p>`;
                       upgradeBtn2.innerHTML = `<p id="${towerType}_2_${index}">Feuerrate erhöhen <p id="${towerType}_b_${index}">100</p></p>`;
                       upgradeBtn3.innerHTML = `<p id="${towerType}_3_${index}">Explosionsradius erhöhen <p id="${towerType}_c_${index}">150</p></p>`;
            break;
        default: upgradeBtn1.innerHTML = `<p id="${towerType}_1_${index}">Schaden erhöhen <p id="${towerType}_a_${index}">100</p></p>`;
            upgradeBtn2.innerHTML = `<p id="${towerType}_2_${index}">Feuerrate erhöhen <p id="${towerType}_b_${index}">100</p></p>`;
            upgradeBtn3.innerHTML = `<p id="${towerType}_3_${index}">Reichweite erhöhen <p id="${towerType}_c_${index}">80</p></p>`;
    }

    newDiv.appendChild(closeBtn);
    newDiv.appendChild(upgradeBtn1);
    newDiv.appendChild(br1);
    newDiv.appendChild(upgradeBtn2);
    newDiv.appendChild(br2);
    newDiv.appendChild(upgradeBtn3);
    newDiv.appendChild(br3);
    div.appendChild(newDiv);

    let x_push = {
        x: mousePos.x,
        y: mousePos.y
    }
    coordinates.push(x_push);
    let push = {
        index: index,
        one: 0,
        two: 0,
        three: 0
    }
    switch(towerType){
        case 'tower': towerUpgrades.push(push);
            break;
        case 'bomber': bomberUpgrades.push(push);
            break;
        case 'sniper': sniperUpgrades.push(push);
            break;
        case 'freeze': freezeUpgrades.push(push);
            break;
        case 'acid': acidUpgrades.push(push);
            break;
        case 'laser': laserUpgrades.push(push);
            break;
        case 'electric': electricUpgrades.push(push);
            break;
        case 'toxic': toxicUpgrades.push(push);
            break;
        case 'sentry': sentryUpgrades.push(push);
            break;
        case 'support': supportUpgrades.push(push);
            break;
        case 'mine': mineUpgrades.push(push);
            break;
        case 'radar': radarUpgrades.push(push);
            break;
        case 'heal': healUpgrades.push(push);
            break;
        case 'decoy': decoyUpgrades.push(push);
            break;
        case 'nuke': nukeUpgrades.push(push);
            break;
        case 'goldmine': goldmineUpgrades.push(push);
            break;
    }
}

let abc = 1;
let roundInterval = setInterval(()=>{
        if(TD.enemyList.enemys.length == 0 && abc == TD.game.wave){
            TD.player.stone += TD.game.wave;
            abc++;
        }
    }, 100);