(function(Scratch) {
  'use strict';
  
  let color = #666374
  

   class cc {
     getInfo() {
       return {
         id: 'cc',
         name: 'Color Change',
         blocks: [
           {
             opcode: 'change',
             blockType: Scratch.BlockType.COMMAND,
             text: 'Change color to [c]'
             arguments: {
                
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
