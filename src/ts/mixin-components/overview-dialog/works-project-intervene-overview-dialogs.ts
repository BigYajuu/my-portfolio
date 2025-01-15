import $ from "jquery";
import { Paths, Selectors } from "../../static/constants";
import { OverviewDialog } from "../overview-dialog";

export class WorksProjectInterveneOverviewDialog extends OverviewDialog {
    constructor() {
        super(
            Selectors.DIALOG_WORKS_PROJECT_INTERVENE,
            "FocusNPlay",
            [
                {folderPath: `${Paths.IMG_WORKS_PROJECT_INTERVENE}`, imageName: "01.png", title: "Logo"},
                {folderPath: `${Paths.IMG_WORKS_PROJECT_INTERVENE}`, imageName: "02.png", title: "A Peek on Styles"},
            ]
        );
    }

    protected buildBody(): JQuery<HTMLElement> {
        const $body = $(`<div>`)
            .append($(`<h2>`)
                .append(`Overview`))
            .append($(`<p>`)
                .append(`Introducing FocusNPlay, an app that helps users to focus effortlessly
                    through pomorodo techniques.`))
            .append($(`<h3>`)
                .append(`Available on Google Play and Product Hunt.<br>`))
            .append($(`<p>`))
                .append(`Link to Official Website: 
                    <a target="_blank" href="https://focusnplay.com/" title="To Official Website">
                        https://focusnplay.com/
                    </a><br>
                    Link to FocusNPlay on Product Hunt: 
                    <a target="_blank" href="https://www.producthunt.com/products/focusnplay/launches" title="To Product Hunt Page">
                        https://www.producthunt.com/products/focusnplay/launches
                    </a><br>
                    Link to FocusNPlay on Google Play: 
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.focusnplay.phasetimer" title="To Official Website">
                        https://play.google.com/store/apps/details?id=com.focusnplay.phasetimer
                    </a><br>`);
        return $body;
    }
}