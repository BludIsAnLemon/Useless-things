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
          text: 'go [times]',
          arguments: {
             times: {
                type: Scratch.ArgumentType.NUMBER
             }
          }
        },
        {
          opcode: 'state',
          blockType: Scratch.BlockType.REPORTER,
          text: 'history state'
        },
        {
          opcode: 'push',
          blockType: Scratch.BlockType.COMMAND,
          text: 'push [pageID] [userID] with link [url]',
          arguments: {
             pageID: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
             },
              userID: {
               type: Scratch.ArgumentType.NUMBER,
               defaultValue: 5
             },
             url: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "https://turbowarp.org/"
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
  push(args) {
    const state = { page_id: Scratch.Cast.toNumber(args.pageID), user_id: Scratch.Cast.toNumber(args.userID) };
    const url = Scratch.Cast.toString(args.url);
    window.history.pushState(state,"",url);
  }
  state() {
    return window.history.state;
  }
}

Scratch.extensions.register(new HistoryAPI());