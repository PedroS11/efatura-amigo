import { BUTTONS_MAPPING } from "./constants";
import { mapCompanyToButton } from "./helpers";

const table: Element = document.querySelector("#listaPendencias > tbody")

if (table?.childElementCount > 0) {
    for (let item of table.children) {
        const company: string = item.firstChild.textContent.trim()

        const buttonMapped: BUTTONS_MAPPING | undefined = mapCompanyToButton(company)
        if (buttonMapped) {
            // @ts-ignore
            const buttons = item.lastChild!.children[0];

            buttons.children[buttonMapped].click()
        }
    }
}
