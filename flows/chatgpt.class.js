require("dotenv").config();
const { CoreClass } = require("@bot-whatsapp/bot");

class ChatGPTClass extends CoreClass {
  queue = [];
  optionsGPT = { model: "gpt-3.5-turbo" };
  openai = undefined;

  constructor(_database, _provider) {
    super(null, _database, _provider);
    this.init().then();
  }

  /**
   * Esta funciona inicializa el chat GPT, es como encender el coche
   */
  init = async () => {
    const { ChatGPTAPI } = await import("chatgpt");
    this.openai = new ChatGPTAPI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  };

  /**
   *
   * Este es el manejador del mensaje
   * su funcion es enviar un mensaje a whatsapp
   *
   */
  handleMsg = async (ctx) => {
    const { from, body } = ctx;

    //* this.openai.sendMessage() => es el que se encarga de enviar el mensaje a chatGPT
    const interaccionChatGPT = await this.openai.sendMessage(body, {
      conversationId: !this.queue.length
        ? undefined
        : this.queue[this.queue.length - 1].conversationId,
      parentMessageId: !this.queue.length
        ? undefined
        : this.queue[this.queue.length - 1].id,
    });

    this.queue.push(interaccionChatGPT);
    const parseMessage = {
      ...interaccionChatGPT,
      answer: interaccionChatGPT.text,
    };
    this.sendFlowSimple([parseMessage], from);
  };
}

module.exports = ChatGPTClass;
