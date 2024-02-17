const { createBot, createProvider, createFlow } = require("@bot-whatsapp/bot");

const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");
const ChatGPTClass = require("./flows/chatgpt.class");
// const welcomeFlow = require("./flows/welcome.flow");
const createBotGPT = async ({ provider, database }) => {
  return new ChatGPTClass(database, provider);
};

const main = async () => {
  const adapterDB = new MockAdapter();
  //const adapterFlow = createFlow([welcomeFlow]);
  const adapterProvider = createProvider(BaileysProvider);

  createBotGPT({
    provider: adapterProvider,
    database: adapterDB,
  });
  // createBot({
  //   flow: adapterFlow,
  //   provider: adapterProvider,
  //   database: adapterDB,
  // });

  QRPortalWeb();
};

main();
