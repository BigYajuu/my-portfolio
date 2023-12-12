import $ from "jquery";
import { Paths, Selectors } from "../../static/constants";
import { OverviewDialog } from "../overview-dialog";

export class WorksAngularCityOverviewDialog extends OverviewDialog {
    constructor() {
        super(
            Selectors.DIALOG_WORKS_ANGULAR_CITY,
            "Angular City",
            [
                {folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "16.png", title: "Screenshot"},
                {folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "15.png", title: "Screenshot"},
                {folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "02.png", title: "Map View"},
                {folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "10.png", title: "Screenshot"},
                {folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "11.png", title: "Screenshot"},
                {folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "12.png", title: "Screenshot"},
                {folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "13.png", title: "Screenshot"},
                {folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "14.png", title: "Screenshot"},
                {folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "17.png", title: "Screenshot"},
                {folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "18.png", title: "Screenshot"},
                {folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "19.png", title: "Screenshot"},
                {folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "20.png", title: "Screenshot"},
                {folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "21.png", title: "Screenshot"},
                {folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "22.png", title: "Screenshot"},
                {folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "23.png", title: "Screenshot"},
                {folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "24.png", title: "Screenshot"},
                {folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "25.png", title: "Screenshot"},
            ]
        );
    }

    protected buildBody(): JQuery<HTMLElement> {
        const $body = $(`<div>`)
            .append($(`<p>`)
                .append(`Please enjoy the view of the city 
                    from the screenshots above.<br>`))
            .append($(`<h2>`)
                .append(`Overview`))
            .append($(`<p>`)
                .append(`Over the course of 2 years, 
                    Angular City bloomed to its shape
                    as dwellings and flats fell in place,
                    surrounding the rail-tracks.<br><br>
                    The city is heavily inspired from 
                    modern Japanese cities, and it is
                    achieved through self-made textures, 
                    as well as assets borrowed from other mods.<br><br>
                    City planning and urban designs 
                    have been one of my favourite topics, 
                    and as such, building a city at this scale
                    has always been a great interest of mine.<br>
                `))
            .append($(`<h2>`)
                .append(`Composition`))
            .append($(`<h3>`)
                .append(`City`))
            .append($(`<p>`)
                .append(`
                    Land Area: ~~120*25 chunks<br>
                    Over 300 buildings/structures of various sizes, 
                    number of storeys and functions<br>
                    3 stations built. Standard Gauge.<br>
                `))
            .append($(`<h3>`)
                .append(`Major Mods Used (dependencies non-inclusive)`))
            .append($(`<h4>`)
                .append(`For Building Blocks and Extra Texture`))
            .append($(`<p>`)
                .append(`
                    - EMCB HD / EMCB32<br>
                    - E-Texture<br>
                    - Realistic Road Mod<br>
                    - Chisel and Bits<br>
                    - Decocraft<br>
                    - Forge Multipart<br>
                `))
            .append($(`<h4>`)
                .append(`For Railtracks, trains, city props, and special building structures`))
            .append($(`<p>`)
                .append(`
                    - RealTrainMod (and core NGTLib)<br>
                    - Many, many RTM addons built by passionate community members<br>
                `))
            .append($(`<h4>`)
                .append(`Construction Tools`))
            .append($(`<p>`)
                .append(`
                    - MCTE<br>
                `))
            .append($(`<h4>`)
                .append(`World Optimization`))
            .append($(`<p>`)
                .append(`
                    - BetterFps<br>
                `))
            .append($(`<h4>`)
                .append(`Quality-of-Life Enhancements`))
            .append($(`<p>`)
                .append(`
                    - Shoulder Surfing Reloaded<br>
                    - JourneyMap<br>
                    - Dynamic Surroundings<br>
                    - Better Foliage<br>
                `))
            .append($(`<h3>`)
                .append(`Shaders`))
            .append($(`<p>`)
                .append(`
                    - SEUS Renewed<br>
                    - SEUS v11<br>
                    - SEUS PTGI E12<br>
                `));
        return $body;
    }
}