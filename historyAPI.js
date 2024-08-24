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
    if (window.history) {
      return true;
    } else {
      return false;
    }
  }
}

Scratch.extensions.register(new HistoryAPI());