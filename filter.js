(function(Scratch) {
  'use strict';

  const vm = Scratch.vm
  let naughtyWords = []

   class WordFiltering {
     getInfo() {
       return {
         id: 'WordFilter',
         name: 'Word Filtering',
         blocks: [
           {
             opcode: 'naughty',
             blockType: Scratch.BlockType.REPORTER,
             text: 'naughty words'
           },
           {
             opcode: 'includes',
             blockType: Scratch.BlockType.BOOLEAN,
             text: '[t] includes a naughty word?',
             arguments: {
                t: {
                   type: Scratch.ArgumentType.STRING,
                   defaultValue: "This should include a naughty word!"
                }
             }
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
       return JSON.stringify(naughtyWords);
     }
     add(args) {
       naughtyWords.push(args.t);
       naughtyWords = [...new Set(naughtyWords)];
     }
     includes(args) {
        let found = false;
        let t = args.t
        for(let i = 0; i < naughtyWords.length; i++) {
           const val = naughtyWords[i].toLowerCase()
           if (t.toLowerCase().includes(val)) {
              found = true;
              break;
           }
        }
        return found;
     }
   }

Scratch.extensions.register(new WordFiltering());})(Scratch);