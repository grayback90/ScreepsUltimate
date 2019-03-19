/**********************************************
*
* file: role.guard.js
* date: 19.03.2019
* version: 0.2
*
* funtions: works as upgrader but
*           defends the 'base' against every
*           attacker and guard all
*           the entrances
*
**********************************************/

// in times of peace he works as upgrader
// because he needs not so many bodyparts to work
var roleUpgrader = require('role.upgrader');

// only logic for upgrader
// TODO: implement logic for guard
module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function(creep) {
        // if creep is bringing energy to the controller but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }

        // if creep is supposed to transfer energy to the controller
        if (creep.memory.working == true) {
            // try to upgrade the controller
            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                // if not in range, move towards the controller
                creep.moveTo(creep.room.controller);
            }
        }
        // if creep is supposed to get energy
        else {
            creep.getEnergy(true, true);
        }

        // logic for guard
        /*if (enemy comes to room) {
          * stop working -> guarding: true
          * go to rampart
          * attack enemies that are near
          * enemy dead -> guarding: false
        }*/
    }
};


/*
Functions:
- work as a upgrader
- if attacker comes to room
-- go to rampart
-- stay there and attack all enemies in range
- if there is no more enemy in room
-- go working again
*/
