import { BuildOptions } from "./types/config";
import {buildPlugins} from "./buildPlugins";
import buildLoaders from "./buildLoaders";
import buildResolves from "./buildResolves";
import path from "path";
import webpack from "webpack";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration{

    const {paths, mode} = options

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
            plugins: buildPlugins(options)
        }
    )
}