(function(Scratch) {
  'use strict';

  const vm = Scratch.vm
  let naughtyWords = []
  const ignoredWords = []

   class WordFiltering {
     getInfo() {
       return {
         id: 'WordFilter',
         name: 'Word Filtering',
         color1: '#FF4F4F',
         color2: '#ED3D3D',
         color3: '#C41F1F',
         blocks: [
           {
             blockType: Scratch.BlockType.LABEL,
             text: 'Naughty Words Related'
           },
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
            },
            {
             opcode: 'clear',
             blockType: Scratch.BlockType.COMMAND,
             text: 'clear naughty words'
            },
            {
             opcode: 'remove',
             blockType: Scratch.BlockType.COMMAND,
             text: 'remove [t] from naughty words',
             arguments: {
                t: {
                   type: Scratch.ArgumentType.STRING,
                   defaultValue: "naughty word"
                }
             }  
           },
           {
             blockType: Scratch.BlockType.LABEL,
             text: 'Ignored Words'
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
        let g = args.t
        let t = g.replace( , '')
        for(let i = 0; i < naughtyWords.length; i++) {
           const val = naughtyWords[i].toLowerCase()
           if (t.toLowerCase().includes(val)) {
              found = true;
              break;
           }
        }
        return found;
     }
     clear() {
        naughtyWords = []
     }
     remove(args) {
        naughtyWords = naughtyWords.filter(element => element !== args.t);
     }
   }

Scratch.extensions.register(new WordFiltering());})(Scratch);