import {SemVer} from "semver"
import LintVersion from "./_base";
import {downloadTool, extractZip} from "@actions/tool-cache"
import {execSync} from "child_process";

export default class Version1p1p0 extends LintVersion {
    exact = new SemVer("1.1.0")

    static async setup(version, platform){
        const downloadURL = this.getCodeDownloadURL(version)
        console.log(`downloading ${downloadURL}`)
        const downloadPath = await downloadTool(downloadURL)
        console.log(`downloaded ${downloadPath}`)
        const downloadFolder = await extractZip(downloadPath)
        console.log(`extracted ${downloadFolder}`)
        console.log(execSync(`ls ${downloadFolder}`))
    }
}
