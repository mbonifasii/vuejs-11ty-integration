
const path = require("path")

const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = (env, argv) => {
    return {
        entry: "./src/scripts/main.js",
        //{
            // index: "./src/scripts/main.js",
            // login: "./src/scripts/login.js"
        //},
        output: {
            path: path.resolve( __dirname, "dist/scripts" ),
            filename: "main.js"
        },

        mode: env.development ? "development" : "production",

        resolve: {
            alias: {
                vue: "vue/dist/vue.js"
            }
        },

        module: {
            rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            }]
        },

        plugins: [
            new VueLoaderPlugin()
        ]
    }
}