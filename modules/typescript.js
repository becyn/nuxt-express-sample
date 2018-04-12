module.exports = function (options) {
  // Extend build
  this.extendBuild((config) => {
    const tsLoader = {
      loader: "ts-loader",
      options: {
        appendTsSuffixTo: [/\.vue$/],
        transpileOnly: true,
      },
      exclude: [
        /\.nuxt/
      ]
      // exclude: [
      // ]
    }
    config.module.rules.push(
      Object.assign(
        {
          test: /((client|server)\.js)|(\.tsx?)$/
        },
        tsLoader
      )
    );

    config.module.rules.push({
      test: /\.ts$/,
      loader: 'tslint-loader',
      enforce: 'pre',
      options: {
        configFile: 'tslint.json',
        tsConfigFile: 'tsconfig.json',
      },
    });
    config.module.rules.push({
      test: /\.ts$/,
      loader: 'ts-loader',
      options: {
        configFile: 'tsconfig.json',
      },
    });
    // for (const rule of config.module.rules) {
    //   if (rule.loader === 'vue-loader') {
    //     rule.options.loaders.ts = 'ts-loader?{"appendTsSuffixTo":["\\\\.vue$"], "configFile": "tsconfig.json"}!tslint-loader';
    //   }
    // }
    // Add TypeScript loader for vue files
    for (let rule of config.module.rules) {
      if (rule.loader === "vue-loader") {
        rule.options.loaders.ts = tsLoader
      }
    }
    // Add .ts extension in webpack resolve
    console.log(config.resolve.extensions);
    if (config.resolve.extensions.indexOf(".ts") === -1) {
      config.resolve.extensions.push(".ts")
    }
  });
};
// module.exports = function() {
//   // Add .ts extension for store, middleware and more
//   this.nuxt.options.extensions.push("ts")
//   // Extend build
//   this.extendBuild(config => {
//     const tsLoader = {
//       loader: "ts-loader",
//       options: {
//         appendTsSuffixTo: [/\.vue$/]
//       },
//       exclude: [
//         /\.nuxt/
//       ]
//     }
//     // Add TypeScript loader
//     config.module.rules.push(
//       Object.assign(
//         {
//           test: /((client|server)\.js)|(\.tsx?)$/
//         },
//         tsLoader
//       )
//     )
//     // Add TypeScript loader for vue files
//     for (let rule of config.module.rules) {
//       if (rule.loader === "vue-loader") {
//         rule.options.loaders.ts = tsLoader
//       }
//     }
//     // Add .ts extension in webpack resolve
//     if (
//       config.resolve.extensions.indexOf(".ts") === -1
//     ) {
//       config.resolve.extensions.push(".ts")
//     }
//   })
// }
// 
