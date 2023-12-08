import $ from "jquery";
import { Paths, Selectors } from "../../static/constants";
import { OverviewDialog } from "../overview-dialog";
export class WorksETextureOverviewDialog extends OverviewDialog {
    constructor() {
        super(Selectors.DIALOG_WORKS_E_TEXTURE, "E-Texture", [
            { path: `${Paths.IMG_WORKS}e-texture-2.png`, title: "Showcase 1" },
            { path: `${Paths.IMG_WORKS}e-texture-3.png`, title: "Showcase 2" },
            { path: `${Paths.IMG_WORKS}e-texture-4.png`, title: "Real World Demonstration" },
            { path: `${Paths.IMG_WORKS}e-texture-5.png`, title: "All Signs" },
        ]);
    }
    buildBody() {
        const $body = $(`<div>`)
            .append($(`<h2>`)
            .append(`Overview`))
            .append($(`<p>`)
            .append(`As a part of the plan 
                    to build a railway-themed city in Minecraft,
                    I made this mod extension 
                    for RealTrainMod - a popular railway mod 
                    made by a Japanese developer.<br><br>
                    It covers a wide range of signboards, 
                    and it is used to simulate pedestrian experience 
                    in Minecraft.<br>`))
            .append($(`<h2>`)
            .append(`Download`))
            .append($(`<p>`)
            .append(`Available on Planet Minecraft.<br>
                    Requires RealTrainMod as core mod<br>
                    Link: 
                    <a target="_blank" href="https://www.planetminecraft.com/mod/rtm-add-ons-e-texture-extra-signboard-textures-for-realtrainmod/" title="To Planet Minecraft Page">
                    https://www.planetminecraft.com/mod/rtm-add-ons-e-texture-extra-signboard-textures-for-realtrainmod/
                    </a>`));
        return $body;
    }
}