export default {
  state: {
    dadata: JSON.stringify([{}]),
  },
  actions: {
    getCity(ctx, value) {
      let url =
        "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
      let token = "8e14d61356368799079f0d7faf37b4cef48ace2a";
      let query = value;

      let options = {
        method: "POST",
        mode: "cors",
        constraints: {
          locations: { country: "Россия" },
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Token " + token,
        },
        body: JSON.stringify({ query: query }),
      };

      fetch(url, options)
        .then((response) => response.text())
        .then((result) => ctx.commit("updateDadata", result))
        .catch((error) => console.log("error", error));
    },
    reverseGeocoding(ctx, data) {
      return new Promise((resolve) => {
        var url =
          "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
        var token = "8e14d61356368799079f0d7faf37b4cef48ace2a";
        var query = { lat: data[0], lon: data[1] };
        var options = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Token " + token,
          },
          body: JSON.stringify(query),
        };
        fetch(url, options)
          .then((response) => response.text())
          .then((result) => resolve(result));
      });
    },
  },
  mutations: {
    updateDadata(state, result) {
      state.dadata = result;
    },
  },
};
