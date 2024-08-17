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
             blockType: Scratch.BlockType.COMMAND,
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
       vm.runtime.extensionManager.refreshBlocks();
     }
   }

Scratch.extensions.register(new woah());})(Scratch);