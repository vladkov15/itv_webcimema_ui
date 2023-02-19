const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@ui': path.resolve(__dirname, 'src/@ui'),
     
    },
    resolve: {
      extensions: ['.js', '.jsx', '.tsx','.ts']
    }
  },
    style: {
      sass: {
        loaderOptions: {
          additionalData: `
          @import "@ui/styles/_variables.scss";
          @import "@ui/styles/_functions.scss";
          @import "@ui/styles/_mixins.scss";
          `,
        },
      },
    },
    
  };