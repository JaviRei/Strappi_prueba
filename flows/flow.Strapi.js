const { addKeyword } = require("@bot-whatsapp/bot");
const guardarTicket = require("../funciones/guardar.Ticket");

const GLOBAL_STATE = {};
module.exports = addKeyword("pedido")
  .addAnswer(["Cual es tu pedido?"], { capture: true }, async (ctx) => {
    GLOBAL_STATE[ctx.from] = {
      numero: ctx.from,
      pedido: ctx.body,
      nombre: "",
      cantidad: "",
    };
  })
  .addAnswer(
    "Ingresa tu nombre (🛵 _para identificar quien recibira el pedido_): ",
    { capture: true },
    async (ctx) => {
      GLOBAL_STATE[ctx.from].nombre = ctx.body;
    }
  )
  .addAnswer("Ingresa el precio: ", { capture: true }, async (ctx) => {
    GLOBAL_STATE[ctx.from].cantidad = ctx.body;
  })
  .addAnswer(
    "tu pedido se esta procesando",
    null,
    async (ctx, { flowDynamic }) => {
      const respuesta_Strapi = await guardarTicket(GLOBAL_STATE[ctx.from]);
      console.log(respuesta_Strapi);
      await flowDynamic(
        `Tu orden es el numero *${respuesta_Strapi.data.data.id}*`
      );
    }
  )
  .addAnswer(
    [
      "Tu pedido a sido registrado",
      "Tenemos un tiempo de espera de 20 a 30 min",
    ],
    { delay: 2000 },
    async (_, { gotoFlow, flowDynamic }) => {
      await flowDynamic("Gracias por tu preferencia, hasta la proxima");
      return gotoFlow(require("./welcome.flow"));
    }
  );
