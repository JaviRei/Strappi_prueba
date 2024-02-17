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
    "Haz cualquier pregunta",
  ],

  null,
  null,
  [flowStrapi]
);
