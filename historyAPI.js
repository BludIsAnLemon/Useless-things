// will finish this soon

class HistoryAPI {
  getInfo() {
    return {
      id: 'history',
      name: 'Web History API',
      blocks: [
        {
          opcode: 'history',
          blockType: Scratch.BlockType.REPORTER,
          text: 'window history'
        },
        {
          opcode: 'supported',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'api supported?'
        }
      ]
    };
  }

  supported() {
    return !!window.history;
  }
  history() {
    return JSON.stringify(window.history);
  }
}

Scratch.extensions.register(new HistoryAPI());