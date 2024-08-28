class HelloWorld {
  getInfo() {
    return {
      id: 'helloworld',
      name: 'It works!',
      blocks: [
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.REPORTER,
          text: 'debugging reporter'
             }
          }
        }
      ]
    };
  }

  hello() {
    return JSON.Stringify(Scratch.vm.extensionManager);
  }
}

Scratch.extensions.register(new HelloWorld());