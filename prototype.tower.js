/**********************************************
*
* file: prototype.tower.js
* date: 18.03.2019
* version: 1.0
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
