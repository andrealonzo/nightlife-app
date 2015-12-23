module.exports = {
    entry: {
        login:"./app/src/components/Login.jsx",
        dashboard:"./app/src/components/Dashboard.jsx",
        vote:"./app/src/components/Vote.jsx",
        main:"./app/src/components/Main.jsx"
    },
    output: {
        path: __dirname,
        filename: "./public/[name]Bundle.js"
    },
     module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};