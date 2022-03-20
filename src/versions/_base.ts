import {SemVer, gt, lt, eq} from "semver"

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

	getCodeDownloadURL(version: SemVer): string {
		return `https://github.com/FPtje/GLuaFixer/archive/refs/tags/${version}.zip`
	}
}
