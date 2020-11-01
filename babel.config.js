module.exports = function (api) {
  api.cache(true);

  const presets = [
    ['@babel/preset-env', { 'useBuiltIns': 'usage', 'corejs': '3' }],
    ['@babel/preset-react', { 'development': true }]
  ];

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-modules-commonjs',
  ];

  return {
    presets,
    plugins
  };
};