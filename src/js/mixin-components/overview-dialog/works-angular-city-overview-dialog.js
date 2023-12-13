import $ from "jquery";
import { Paths, Selectors } from "../../static/constants";
import { OverviewDialog } from "../overview-dialog";
export class WorksAngularCityOverviewDialog extends OverviewDialog {
    constructor() {
        super(Selectors.DIALOG_WORKS_ANGULAR_CITY, "Angular City", [
            { folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "16.png", title: "Screenshot" },
            { folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "15.png", title: "Screenshot" },
            { folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "02.png", title: "Map View" },
            { folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "10.png", title: "Screenshot" },
            { folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "11.png", title: "Screenshot" },
            { folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "12.png", title: "Screenshot" },
            { folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "13.png", title: "Screenshot" },
            { folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "14.png", title: "Screenshot" },
            { folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "17.png", title: "Screenshot" },
            { folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "18.png", title: "Screenshot" },
            { folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "19.png", title: "Screenshot" },
            { folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "20.png", title: "Screenshot" },
            { folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "21.png", title: "Screenshot" },
            { folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "22.png", title: "Screenshot" },
            { folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "23.png", title: "Screenshot" },
            { folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "24.png", title: "Screenshot" },
            { folderPath: `${Paths.IMG_WORKS_ANGULAR_CITY}`, imageName: "25.png", title: "Screenshot" },
        ]);
    }
    buildBody() {
        const $body = $(`<div>`)
            .append($(`<p>`)
            .append(`Please enjoy the view of the city 
                    from the screenshots above.<br>`))
            .append($(`<h2>`)
            .append(`Overview`))
            .append($(`<p>`)
            .append(`Over the course of 2 years, 
                    Angular City bloomed to its shape
                    as dwellings and flats fell in places
                    around the backbone of this city - 
                    rail-tracks.<br><br>

                    Being heavily inspired from 
                    modern Japanese metropolis and suburbs,
                    this city has the prominent key aesthetics 
                    achieved by the usages of
                    self-made building textures, 
                    as well as assets borrowed from RealTrainMod's
                    community-made addons
                    like vending machines, various vehicle props, 
                    steel pipes, signboards and scaffoldings.<br><br>

                    Unlike any typical commuter train travel,
                    the positioning of the train tracks in Angular City
                    brings the riders as closely
                    to the nearby structures as possible,
                    so that the transitions between different precincts
                    as the train shifts its place
                    adds up to the immersion.<br><br>

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
                    number of storeys and functions.<br>
                    ~~300++ chunks in length of standard gauge tracks laid and partially electrified.<br>
                    3 stations built (all accessible by wheelchair).<br>
                `))
            .append($(`<h3>`)
            .append(`Major Mods Used (dependencies non-inclusive)`))
            .append($(`<h4>`)
            .append(`For Building Blocks and Textures`))
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
                    - Many, many RTM addons built by passionate community members:<br>
                    &emsp;(<a href="https://rtmaddon-search.com/">https://rtmaddon-search.com/</a>)<br>
                    &emsp;&emsp;- Train models by Triple-Zeta(瀬田車両)<br>
                    &emsp;&emsp;- Train models by @aomiya3000(戸波重工)<br>
                    &emsp;&emsp;- Train models by @minatosyaryo(水音車両)<br>
                    &emsp;&emsp;- Train models by @ZZZgundam2001<br>
                    &emsp;&emsp;- Train models and vehicular props by @seiyassaMC(筑紫車輌)<br>
                    &emsp;&emsp;- JNR Signboard by Pawe<br>
                    &emsp;&emsp;- nabe_signal (Train signaling) by @team_NABE<br>
                    &emsp;&emsp;- Saracalia's Pack (Road structures) by Saracalia<br>
                    &emsp;&emsp;- GrilledBeefPack (Various structures) by @ruthenium_mola2(七色重工業)<br>
                    &emsp;&emsp;- Variety by @Yuzuho_RTM(柚穂車輌)<br>
                    &emsp;&emsp;- Variety by @hi03(城田重工)<br>
                    &emsp;&emsp;- Variety by @hojyo_michiru(宝条工廠)<br>
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
