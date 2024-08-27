class HelloWorld {
  getInfo() {
    return {
      id: 'helloworld',
      name: 'It works!',
      blocks: [
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.REPORTER,
          text: '5'
             }
          }
        }
      ]
    };
  }

  hello() {
    return 5;
  }
}

Scratch.extensions.register(new HelloWorld());