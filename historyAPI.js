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
          opcode: 'go',
          blockType: Scratch.BlockType.COMMAND,
          text: 'go [times]'
          arguments: {
             times: {
                type: Scratch.ArgumentType.NUMBER
             }
          }
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
  go(args) {
    window.history.go(args.times);
  }
}

Scratch.extensions.register(new HistoryAPI());