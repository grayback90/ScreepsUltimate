/**********************************************
*
* file: role.guard.js
* date: 19.03.2019
* version: 0.9
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

        // search for hostile creeps in room
        var hostiles = Game.spawns['Spawn1'].room.find(FIND_HOSTILE_CREEPS);
        // search for the "guard" flag
        var guardFlag = Game.flags.Guard1;
        // locking on target
        var target = this.pos.findClosestByRange(FIND_HOSTILE_CREEPS);

        // if there are hostile creeps in the room
        if (hostiles.length > 0) {
          creep.say('Enemy spotted!');
          creep.memory.guarding = true;
        }
        // no more hostile creeps in the room
        else {
          creep.memory.guarding = false;
        }

        // logic for guard
        if (creep.memory.guarding == true) {
          // move to guardFlag
          creep.moveTo(guardFlag);
          if (target != undefined) {
              // attacking closest target
              this.attack(target);
          }
        }
        // work as upgrader
        else {
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
        }
    }
};
