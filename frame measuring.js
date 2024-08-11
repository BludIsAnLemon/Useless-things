(function(Scratch) {
  'use strict';
  
  let im = false;
  let f = 0
  
  while (im) {
        f += 1
  }

   class fm {
     getInfo() {
       return {
         id: 'fm',
         name: 'Extension made in phone',
         blocks: [
           {
             opcode: 'sm',
             blockType: Scratch.BlockType.COMMAND,
             text: 'Start measuring frames'
           },
           {
             opcode: 'stop',
             blockType: Scratch.BlockType.COMMAND,
             text: 'Stop measuring frames'
           },
           {
             opcode: 'reset',
             blockType: Scratch.BlockType.COMMAND,
             text: 'Reset frames'
           },
           {
             opcode: 'frames',
             blockType: Scratch.BlockType.REPORTER,
             text: 'frames measured'
           }
         ]
       };
     }

     sm() {
       im = true;
     }

     stop() {
       im = false;
     }
     reset() {
       f = 0
     }
     frames() {
       return f
     }
   }

Scratch.extensions.register(new fm());})(Scratch);
