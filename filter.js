(function(Scratch) {
  'use strict';

  const vm = Scratch.vm
  let naughtyWords = []
  let ignoredWords = []
  let replacedWords = []

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
             text: 'Naughty Words'
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
           },
           {
            opcode: 'ignored',
            blockType: Scratch.BlockType.REPORTER,
            text: 'ignored words'
          },
          {
            opcode: 'addIgnored',
            blockType: Scratch.BlockType.COMMAND,
            text: 'add [t] to ignored words',
            arguments: {
               t: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: "word"
               }
            }
           },
           {
            opcode: 'clearIgnored',
            blockType: Scratch.BlockType.COMMAND,
            text: 'clear ignored words'
           },
           {
            opcode: 'removeIgnored',
            blockType: Scratch.BlockType.COMMAND,
            text: 'remove [t] from ignored words',
            arguments: {
               t: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: "word"
               }
            }  
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Replaced Words'
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: "These doesn't work yet. sorry :(",
            hideFromPallete: false
           },
          {
            opcode: 'replaced',
            blockType: Scratch.BlockType.REPORTER,
            text: 'replaced words'
          },
          {
            opcode: 'addReplaced',
            blockType: Scratch.BlockType.COMMAND,
            text: 'replace [t] with [r]',
            arguments: {
               t: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: "word"
               },
               r: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "naughty"
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
        let g = args.t;
        for(let i = 0; i < replacedWords.length; i++) {
          g = g.replace(replacedWords[i].r, replacedWords[i].name);
        }
        let t = g.replace(" ", "")
        for(let i = 0; i < ignoredWords; i++) {
          t = t.replace(ignoredWords[i], "");
        }
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
      naughtyWords = [];
     }
     remove(args) {
      naughtyWords = naughtyWords.filter(element => element !== args.t);
     }
     ignored() {
      return JSON.stringify(ignoredWords);
     }
     addIgnored(args) {
       ignoredWords.push(args.t)
       ignoredWords = [...new Set(ignoredWords)];
     }
     clearIgnored() {
      ignoredWords = [];
     }
     removeIgnored(args) {
      ignoredWords = ignoredWords.filter(element => element !== args.t);
     }
     replaced() {
      return JSON.stringify(replacedWords);
     }
     addReplaced(args) {
      let r = args.r;
      let t = args.t;
      replacedWords.push({r: r, "name": t})
     }
   }

Scratch.extensions.register(new WordFiltering());})(Scratch);
