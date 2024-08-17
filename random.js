function gen(n) {
   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|\;:,.<>?`~";
   let generated = "";
   for(let i = 0; i < n; i++) {
      const rl = Math.floor(Math.random() * letters.length)
      const r = letters.charAt(rl)
      generated += Scratch.Cast.toString(r)
   }
   return generated;
}

function randomBlockType() {
   const random = Math.floor(Math.random * 3)
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

function colorgen() {
   const hexASCII = "abcdef0123456789";
   const length = hexASCII.length;
   let generated = "#";
   for(let i = 0; i < 6; i++) {
      const ranASCII = Math.floor(Math.random() * length)
      generated += Scratch.Cast.toString(hexASCII.charAt(ranASCII))
   }
   return generated
}

class HelloWorld {
  getInfo() {
    return {
      id: 'cool',
      name: gen(5),
      color1: colorgen(),
      color2: colorgen(),
      blocks: [
        {
          opcode: 'hello',
          blockType: randomBlockType(),
          text: gen(5)
        }
      ]
    };
  }

  hello() {
    return gen(5);
  }
}

Scratch.extensions.register(new HelloWorld());