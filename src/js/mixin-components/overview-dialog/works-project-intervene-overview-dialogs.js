import $ from "jquery";
import { Paths, Selectors } from "../../static/constants";
import { OverviewDialog } from "../overview-dialog";
export class WorksProjectInterveneOverviewDialog extends OverviewDialog {
    constructor() {
        super(Selectors.DIALOG_WORKS_PROJECT_INTERVENE, "Project Intervene (Provisional)", [
            { path: `${Paths.IMG_WORKS_PROJECT_INTERVENE}01.png`, title: "Logo" },
            { path: `${Paths.IMG_WORKS_PROJECT_INTERVENE}02.png`, title: "A Peek on Styles" }
        ]);
    }
    buildBody() {
        const $body = $(`<div>`)
            .append($(`<h2>`)
            .append(`Overview`))
            .append($(`<p>`)
            .append(`Project Intervene is a work-in-progress app
                    that aims to keep users from distracted by
                    other apps or websites at an alarmingly continuous period.`));
        return $body;
    }
}
