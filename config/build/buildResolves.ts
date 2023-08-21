import webpack from 'webpack'

export default function buildResolves(): webpack.ResolveOptions {
    return(
        {
            extensions: ['.tsx', '.ts', '.js'],
        }
    )
}