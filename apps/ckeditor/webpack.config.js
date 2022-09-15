const nrwlConfig = require('@nrwl/react/plugins/webpack.js');
const { styles } = require('@ckeditor/ckeditor5-dev-utils');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (config, context) => {
  nrwlConfig(config);

  config.module.rules = [
    {
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    },
    {
      test: /\.css$/,
      exclude: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf|svg)$/i, //to load the font woff file this regex added
      exclude: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/, //to fix affection of ckeditor svg issue
      type: 'asset/resource',
    },
    {
      test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
      use: ['raw-loader'],
    },
    {
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
      exclude: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: styles.getPostCssConfig({
              themeImporter: {
                themePath: require.resolve('@ckeditor/ckeditor5-theme-lark'),
              },
              minify: true,
            }),
          },
        },
      ],
    },
  ];

  //console.log(config);
  return {
    ...config,
    plugins: [...config.plugins, new MiniCssExtractPlugin()],
  };
};
