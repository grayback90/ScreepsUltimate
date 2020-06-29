/**********************************************
*
* file: prototype.creep.js
* date: 29.06.2020
* version: 1.2
*
* funtions: logic for creeps to get
*           energy
*
**********************************************/

var roles = {
    harvester: require('./roles/role.harvester'),
    upgrader: require('./roles/role.upgrader'),
    builder: require('./roles/role.builder'),
    repairer: require('./roles/role.repairer'),
    wallRepairer: require('./roles/role.wallRepairer'),
    longDistanceHarvester: require('./roles/role.longDistanceHarvester'),
    claimer: require('./roles/role.claimer'),
    miner: require('./roles/role.miner'),
    lorry: require('./roles/role.lorry'),
    guard: require('./roles/role.guard')
};

Creep.prototype.runRole =
    function () {
        roles[this.memory.role].run(this);
    };

/** @function
    @param {bool} useContainer
    @param {bool} useSource */
Creep.prototype.getEnergy =
    function (useContainer, useSource) {
        /** @type {StructureContainer} */
        let container;
        // if the Creep should look for containers
        if (useContainer) {
            // find closest container or storage
            container = this.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: s => (s.structureType == STRUCTURE_CONTAINER || s.structureType == STRUCTURE_STORAGE) &&
                             s.store[RESOURCE_ENERGY] > 0
            });
            // if one was found
            if (container != undefined) {
                // try to withdraw energy, if the container is not in range
                if (this.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    this.moveTo(container);
                }
            }
        }
        // if no container was found and the Creep should look for Sources
        if (container == undefined && useSource) {
            // find closest source
            var source = this.pos.findClosestByPath(FIND_SOURCES_ACTIVE);

            // try to harvest energy, if the source is not in range
            if (this.harvest(source) == ERR_NOT_IN_RANGE) {
                // move towards it
                this.moveTo(source);
            }
        }
};
