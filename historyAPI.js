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
          opcode: 'back',
          blockType: Scratch.BlockType.COMMAND,
          text: 'go back'
        },
        {
          opcode: 'forward',
          blockType: Scratch.BlockType.COMMAND,
          text: 'go forward'
        },
        {
          opcode: 'supported',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'api supported?'
        },
      ]
    };
  }

  supported() {
    return !!window.history;
  }
  history() {
    return JSON.stringify(window.history);
  }
  forward() {
    window.history.forward();
  }
  back() {
    window.history.back();
  }
}

Scratch.extensions.register(new HistoryAPI());