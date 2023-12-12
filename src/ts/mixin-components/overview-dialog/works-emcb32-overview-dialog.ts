import $ from "jquery";
import { Paths, Selectors } from "../../static/constants";
import { OverviewDialog } from "../overview-dialog";

export class WorksEMCB32OverviewDialog extends OverviewDialog {
    constructor() {
        super(
            Selectors.DIALOG_WORKS_EMCB32,
            "EMCB32",
            [
                {folderPath: `${Paths.IMG_WORKS_EMCB32}`, imageName: "03.png", title: "v1.1 Update"},
                {folderPath: `${Paths.IMG_WORKS_EMCB32}`, imageName: "04.png", title: "v1.2 Update"},
                {folderPath: `${Paths.IMG_WORKS_EMCB32}`, imageName: "05.png", title: "Test Demo 1 (w/ other mods)"},
                {folderPath: `${Paths.IMG_WORKS_EMCB32}`, imageName: "10.png", title: "Promotional Image for Reverse Compatibility"}
            ]
        );
    }

    protected buildBody(): JQuery<HTMLElement> {
        const $body = $(`<div>`)
            .append($(`<h2>`)
                .append(`Overview`))
            .append($(`<p>`)
                .append(`EMCB32 is a decorative Minecraft mod derived from EMCB HD 
                    that uses the same textures but in 32x32 resolution
                    in order to blend in more with vanilla graphics.<br><br>
                    Each release is done in parallel with its HD predecessor,
                    where user can switch between the two editions freely
                    long as the version number matches.<br><br>
                    See HD version for more stories behind this mod collection.<br>`))
            .append($(`<h2>`)
                .append(`Releases`))
            .append($(`<p>`)
                .append(`Every EMCB32 release syncs with EMCB HD, 
                    and likewise, it supports multiple Minecraft versions too.<br><br>
                    The latest release is v1.2.0. for 1.16.5 version of Minecraft.<br>`))
            .append($(`<h2>`)
                .append(`Download`))
            .append($(`<p>`)
                .append(`Available on CurseForge and Planet Minecraft.<br>
                    Total downloads (on 7-Dec-2023): <b>~13000</b><br><br>
                    Link to CurseForge page: 
                    <a target="_blank" href="https://www.curseforge.com/minecraft/mc-mods/essential-modern-construction-block-32px-edition" title="To CurseForge Page">
                        https://www.curseforge.com/minecraft/mc-mods/essential-modern-construction-block-32px-edition
                    </a><br>
                    Link to Planet Minecraft page: 
                    <a target="_blank" href="https://www.planetminecraft.com/mod/essential-modern-construction-block-32px-edition-emcb32-enhanced-creative-constructions/" title="To Planet Minecraft Page">
                        https://www.planetminecraft.com/mod/essential-modern-construction-block-32px-edition-emcb32-enhanced-creative-constructions/
                    </a>`))
        return $body;
    }
}