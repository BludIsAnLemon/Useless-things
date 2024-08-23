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
    let img = document.createElement(<img>);
    img.src = imgLink;
    return img;
  }
}

Scratch.extensions.register(new ImageTest());