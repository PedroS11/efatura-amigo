import { CATEGORY_BUTTONS_MAPPING, COLUMNS_MAPPING, PROFESSIONAL_BUTTONS_MAPPING } from "./constants";
import { mapCompanyToButton } from "./helpers";

const table: Element = document.querySelector("#listaPendencias > tbody")

if (table?.childElementCount > 0) {
    for (let item of table.children) {
        const company: string = item.firstChild.textContent.trim()

        // Click on the expected category
        const buttonMapped: CATEGORY_BUTTONS_MAPPING | undefined = mapCompanyToButton(company)
        if (buttonMapped !== undefined) {
            const categoryButtons = item.children[COLUMNS_MAPPING.CATEGORY_BUTTONS_POSITION]!.children[0];

            // @ts-ignore
            categoryButtons.children[buttonMapped]!.click()
        }

        // Set expense as not professional
        const professionalButtons = item.children[COLUMNS_MAPPING.PROFESSIONAL_BUTTONS_POSITION].children[0]
        const naoButton = professionalButtons.children[PROFESSIONAL_BUTTONS_MAPPING.NAO]
        
        // @ts-ignore
        naoButton.click()
    }
}
