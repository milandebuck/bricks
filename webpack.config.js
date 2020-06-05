module.exports = (config, context) => {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
        },
      ],
    },
    node: {
      process: true,
      global: true,
    },
  };
};
