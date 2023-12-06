import { Paths, Selectors } from "../../static/constants";
import { OverviewDialog } from "../overview-dialog";
export class WorksProjectInterveneOverviewDialog extends OverviewDialog {
    constructor() {
        super(Selectors.DIALOG_WORKS_PROJECT_INTERVENE, "Project Intervene (Provisional)", [
            { path: `${Paths.IMG_WORKS}project-intervene-1.png`, title: "Logo" },
            { path: `${Paths.IMG_WORKS}project-intervene-2.png`, title: "A Sneakpeek" },
            { path: `${Paths.IMG_WORKS}project-intervene-1.png`, title: "Logo" },
            { path: `${Paths.IMG_WORKS}project-intervene-2.png`, title: "A Sneakpeek" },
        ]);
    }
}
