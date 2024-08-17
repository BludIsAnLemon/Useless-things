function gen(n) {
   let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|\;:,.<>?`~";
   let generated = "";
   for(let i = 0; i < n; i++) {
      let rl = math.floot(math.random() * letters.length)
      let r = letters.charAt(rl}
      generated += Scratch.Cast.toString(r)
   }
   return generated;
}

class HelloWorld {
  getInfo() {
    return {
      id: gen(5),
      name: 'It works!',
      blocks: [
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.REPORTER,
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