/**********************************************
*
* file: prototype.tower.js
* date: 18.12.2025
* version: 0.1
*
* funtions: logic for all towers to find
*           and attack enemies
*
**********************************************/

// create a new function for StructureTower
StructureTower.prototype.defend =
    function () {
        // find closes hostile creep
        var target = this.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        // if one is found...
        if (target != undefined) {
            // ...FIRE!
            this.attack(target);
        }
};
