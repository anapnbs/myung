const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// File Paths
const sourceFolder = 'src',
    buildFolder = 'myung-theme',
    PATHS = {
        contentBase: __dirname + buildFolder,
        build: path.resolve(__dirname, buildFolder),
        src: path.resolve(__dirname, sourceFolder),
        node: path.resolve(__dirname, 'node_modules'),
        appJS: path.resolve(__dirname, `${sourceFolder}/js/app.js`)
    };

// Development Server Options
const devServerOptions = {
    contentBase: PATHS.contentBase
};

// Plugins
const CopyImage = [
    { from: `${PATHS.src}/images/`, to: `${PATHS.build}/assets/images/` }
];

const CopyFont = [
    { from: PATHS.src + '/webfonts/', to: PATHS.build + '/assets/webfonts/' }
];

// const extractCSS = new ExtractTextPlugin('assets/css/app.bundle.css');

const fileOptions = {
    'css': ['app.bundle.css'],
    'js': ['app.bundle.js'],
    'chunks': {
        'head': {
            'entry': '',
            'css': 'app.bundle.css'
        },
        'body': {
            'entry': 'app.bundle.js',
            'css': ''
        }
    }
};

const IndexHtml = {
    filename: 'index.html',
    template: `${PATHS.src}/index.html`,
    'files': fileOptions
};

const IntroHtml = {
    filename: 'intro.html',
    template: `${PATHS.src}/intro.html`,
    'files': fileOptions
};

const PageHtml = {
    filename: 'page.html',
    template: `${PATHS.src}/page.html`,
    'files': fileOptions
};

const CounselHtml = {
    filename: 'counsel.html',
    template: `${PATHS.src}/counsel.html`,
    'files': fileOptions
};

const ReviewlHtml = {
    filename: 'review.html',
    template: `${PATHS.src}/review.html`,
    'files': fileOptions
};

const pluginList = [
    new ExtractTextPlugin('assets/css/app.bundle.css'),
    // extractCSS,
    new CopyWebpackPlugin(CopyImage),
    // new CopyWebpackPlugin(CopyFont),
    new HtmlWebpackPlugin(IndexHtml),
    new HtmlWebpackPlugin(IntroHtml),
    new HtmlWebpackPlugin(CounselHtml),
    new HtmlWebpackPlugin(ReviewlHtml),
    new HtmlWebpackPlugin(PageHtml)
];

// Modules
const js = {
    loader: 'babel-loader',
    test: /\.js$/,
    exclude: /node_modules/
};

const styles = {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader']
    })
};

const sass = {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
    })
};

const images = {
    test: /\.(gif|png|jpe?g|svg)$/i,
    use: [
        'file-loader?name=assets/images/[name].[ext]',
        {
            loader: 'image-webpack-loader',
            options: {
                mozjpeg: {
                    progressive: true,
                    quality: 65
                },
                optipng: {
                    enabled: false,
                },
                pngquant: {
                    quality: '65-90',
                    speed: 4
                },
                gifsicle: {
                    interlaced: false,
                }
            }
        }
    ]
};

module.exports = {
    entry: PATHS.appJS,
    output: {
        path: PATHS.build,
        filename: 'assets/js/app.bundle.js'
    },
    mode: 'development',
    devServer: devServerOptions,
    module: {
        rules: [js, styles, sass, images]
    },
    plugins: pluginList
}