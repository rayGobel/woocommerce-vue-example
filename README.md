# wp-vue-frontend

> Vue.js frontend w/ wordpress

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Modifications

### 1. Enable code splitting on Vue-Router. See: [vue router code splitting/lazy loading](https://router.vuejs.org/guide/advanced/lazy-loading.html)

Insert this command on `package.json` to satisfy Standard.js

    "standard": {
      "parser": "babel-eslint",
      "ignore": [
        "build"
      ]
    }

### 2. Use `chai-as-promised` as promise library

- Install `babel-polyfill` with `npm install --save-dev babel-polyfill`
- Install `chai-as-promised` with `npm install --save-dev babel-polyfill`
- Modify karma by adding:

    files: [
      '../../node_modules/babel-polyfill/dist/polyfill.js',
      './index.js'
    ],
    ...
    preprocessors: {
      './index.js': ['webpack', 'sourcemap'],
      '[require.resolve(chai-as-promised)]': ['webpack']
    },

- Modify `webpack.test.conf.js`

    module: {
      rules: utils.styleLoaders().concat([
        {
          test: require.resolve('chai-as-promised'),
          use: 'babel-loader'
        }
      ])
    },
