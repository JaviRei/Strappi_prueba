const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const flowStrapi = require("./flow.Strapi");

/**
 * Asi es como podemos modulizar un flujo
 */

module.exports = addKeyword(EVENTS.WELCOME).addAnswer(
  [
    "Bienvenido a 🍐 *Sana Delicia* 🍐",
    "¿Qué te preparamos hoy?",
    "",
    "Escribe la palabra _PEDIDO_ para hacer tu solicitud",
  ],

  null,
  null,
  [flowStrapi]
);
