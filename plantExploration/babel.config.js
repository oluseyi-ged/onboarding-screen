module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@constants/*': './src/constants',
          '@fonts/*': './src/assets/fonts',
          '@images/*': './src/assets/images',
          '@screens/*': './src/screens',
        },
      },
    ],
  ],
};
