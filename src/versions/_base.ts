import {SemVer, gt, lt, eq} from "semver"

export default class LintVersion {
	minimum: SemVer|null
	maxiumum: SemVer|null
	exact: SemVer|null

	matches(version: SemVer): boolean {
		if (this.exact !== undefined){
			return eq(version, this.exact)
		}

		if (this.minimum !== undefined && lt(version, this.minimum)){
			return false
		}
		if (this.maxiumum !== undefined && gt(version, this.minimum)){
			return false
		}

		return true
	}

	async setup(version: SemVer, platform: NodeJS.Platform){
		throw "Not Implemented"
	}

	getCodeDownloadURL(version: SemVer): string {
		return `https://github.com/FPtje/GLuaFixer/archive/refs/tags/${version}.zip`
	}
}
