import { onCreateBabelConfig } from "../gatsby-node";
import * as path from "path";

describe(`gatsby-plugin-compiled`, () => {
  describe(`onCreateBabelConfig`, () => {
    it(`sets the correct babel preset`, () => {
      const actions = { setBabelPlugin: jest.fn() };

      onCreateBabelConfig({ actions }, null);

      expect(actions.setBabelPlugin).toHaveBeenNthCalledWith(1, {
        name: expect.stringContaining(
          path.join("@compiled", "babel-plugin-css-in-js")
        ),
        options: {
          sourceMap: true,
          autoLabel: true,
        },
      });
    });

    it(`passes additional options on to the preset`, () => {
      const actions = { setBabelPlugin: jest.fn() };
      const pluginOptions = { useBuiltIns: true };

      onCreateBabelConfig({ actions }, pluginOptions);

      expect(actions.setBabelPlugin).toHaveBeenNthCalledWith(1, {
        name: expect.stringContaining(
          path.join("@compiled", "babel-plugin-css-in-js")
        ),
        options: {
          sourceMap: true,
          autoLabel: true,
          useBuiltIns: true,
        },
      });
    });

    describe(`in production mode`, () => {
      let env;

      beforeAll(() => {
        env = process.env.NODE_ENV;
        process.env.NODE_ENV = `production`;
      });

      afterAll(() => {
        process.env.NODE_ENV = env;
      });

      it(`sets the correct babel preset`, () => {
        const actions = { setBabelPlugin: jest.fn() };

        onCreateBabelConfig({ actions }, null);

        expect(actions.setBabelPlugin).toHaveBeenNthCalledWith(1, {
          name: expect.stringContaining(
            path.join("@compiled", "babel-plugin-css-in-js")
          ),
          options: {
            sourceMap: false,
            autoLabel: false,
          },
        });
      });
    });
  });
});
