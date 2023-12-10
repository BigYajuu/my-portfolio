import $ from "jquery";
import { Paths, Selectors } from "../../static/constants";
import { OverviewDialog } from "../overview-dialog";

export class WorksEMCBHDOverviewDialog extends OverviewDialog {
    constructor() {
        super(
            Selectors.DIALOG_WORKS_EMCB_HD,
            "EMCB HD",
            [
                {path: `${Paths.IMG_WORKS}emcb-hd-1.png`, title: "Logo"},
                {path: `${Paths.IMG_WORKS}emcb-hd-2.png`, title: "v1.1 Update"},
                {path: `${Paths.IMG_WORKS}emcb-hd-3.png`, title: "v1.2 Update"},
                {path: `${Paths.IMG_WORKS}emcb-hd-4.png`, title: "v1.0 Bricks Showcase"},
                {path: `${Paths.IMG_WORKS}emcb-hd-5.png`, title: "v1.0 Wood Showcase"},
                {path: `${Paths.IMG_WORKS}emcb-hd-6.png`, title: "v1.0 Tile Showcase"},
                {path: `${Paths.IMG_WORKS}emcb-hd-7.png`, title: "v1.0 Pavement Showcase"},
                {path: `${Paths.IMG_WORKS}emcb-hd-8.png`, title: "v1.0 Test Environment Demo (w/ other mods)"},
                {path: `${Paths.IMG_WORKS}emcb-hd-9.png`, title: "Promotional Image for Reverse Compatibility Release"},
            ]
        );
    }

    protected buildBody(): JQuery<HTMLElement> {
        const $body = $(`<div>`)
            .append($(`<h2>`)
                .append(`Overview`))
            .append($(`<p>`)
                .append(`The advent of all EMCB releases stems from this project.<br><br>
                    EMCB HD has a collection of decorative blocks with high-resolution textures,
                    and it is intended to be used in creative projects within Minecraft worlds
                    by simulating real-life, metropolitan-like environment.<br><br>
                    The blocks came in different textures, colours and materials: 
                    bricks, wood, tiles, metals, walls and much more. These textures would also
                    be featuring in special blocks like staircases and slabs.<br>
                    `))
            .append($(`<h2>`)
                .append(`History`))
            .append($(`<p>`)
                .append(`I was struggling to implement realistic textures 
                    to my city project,
                    as what was offered by the mod community 
                    was scarce.
                    The undesired set of circumstances 
                    led to the creation of EMCB HD for Minecraft version 1.12.2
                    on August 4th, 2020.<br>`))
            .append($(`<h3>`)
                .append(`Build 1.0`))
            .append($(`<p>`)
                .append(`As the first release of EMCB HD came to fruition, 
                    a mere number of no more than 100 block styles
                    were featured. These blocks did extend the world's experience 
                    by a commendable extent, but the limited range of 
                    all possible permutations/combinations of the block placements
                    struggle to catch on as the world expands.<br>`))
            .append($(`<h3>`)
                .append(`An Improved EMCB`))
            .append($(`<p>`)
                .append(`Released on 27-Dec-2020, Update v1.1 
                    featured the added support on Minecraft version
                    1.14.4, 1.15.2 and 1.16.4, unveiling a new set of 156 blocks 
                    in the hope of further increasing the range of 
                    new structural designs. Still, this update came with many
                    over-saturated textures that were too impractical.<br><br>
                    The evaluation also showed that a much sterner reference 
                    on real-life examples must be made in the coming update.<br>`))
            .append($(`<h3>`)
                .append(`The Final "Big" Piece`))
            .append($(`<p>`)
                .append(`Prior to the development of the final version of EMCB,
                    I sought serious notes 
                    on how the real-life surface would look like.
                    And for that I would mimic the walls and tiles 
                    from modern Japan, 
                    as well as many exuberant European architectures. 
                    I also did my research on how 
                    to maximize the colour combinations 
                    and came up with separating the palette into 
                    tinted, toned, shaded and special colours, 
                    bringing in more variety into play.
                    Surveys were also used to better appeal to
                    what the fans really wanted in the next update.<br><br> 
                    The finalized version 1.2 released on 28-Jul-2021 
                    has brought forth tremendous improvements
                    on how the world can be built, 
                    with staggering 680+ new blocks 
                    and a new colour system.<br>
                    `))
            .append($(`<h2>`)
                .append(`Download`))
            .append($(`<p>`)
                .append(`Available on CurseForge and Planet Minecraft.<br>
                    Total downloads (on 7-Dec-2023): <b>~15000</b><br><br>
                    Link to CurseForge page: 
                    <a target="_blank" href="https://www.curseforge.com/minecraft/mc-mods/essential-modern-construction-block-hd-emcb-hd" title="To CurseForge Page">
                        https://www.curseforge.com/minecraft/mc-mods/essential-modern-construction-block-hd-emcb-hd
                    </a><br>
                    Link to Planet Minecraft page: 
                    <a target="_blank" href="https://www.planetminecraft.com/mod/essential-modern-construction-block-hd-emcb-hd-for-creative-constructions/" title="To Planet Minecraft Page">
                        https://www.planetminecraft.com/mod/essential-modern-construction-block-hd-emcb-hd-for-creative-constructions/
                    </a>`))
        return $body;
    }
}