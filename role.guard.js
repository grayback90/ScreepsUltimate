/**********************************************
*
* file: role.guard.js
* date: 18.03.2019
* version: 0.1
*
* funtions: defend the 'base' against every
*           attacker and guard all
*           the entrances
*
**********************************************/

// in times of peace he works as upgrader
// because he has not so many bodyparts to work
/*var roleUpgrader = require('role.upgrader');

// this is taken from the builder, must be rewritten to a guard function
module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
/*    run: function (creep) {
        // if target is defined and creep is not in target room
        if (creep.memory.target != undefined && creep.room.name != creep.memory.target) {
            // find exit to target room
            var exit = creep.room.findExitTo(creep.memory.target);
            // move to exit
            creep.moveTo(creep.pos.findClosestByRange(exit));
            // return the function to not do anything else
            return;
        }

        // if creep is trying to complete a constructionSite but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }

        // if creep is supposed to complete a constructionSite
        if (creep.memory.working == true) {
            // find closest constructionSite
            var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
            // if one is found
            if (constructionSite != undefined) {
                // try to build, if the constructionSite is not in range
                if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                    // move towards the constructionSite
                    creep.moveTo(constructionSite);
                }
            }
            // if no constructionSite is found
            else {
                // go upgrading the controller
                roleUpgrader.run(creep);
            }
        }
        // if creep is supposed to get energy
        else {
            creep.getEnergy(true, true);
        }
    }
};*/


/*
Functions:
- work as a upgrader
- if attacker comes to room
-- go to rampart
-- stay there and attack all enemies in range
- if there is no more enemy in room
-- go working again
*/
