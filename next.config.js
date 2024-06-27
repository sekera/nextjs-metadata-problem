/** @type {import('next').NextConfig} */
//TODO: make sure this is the best approach to use require, maybe the line above with @type would be better
const path = require('path');
const fs = require('fs');


module.exports = {



  output: 'standalone',


  trailingSlash: true,
  transpilePackages: ['glueoui'],
  reactStrictMode: true,
  // images: {
  //   loader: "custom"
  // },
  webpack: (config, options) => {

      // fixes this build error
      // ./node_modules/.pnpm/node-gyp-build@4.8.0/node_modules/node-gyp-build/node-gyp-build.js
      // Module not found: Can't resolve 'fs'
      // TODO try to coment out the following lines and see if it still works
      config.resolve.fallback = {
        ...config.resolve.fallback,
        // Provide a fallback for the fs module
        fs: false
      };



    // needed to prevent Its element type 'ReactElement<any, any> | Component<EditorProps, any, any> | null' is not a valid JSX element.

    // config.resolve.alias = {
    //   ...config.resolve.alias,
    //   react:
    //   [ 
    //     path.resolve("./node_modules/@types/react"),
    //     path.resolve("./node_modules/react"),
    //     path.resolve("./node_modules/@glueo-fork/jodit"),
    //     path.resolve("./node_modules/@glueo-fork/jodit-react")
        
    //   ]
      
    // }
    
    config.module.rules.push({
      test: /\.html$/,
      type: "asset/source",
    });
    
    config.module.rules.push({
      test: /\.txt$/,
      type: "asset/source",
    });

    config.module.rules.push({
      test: /\.template$/,
      type: "asset/source",
    });

    config.module.rules.push({
      test: /\.json.template$/,
      type: "asset/source",
    });

    config.module.rules.forEach((rule) => {
      if (Array.isArray(rule.use)) {
        rule.use.forEach((u) => {
          if (u.loader === "sass-loader") {
            u.options.cache = false;
          }
        });
      }
    });

    return config
  }
}