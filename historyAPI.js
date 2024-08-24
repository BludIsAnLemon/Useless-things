class HistoryAPI {
  getInfo() {
    return {
      id: 'history',
      name: 'Web History API',
      blocks: [
        {
          opcode: 'supported',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'api supported?'
             }
          }
        }
      ]
    };
  }

  supported() {
    return window.history ? 'true' : 'false';
  }
}

Scratch.extensions.register(new HistoryAPI());