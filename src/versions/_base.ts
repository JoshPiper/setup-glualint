import {SemVer, gt, lt, eq} from "semver"
import {downloadTool, extractZip} from "@actions/tool-cache"

export default class LintVersion {
	static minimum: SemVer|null
	static maxiumum: SemVer|null
	static exact: SemVer|null

	static matches(version: SemVer): boolean {
		if (this.exact !== null){
			return eq(version, this.exact)
		}

		if (this.minimum !== null && lt(version, this.minimum)){
			return false
		}
		if (this.maxiumum !== null && gt(version, this.minimum)){
			return false
		}

		return true
	}

	static async setup(version: SemVer, platform: NodeJS.Platform){
		throw "Not Implemented"
	}

	static async download(version: SemVer): Promise<string> {
		const downloadURL = this.getCodeDownloadURL(version)
		const downloadPath = await downloadTool(downloadURL)
		const downloadFolder = await extractZip(downloadPath)
		const downloadSubfolder = this.getInternalFolder(version)

		return `${downloadFolder}`
	}

	static getCodeDownloadURL(version: SemVer): string {
		return `https://github.com/FPtje/GLuaFixer/archive/refs/tags/${version}.zip`
	}

	static getInternalFolder(version: SemVer): string {
		return `GluaFixer-${version}`
	}
}
