module.exports = {
    style: {
      sass: {
        loaderOptions: {
          additionalData: `
          @import "./src/ui/styles/_variables.scss";
          @import "./src/ui/styles/_functions.scss";
          @import "./src/ui/styles/_mixins.scss";
          `,
        },
      },
    },
  };