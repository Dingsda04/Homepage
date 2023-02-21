const canvas = document.getElementById("canvas");
let lastTowerIndex = 0;
let lastBomberIndex = 0;
let lastSniperIndex = 0;
let lastFreezeIndex = 0;
let lastMineIndex = 0;
let lastHealIndex = 0;
let lastGoldmineIndex = 0;
let lastNukeIndex = 0;
let lastDecoyIndex = 0;
let lastRadarIndex = 0;
let lastSupportIndex = 0;
let lastSentryIndex = 0;
let lastToxicIndex = 0;
let lastElectricIndex = 0;
let lastLaserIndex = 0;
let lastAcidIndex = 0;

canvas.addEventListener("click", e =>{
    let mousePos = {
        x: e.clientX-canvas.offsetLeft,
        y: e.clientY-canvas.offsetTop
    };
    console.log(mousePos.x, mousePos.y);

    try {
        document.getElementById(`tower_${lastTowerIndex}`).style.display = 'none';
        document.getElementById(`bomber_${lastBomberIndex}`).style.display = 'none';
        document.getElementById(`sniper_${Index}`).style.display = 'none';
        document.getElementById(`freeze_${lastFreezeIndex}`).style.display = 'none';
        document.getElementById(`mine_${lastMineIndex}`).style.display = 'none';
        document.getElementById(`shield_${lastShieldIndex}`).style.display = 'none';
    } catch (error) {}
    
    let towerClickDetected = false;
    towerClickDetected = towerClickDetected || checkTowerClick(mousePos);
    if (towerClickDetected) {
        return;
    }
    towerClickDetected = towerClickDetected || checkBomberClick(mousePos);
    if (towerClickDetected) {
        return;
    }
    towerClickDetected = towerClickDetected || checkSniperClick(mousePos);
    if (towerClickDetected) {
        return;
    }
    towerClickDetected = towerClickDetected || checkFreezeClick(mousePos);
    if (towerClickDetected) {
        return;
    }
    towerClickDetected = towerClickDetected || checkMineClick(mousePos);
    if (towerClickDetected) {
        return;
    }
    towerClickDetected = towerClickDetected || checkHealClick(mousePos);
    if (towerClickDetected) {
        return;
    }
    towerClickDetected = towerClickDetected || checkGoldmineClick(mousePos);
    if (towerClickDetected) {
        return;
    }
    towerClickDetected = towerClickDetected || checkNukeClick(mousePos);
    if (towerClickDetected) {
        return;
    }
    towerClickDetected = towerClickDetected || checkDecoyClick(mousePos);
    if (towerClickDetected) {
        return;
    }
    towerClickDetected = towerClickDetected || checkRadarClick(mousePos);
    if (towerClickDetected) {
        return;
    }
    towerClickDetected = towerClickDetected || checkSupportClick(mousePos);
    if (towerClickDetected) {
        return;
    }
    towerClickDetected = towerClickDetected || checkSentryClick(mousePos);
    if (towerClickDetected) {
        return;
    }
    towerClickDetected = towerClickDetected || checkToxicClick(mousePos);
    if (towerClickDetected) {
        return;
    }
    towerClickDetected = towerClickDetected || checkElectricClick(mousePos);
    if (towerClickDetected) {
        return;
    }
    towerClickDetected = towerClickDetected || checkLaserClick(mousePos);
    if (towerClickDetected) {
        return;
    }
    towerClickDetected = towerClickDetected || checkAcidClick(mousePos);
    if (towerClickDetected) {
        return;
    }

});

function checkTowerClick(mousePos) {
    for (let i = 0; i < TD.enemyList.towers.length; i++) {
        let tower = TD.enemyList.towers[i];
        if (mousePos.x >= tower.x - 20 && mousePos.x <= tower.x + tower.size + 20 && 
            mousePos.y >= tower.y - 20 && mousePos.y <= tower.y + tower.size + 20) {
            document.getElementById(`tower_${lastTowerIndex}`).style.display = 'none';
            lastTowerIndex = i;
            document.getElementById(`tower_${i}`).style.display = 'block';
            return true;
        }
    }
    return false;
}

