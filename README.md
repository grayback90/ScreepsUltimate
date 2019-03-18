# ScreepsUltimate
Refactored and chaned scripts for the game "screeps".

Info:
----
This is my refactoed AI for the game 'Screeps'.
Inspired by the tutorial from 'th_pion'.
But from now on I will work alone on my AI and develop it further.
Link to my wiki page: https://github.com/RituGray/ScreepsUltimate/wiki

- Screeps Documentation: https://docs.screeps.com/index.html
- Screeps API Reference: https://docs.screeps.com/api/

Currently working on:
----
- take the memory for the maximum spawned creeps (per role) into the code (seperate file like json or xml) so its easier to change
- new role: guard

ToDos:
----
- optimization on all roles (example: only upgrader should use energy from storage if necessary and other changes)
- after GCL is 2: claim new room and build it up (stable population, upgrade roomcontroller, build towers and other structures)
- additional roles: guard, monk, knight, ranger, etc. (see Role ideas below)
- modify all screeps: "panikroom", building roads (maybe a thing for the constructor), etc. (see Role ideas below)
- new function on the lorry: collects dropped energy (higher priority than collect energy from the container) -> https://docs.screeps.com/api/#Creep.pickup
- more testing and optimization on the AI of the screeps on my on server
- testing with bots
- testing on a real server

Role ideas + modifies for existing roles (ideas from "Pantek59"):
----
- modifies all creeps: -> they can spawn if RoomControlLevel () is reached
- (2) new role "guard": -> works as upgrader, if enemies come he goes to rampart and attacks them
- (1) new role "constructor" -> evertime new GC Level is reached puts the new buildings in specific layout --> https://docs.screeps.com/api/#ConstructionSite
- (1) modify "builder": -> only spawns if there is a construction site, after building go upgrade till death
- (1) modify "creeps": -> go to save-flag if enemies come to the room, after that go back to work
- (1) modify "creeps": -> set automatically construction sites for roads as they walk
- (5) new role "energy hauler": -> transport energy from remote stationary harvesters back to spawn room
- (1) new role "miniHarvester": -> needs only 200 energy, if all creeps die and not enough energy is stored
- (1) new role "protector": -> spawns if "Panic Flag" is set and goes there to protect this room
- (1) new role "remoteHarvester": -> harvest sources in remote rooms, can set the "Panic Flag"
- (3) new role "remoteStationaryHarvester": -> like a miner just in a remote room and can build container if there is no
- (2) new role "demolischer": -> spawned if "Demolisher Flag" is set and dismantles construction site
- (2) new role: "scout": -> runs to other rooms and tells if he is attack or if he find hostile/other creeps

Shoutout:
----
- I startet with the code from 'th_pion'. Thanks for the awesome tutorial man!
- Youtube: https://www.youtube.com/user/thPionGaming
- Github: https://github.com/thPion/Screeps-Nooby-Guide
- I used the code from "Pantek59" his account from Github for creep ideas. Thanks for that!
- Github: https://github.com/Pantek59/Screeps-Noob-Code
- some more tutorials/sources:
- KasamiBot: https://github.com/kasami/kasamibot
- Benjamin Horn (beije): https://github.com/beije/screeps-ai/

Playlist from "th_pion" for Screeps-Tutorial:
----
- https://www.youtube.com/playlist?list=PL0EZQ169YGlor5rzeJEYYPE3tGYT2zGT2
