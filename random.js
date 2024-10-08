const TextLength = 10

function gen(n) {
   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|\;:,.<>?`~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽž";
   let generated = "";
   for(let i = 0; i < n; i++) {
      const rl = Math.floor(Math.random() * letters.length)
      const r = letters.charAt(rl)
      generated += Scratch.Cast.toString(r)
   }
   return generated;
}

function randomBlockType() {
   const random = Math.floor(Math.random() * 3)
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

class extID {
  getInfo() {
    return {
      id: 'cool',
      name: gen(TextLength),
      color1: colorgen(),
      color2: colorgen(),
      color3: colorgen(),
      blocks: [
        {
          blockType: Scratch.BlockType.LABEL,
          text: gen(TextLength)
        },
        {
          func: 'btn',
          blockType: Scratch.BlockType.BUTTON,
          text: gen(TextLength)
        },
        {
          opcode: 'hello',
          blockType: randomBlockType(),
          text: gen(TextLength)
        }
      ]
    };
  }

  hello() {
    return gen(TextLength);
  }
  btn() {
    let e = window.prompt(gen(TextLength));
  }
}

Scratch.extensions.register(new extID());