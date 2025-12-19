/**********************************************
*
* file: prototype.spawn.js
* date: 18.12.2025
* version: 0.1
*
* funtions: logic for spawning normal and
*           special creeps and storing
*           all roles
*
**********************************************/

var listOfRoles = ['harvester', 'upgrader', 'builder', 'repairer'];

// create a new function for StructureSpawn
StructureSpawn.prototype.spawnCreepsIfNecessary =
    function () {
        /** @type {Room} */
        let room = this.room;
        // find all creeps in room
        /** @type {Array.<Creep>} */
        let creepsInRoom = room.find(FIND_MY_CREEPS);
        // get current RCL (RoomControlLevel)
        // Game.spawns.Spawn1.room.controller.level
        let rcl = room.controller.level;

        // count the number of creeps alive for each role in this room
        // _.sum will count the number of properties in Game.creeps filtered by the
        //  arrow function, which checks for the creep being a specific role
        /** @type {Object.<string, number>} */
        let numberOfCreeps = {};
        for (let role of listOfRoles) {
            numberOfCreeps[role] = _.sum(creepsInRoom, (c) => c.memory.role == role);
        }
        let max_ = {};
        max_['harvester'] = 2;
        max_['upgrader'] = 1;
        max_['builder'] = 1;
        max_['repairer'] = 1;

        let maxEnergy = room.energyCapacityAvailable;
        let name = undefined;

        // if no harvesters are left
        //  create a backup creep
        if (numberOfCreeps['harvester'] == 0) {
            // create a harvester because it can work on its own
            name = this.createCustomCreep(room.energyAvailable, 'harvester');
            this.logName(name, numberOfCreeps);          
        }
        // if no backup creep is required
        else {
            // check if the other roles maxed out
            if (numberOfCreeps['harvester'] < max_['harvester']) {
                // create a harvester because it can work on its own
                name = this.createCustomCreep(room.energyAvailable, 'harvester');
                this.logName(name, numberOfCreeps);
            }
            else if (numberOfCreeps['upgrader'] < max_['upgrader']) {
                // create a harvester because it can work on its own
                name = this.createCustomCreep(room.energyAvailable, 'upgrader');
                this.logName(name, numberOfCreeps);
            }
            else if (numberOfCreeps['builder'] < max_['builder']) {
                // create a harvester because it can work on its own
                name = this.createCustomCreep(room.energyAvailable, 'builder');
                this.logName(name, numberOfCreeps);
            }
            else if (numberOfCreeps['repairer'] < max_['repairer']) {
                // create a harvester because it can work on its own
                name = this.createCustomCreep(room.energyAvailable, 'repairer');
                this.logName(name, numberOfCreeps);
            }
        }
    }

// logs name and number of creeps of that role in the console
StructureSpawn.prototype.logName =
    function (name, numberOfCreeps) {
        if (name != undefined && _.isString(name)) {
        console.log(this.name + " spawned new creep: " + name + " (" + Game.creeps[name].memory.role + ")");
            for (let role of listOfRoles) {
                console.log(role + ": " + numberOfCreeps[role]);
            }
        }
    }


// create a new function for StructureSpawn to create a custom creep
StructureSpawn.prototype.createCustomCreep =
    function (energy, roleName) {
        // create a balanced body as big as possible with the given energy
        var numberOfParts = Math.floor(energy / 200);
        // make sure the creep is not too big (more than 50 parts)
        numberOfParts = Math.min(numberOfParts, Math.floor(50 / 3));
        var body = [];
        for (let i = 0; i < numberOfParts; i++) {
            body.push(WORK);
        }
        for (let i = 0; i < numberOfParts; i++) {
            body.push(CARRY);
        }
        for (let i = 0; i < numberOfParts; i++) {
            body.push(MOVE);
        }

        // create creep with the created body and the given role
        return this.createCreep(body, undefined, { role: roleName, working: false });
    };