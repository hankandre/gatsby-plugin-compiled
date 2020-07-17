export const onCreateBabelConfig = ({ actions }, pluginOptions = {}) => {
  actions.setBabelPlugin({
    name: require.resolve("@compiled/babel-plugin-css-in-js"),
    options: {
      sourceMap: process.env.NODE_ENV !== `production`,
      autoLabel: process.env.NODE_ENV !== `production`,
      ...pluginOptions,
    },
  });




};
