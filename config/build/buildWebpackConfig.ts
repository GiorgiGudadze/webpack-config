import { BuildOptions } from "./types/config";
import {buildPlugins} from "./buildPlugins";
import buildLoaders from "./buildLoaders";
import buildResolves from "./buildResolves";
import path from "path";
import webpack from "webpack";
import { buildDevServer } from "./buildDevserver";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration{

    const {paths, mode, port} = options

    return(
        {
            mode: mode,
            entry : paths.entry,
            module: {
                rules: buildLoaders(),
              },
            resolve: buildResolves(),
            output: {
                filename: '[name].[contenthash].js',
                path: paths.build,
                clean: true
            },
            plugins: buildPlugins(options),
            devtool: options.isDev ? 'inline-source-map' : undefined,
            devServer: options.isDev ? buildDevServer(options) : undefined
        }
    )
}