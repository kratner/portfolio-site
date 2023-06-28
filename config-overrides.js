const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const {
  override,
  addWebpackPlugin,
  addWebpackModuleRule,
} = require("customize-cra");

module.exports = override(
  // Enable React Fast Refresh
  addWebpackPlugin(new ReactRefreshWebpackPlugin()),

  // Add SVG handling rule
  addWebpackModuleRule({
    test: /\.svg$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          svgoConfig: {
            plugins: {
              removeViewBox: false,
            },
          },
        },
      },
      {
        loader: "file-loader",
        options: {
          esModule: false,
          name: "static/media/[name].[hash:8].[ext]",
        },
      },
    ],
  })
);
