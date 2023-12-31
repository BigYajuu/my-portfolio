import $ from "jquery";
import { Paths, Selectors } from "../../static/constants";
import { OverviewDialog } from "../overview-dialog";
export class WorksETextureOverviewDialog extends OverviewDialog {
    constructor() {
        super(Selectors.DIALOG_WORKS_E_TEXTURE, "E-Texture", [
            { folderPath: `${Paths.IMG_WORKS_E_TEXTURE}`, imageName: "02.png", title: "Test Showcase" },
            { folderPath: `${Paths.IMG_WORKS_E_TEXTURE}`, imageName: "03.png", title: "Test Showcase" },
            { folderPath: `${Paths.IMG_WORKS_E_TEXTURE}`, imageName: "04.png", title: "Angular City" },
            { folderPath: `${Paths.IMG_WORKS_E_TEXTURE}`, imageName: "05.png", title: "Angular City" },
            { folderPath: `${Paths.IMG_WORKS_E_TEXTURE}`, imageName: "06.png", title: "Angular City" },
            { folderPath: `${Paths.IMG_WORKS_E_TEXTURE}`, imageName: "07.png", title: "Angular City" },
        ]);
    }
    buildBody() {
        const $body = $(`<div>`)
            .append($(`<h2>`)
            .append(`Overview`))
            .append($(`<p>`)
            .append(`As a part of the major scheme 
                    to build a railway-themed city in Minecraft,
                    I made this mod extension 
                    for RealTrainMod - a popular railway mod 
                    made by a Japanese developer.<br><br>

                    It covers a wide range of signboards, 
                    for various uses
                    and it is mainly used for guiding riders
                    within the station perimeters
                    to their destinations.<br><br>

                    The effects of these signboard placements 
                    can be seen in the screenshots above.<br>
                `))
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
