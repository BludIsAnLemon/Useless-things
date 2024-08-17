// this doesn't work anymore
function randomBlockType() {
   const random = Math.floor(Math.random() * 3)
   if (random == 0) {
      return Scratch.BlockType.COMMAND
   }
   else if (random == 1) {
      return Scratch.BlockType.REPORTER
   }
   else {
      return Scratch.BlockType.BOOLEAN
   }
}

(function(Scratch) {
  'use strict';

  const vm = Scratch.vm

   class woah {
     getInfo() {
       return {
         id: 'fm',
         name: 'cool ass block',
         blocks: [
           {
             opcode: 'woah',
             blockType: randomBlockType(),
             text: 'woah!'
           },
           {
             opcode: 'refresh',
             blockType: Scratch.BlockType.COMMAND,
             text: 'new blocktype'
           }
         ]
       };
     }
     woah() {
       return 0;
     }
     refresh() {
       vm.extensionManager.removeExtension(woah);
       vm.extensionManager.loadExtension("https://bludisanlemon.github.io/Useless-things/woah.js")
     }
   }

Scratch.extensions.register(new woah());})(Scratch);