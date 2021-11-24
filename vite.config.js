import path from "path";
import { createVuePlugin } from "vite-plugin-vue2";
const pathSrc = path.resolve(__dirname, "./src");

export default ({ command }) => ({
    base: command === "serve" ? "" : "/build/",
    publicDir: "fake_dir",
    build: {
        outDir: "public/build",
        rollupOptions: {
            input: [
                "resources/js/app.js",
                "resources/scss/app.scss",
                "resources/scss/loader.css"
            ],
        },
    },
    // server: {
    //     strictPort: true,
    //     port: 3000
    // },
    css: {
        preprocessorOptions: {
          scss: { 
             additionalData: `@import "./resources/js/src/@core/scss/base/bootstrap-extended/include";` 
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources/js/src/"),
            "@themeConfig": path.resolve(
                __dirname,
                "resources/js/themeConfig.js"
            ),
            "@core": path.resolve(__dirname, "resources/js/src/@core"),
            "~@core": path.resolve(__dirname, "resources/js/src/@core"),
            "~": path.resolve(__dirname, "resources/js/src"),
            "@validations": path.resolve(
                __dirname,
                "resources/js/src/@core/utils/validations/validations.js"
            ),
            "@axios": path.resolve(__dirname, "resources/js/src/libs/axios"),
        },
    },
    plugins: [createVuePlugin()],

});
