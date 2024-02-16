const axios = require("axios");

module.exports = guardarTicket = async (date_entry) => {
  let data = JSON.stringify({
    data: date_entry,
  });
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api-yy6ox.strapidemo.com/api/tickets",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 5e2ff8945de7d9c08ff2307c2f2d245230bfdeb7c8290029ed459a19dd51640bc41c82c0c2cc91fb912334d25eedf41f617dfffeb39bf3aeceaf8573470c3a5c36b0caa87cd1ee6ac31e08263ccba987b4ab18c63ed8b8d114434bc1bec234a15b4fcb03df8bd36fce7851962cf4ce9a6b9f3c89edb0338ec9916745fcdedf84",
    },
    data: data,
  };
  //Siempre tuiene que etornar
  return axios.request(config);
};
