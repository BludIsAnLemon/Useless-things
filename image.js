class ImageTest {
  getInfo() {
    return {
      id: 'helloworld',
      name: 'It works!',
      blocks: [
        {
          opcode: 'image',
          blockType: Scratch.BlockType.REPORTER,
          text: 'img [img]',
          arguments: {
             img: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "https://extensions.turbowarp.org/dango.png"
             }
          }
        }
      ]
    };
  }

  image(args) {
    let imgLink = args.img;
    let img = document.createElement("img");
    img.src = imgLink
    let canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    return ctx.toDataURL();
  }
}

Scratch.extensions.register(new ImageTest());