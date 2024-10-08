(function(Scratch) {
  'use strict';
  
  let color = "#666374"
  const vm = Scratch.vm
  

   class cc {
     getInfo() {
       return {
         id: 'cc',
         name: 'Color Change',
         color1: color,
         blocks: [
           {
             opcode: 'change',
             blockType: Scratch.BlockType.COMMAND,
             text: 'Change color to [c]',
             arguments: {
                 c: {
                  type: Scratch.ArgumentType.COLOR
                 }
             }
           },
           {
             opcode: 'test',
             blockType: Scratch.BlockType.COMMAND,
             text: 'command'
           },
           {
             opcode: 'bool',
             blockType: Scratch.BlockType.BOOLEAN,
             text: 'boolean'
           },
           {
             opcode: 'reporter',
             blockType: Scratch.BlockType.REPORTER,
             text: 'reporter'
           }
         ]
       };
     }

     change(args) {
       color = args.c;
       vm.extensionManager.refreshBlocks();
     }

     test() {
       return 0;
     }
     bool() {
       return 0;
     }
     reporter() {
       return 0;
     }
   }

Scratch.extensions.register(new cc());})(Scratch);
