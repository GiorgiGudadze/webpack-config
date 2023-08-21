import { BuildPath } from "./config/build/types/config";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import path from "path";

const paths: BuildPath = {
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	build: path.resolve(__dirname, 'bundle'),
	html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = 'development'
const isDev = mode === 'development'

const config = buildWebpackConfig({
	mode: 'development',
	paths,
	isDev
})

export default config;