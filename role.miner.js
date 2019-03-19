/**********************************************
*
* file: role.miner.js
* date: 18.03.2019
* version: 1.0
*
* funtions: sits on a container
*           and mines the source
*
**********************************************/

// miner sits on container next to source and harvest the source directly
// into the container from with all other roles take the energy
module.exports = {
    // a function to run the logic for this role
    run: function (creep) {
        // get source
        let source = Game.getObjectById(creep.memory.sourceId);
        // find container next to source
        let container = source.pos.findInRange(FIND_STRUCTURES, 1, {
            filter: s => s.structureType == STRUCTURE_CONTAINER
        })[0];

        // if creep is on top of the container
        if (creep.pos.isEqualTo(container.pos)) {
            // harvest source
            creep.harvest(source);
        }
        // if creep is not on top of the container
        else {
            // move towards it
            creep.moveTo(container);
        }
    }
};
