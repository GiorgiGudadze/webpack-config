import { BuildEnv, BuildPath } from "./config/build/types/config";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import path from "path";

export default (env:BuildEnv) =>{
	const paths: BuildPath = {
		entry: path.resolve(__dirname, 'src', 'index.ts'),
		build: path.resolve(__dirname, 'bundle'),
		html: path.resolve(__dirname, 'public', 'index.html')
	}
	
	const mode = env.mode || 'development'
	const isDev = mode === 'development'
	const port = env.port || 3000

	const config = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port
	})

	return config;
} 