function checkBomberClick(mousePos) {
    for (let i = 0; i < TD.enemyList.bombers.length; i++) {
        let tower = TD.enemyList.bombers[i];
        if (mousePos.x >= tower.x - 20 && mousePos.x <= tower.x + tower.size + 20 && 
            mousePos.y >= tower.y - 20 && mousePos.y <= tower.y + tower.size + 20) {
            document.getElementById(`bomber_${lastBomberIndex}`).style.display = 'none';
            lastBomberIndex = i;
            document.getElementById(`bomber_${i}`).style.display = 'block';
            return true;
        }
    }
    return false;
}

function checkSniperClick(mousePos) {
    for (let i = 0; i < TD.enemyList.sniper.length; i++) {
        let tower = TD.enemyList.sniper[i];
        if (mousePos.x >= tower.x - 20 && mousePos.x <= tower.x + tower.size + 20 && 
            mousePos.y >= tower.y - 20 && mousePos.y <= tower.y + tower.size + 20) {
            document.getElementById(`sniper_${Index}`).style.display = 'none';
            lastSniperIndex = i;
            document.getElementById(`sniper_${i}`).style.display = 'block';
            return true;
        }
    }
    return false;
}

function checkFreezeClick(mousePos) {
    for (let i = 0; i < TD.enemyList.freeze.length; i++) {
        let tower = TD.enemyList.freeze[i];
        if (mousePos.x >= tower.x - 20 && mousePos.x <= tower.x + tower.size + 20 && 
            mousePos.y >= tower.y - 20 && mousePos.y <= tower.y + tower.size + 20) {
            document.getElementById(`freeze_${lastFreezeIndex}`).style.display = 'none';
            lastFreezeIndex = i;
            document.getElementById(`freeze_${i}`).style.display = 'block';
            return true;
        }
    }
    return false;
}

function checkMineClick(mousePos) {
    for (let i = 0; i < TD.enemyList.mine.length; i++) {
        let mine = TD.enemyList.mine[i];
        if (mousePos.x >= mine.x - 20 && mousePos.x <= mine.x + mine.size + 20 && 
            mousePos.y >= mine.y - 20 && mousePos.y <= mine.y + mine.size + 20) {
            document.getElementById(`mine_${lastMineIndex}`).style.display = 'none';
            lastMineIndex = i;
            document.getElementById(`mine_${i}`).style.display = 'block';
            return true;
        }
    }
    return false;
}

function checkHealClick(mousePos) {
    for (let i = 0; i < TD.enemyList.heal.length; i++) {
        let heal = TD.enemyList.heal[i];
        if (mousePos.x >= heal.x - 20 && mousePos.x <= heal.x + heal.size + 20 && 
            mousePos.y >= heal.y - 20 && mousePos.y <= heal.y + heal.size + 20) {
            document.getElementById(`heal_${lastHealIndex}`).style.display = 'none';
            lastHealIndex = i;
            document.getElementById(`heal_${i}`).style.display = 'block';
            return true;
        }
    }
    return false;
}

function checkGoldmineClick(mousePos) {
    for (let i = 0; i < TD.enemyList.goldmine.length; i++) {
        let tower = TD.enemyList.goldmine[i];
        if (mousePos.x >= tower.x - 20 && mousePos.x <= tower.x + tower.size + 20 && 
            mousePos.y >= tower.y - 20 && mousePos.y <= tower.y + tower.size + 20) {
            document.getElementById(`goldmine_${lastGoldmineIndex}`).style.display = 'none';
            lastGoldmineIndex = i;
            document.getElementById(`goldmine_${i}`).style.display = 'block';
            return true;
        }
    }
    return false;
}

function checkNukeClick(mousePos) {
    for (let i = 0; i < TD.enemyList.nuke.length; i++) {
        let tower = TD.enemyList.nuke[i];
        if (mousePos.x >= tower.x - 20 && mousePos.x <= tower.x + tower.size + 20 && 
            mousePos.y >= tower.y - 20 && mousePos.y <= tower.y + tower.size + 20) {
            document.getElementById(`nuke_${lastNukeIndex}`).style.display = 'none';
            lastNukeIndex = i;
            document.getElementById(`nuke_${i}`).style.display = 'block';
            return true;
        }
    }
    return false;
}

function checkDecoyClick(mousePos) {
    for (let i = 0; i < TD.enemyList.decoy.length; i++) {
        let tower = TD.enemyList.decoy[i];
        if (mousePos.x >= tower.x - 20 && mousePos.x <= tower.x + tower.size + 20 && 
            mousePos.y >= tower.y - 20 && mousePos.y <= tower.y + tower.size + 20) {
            document.getElementById(`decoy_${lastDecoyIndex}`).style.display = 'none';
            lastDecoyIndex = i;
            document.getElementById(`decoy_${i}`).style.display = 'block';
            return true;
        }
    }
    return false;
}

