(function(Scratch) {
  'use strict';

  const vm = Scratch.vm
  let naughtyWords = {}

   class WordFiltering {
     getInfo() {
       return {
         id: 'WordFilter',
         name: 'Word Filtering',
         blocks: [
           {
             opcode: 'naughty',
             blockType: Scratch.Blocktype.REPORTER,
             text: 'naughty words'
           },
           {
             opcode: 'add',
             blockType: Scratch.BlockType.COMMAND,
             text: 'add [t] to naughty words',
             arguments: {
                t: {
                   type: Scratch.ArgumentType.STRING,
                   defaultValue: "naughty word"
                }
             }
           }
         ]
       };
     }
     naughty() {
       return Scratch.Cast.toString(naughtyWords);
     }
     add(args) {
       naughtyWords.push(args.t);
     }
   }

Scratch.extensions.register(new WordFiltering());})(Scratch);