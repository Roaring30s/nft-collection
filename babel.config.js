module.exports = function (api) {
    api.cache(true);
    const isTest = api.env('test');
    return {
        presets: [['@babel/preset-env', {targets: {node: 'current'}}], '@babel/preset-typescript'],
        plugins: [
            [
                "module-resolver",
                {
                    alias: {
                        // This needs to be mirrored in tsconfig.json & jest config module mapper
                        
                        components: "./src/components",
                        features: "./src/features",
                        core: "./src/core",
                        assets: "./src/assets",
                        utils: "./src/utils",
                    },
                },
                
            ],
            "@babel/plugin-syntax-jsx"
        ],
    }
}