function checkRadarClick(mousePos) {
    for (let i = 0; i < TD.enemyList.radar.length; i++) {
        let tower = TD.enemyList.radar[i];
        if (mousePos.x >= tower.x - 20 && mousePos.x <= tower.x + tower.size + 20 && 
            mousePos.y >= tower.y - 20 && mousePos.y <= tower.y + tower.size + 20) {
            document.getElementById(`radar_${lastRadarIndex}`).style.display = 'none';
            lastRadarIndex = i;
            document.getElementById(`radar_${i}`).style.display = 'block';
            return true;
        }
    }
    return false;
}

function checkSupportClick(mousePos) {
    for (let i = 0; i < TD.enemyList.support.length; i++) {
        let tower = TD.enemyList.support[i];
        if (mousePos.x >= tower.x - 20 && mousePos.x <= tower.x + tower.size + 20 && 
            mousePos.y >= tower.y - 20 && mousePos.y <= tower.y + tower.size + 20) {
            document.getElementById(`support_${lastSupportIndex}`).style.display = 'none';
            lastSupportIndex = i;
            document.getElementById(`support_${i}`).style.display = 'block';
            return true;
        }
    }
    return false;
}

function checkSentryClick(mousePos) {
    for (let i = 0; i < TD.enemyList.sentry.length; i++) {
        let tower = TD.enemyList.sentry[i];
        if (mousePos.x >= tower.x - 20 && mousePos.x <= tower.x + tower.size + 20 && 
            mousePos.y >= tower.y - 20 && mousePos.y <= tower.y + tower.size + 20) {
            document.getElementById(`sentry_${lastSentryIndex}`).style.display = 'none';
            lastSentryIndex = i;
            document.getElementById(`sentry_${i}`).style.display = 'block';
            return true;
        }
    }
    return false;
}

function checkToxicClick(mousePos) {
    for (let i = 0; i < TD.enemyList.toxic.length; i++) {
        let tower = TD.enemyList.toxic[i];
        if (mousePos.x >= tower.x - 20 && mousePos.x <= tower.x + tower.size + 20 && 
            mousePos.y >= tower.y - 20 && mousePos.y <= tower.y + tower.size + 20) {
            document.getElementById(`toxic_${lastToxicIndex}`).style.display = 'none';
            lastToxicIndex = i;
            document.getElementById(`toxic_${i}`).style.display = 'block';
            return true;
        }
    }
    return false;
}

function checkElectricClick(mousePos) {
    for (let i = 0; i < TD.enemyList.electric.length; i++) {
        let tower = TD.enemyList.electric[i];
        if (mousePos.x >= tower.x - 20 && mousePos.x <= tower.x + tower.size + 20 && 
            mousePos.y >= tower.y - 20 && mousePos.y <= tower.y + tower.size + 20) {
            document.getElementById(`electric_${lastElectricIndex}`).style.display = 'none';
            lastElectricIndex = i;
            document.getElementById(`electric_${i}`).style.display = 'block';
            return true;
        }
    }
    return false;
}

function checkLaserClick(mousePos) {
    for (let i = 0; i < TD.enemyList.laser.length; i++) {
        let tower = TD.enemyList.laser[i];
        if (mousePos.x >= tower.x - 20 && mousePos.x <= tower.x + tower.size + 20 && 
            mousePos.y >= tower.y - 20 && mousePos.y <= tower.y + tower.size + 20) {
            document.getElementById(`laser_${lastLaserIndex}`).style.display = 'none';
            lastLaserIndex = i;
            document.getElementById(`laser_${i}`).style.display = 'block';
            return true;
        }
    }
    return false;
}

function checkAcidClick(mousePos) {
    for (let i = 0; i < TD.enemyList.acid.length; i++) {
        let tower = TD.enemyList.acid[i];
        if (mousePos.x >= tower.x - 20 && mousePos.x <= tower.x + tower.size + 20 && 
            mousePos.y >= tower.y - 20 && mousePos.y <= tower.y + tower.size + 20) {
            document.getElementById(`acid_${lastAcidIndex}`).style.display = 'none';
            lastAcidIndex = i;
            document.getElementById(`acid_${i}`).style.display = 'block';
            return true;
        }
    }
    return false;
}