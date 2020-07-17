# gatsby-plugin-compiled

Provide support for using the css-in-js library [Compiled](https://compiledcssinjs.com).

## Install

**npm**

```sh
npm install gatsby-plugin-compiled @compiled/css-in-js
```

**yarn**

```sh
yarn add gatsby-plugin-compiled @compiled/css-in-js
```

## How to use

Add the plugin to your `gatsby-config.js`.

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-compiled`,
      options: {
        // Accepts all options defined by `@compiled/babel-plugin-css-in-js` plugin.
      },
    },
  ],
};
```