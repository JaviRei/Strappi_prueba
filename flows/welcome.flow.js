const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");

/**
 * Asi es como podemos modulizar un flujo
 */

module.exports = addKeyword("hola")
  .addAnswer(
    ["Bienvenido a 🍐 *Sana Delicia* 🍐", "¿Como podemos ayudarte hoy?"],
    {
      media:
        "https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/310955069_10229206814662728_4732240852357698253_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=j8gdXSmLVa0AX-XUISH&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAaVk_sP1xhAr3E82pQFnC4ci92XdOuFa5TBPV4HlBFgA&oe=65D23EC5",
    }
  )
  .addAnswer(["1️⃣ Ver el 📗 *Menu*", "2️⃣ "]);
