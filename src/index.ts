import Version1p1p0 from "./versions/1.1.0";

const core = require("@actions/core")
const tc = require("@actions/tool-cache")
const {SemVer, satisfies} = require("semver")

async function main(){
	let version = core.getInput('version', {required: false, trimWhitespace: true})
	// if (version === "" || version === null || version === undefined){
	// 	version = "1.16.1"
	// }
	version = "1.1.0"

	let platform
	switch (process.platform){
		case "win32":
			platform = "Windows"
			break
		case "linux":
			platform = "linux-stripped"
			break
		default:
			core.setFailed(`Unsupported Platform: ${process.platform}`)
			return 1
	}

	Version1p1p0.setup(new SemVer(version), process.platform)

	// if (!satisfies(version, ">=1.16.1")){
	// 	core.setFailed(`Minimum supported glualint is 1.16.1`)
	// 	return 1
	// }


	const downloadURL = `https://github.com/FPtje/GLuaFixer/releases/download/${version}/glualint-${version}-${platform}.zip`
	const downloadPath = await tc.downloadTool(downloadURL)
	const downloadFolder = await tc.extractZip(downloadPath)
	const downloadCache = await tc.cacheDir(downloadFolder, "glualint", version)
	core.addPath(downloadCache)

	return 0
}

main()
	.then((code) => process.exit(code))
