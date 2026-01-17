import { CATEGORY_BUTTONS_MAPPING, COLUMNS_MAPPING } from "./constants";
import {hasActiveButton, mapCompanyToButton} from "./helpers";

const table = document.querySelector("#listaPendencias > tbody");

let tableObserver: MutationObserver | null = null;

const selectCategories = () => {
    // Pause observer to prevent re-triggering while it clicks buttons
    tableObserver?.disconnect();

    if (table?.childElementCount > 0) {
        for (let item of table.children) {
            // If the row already has a category selected, skip it
            if(hasActiveButton(item)) {
                continue
            }

            const company: string = item.firstChild.textContent.trim()

            // Click on the expected category
            const buttonMapped: CATEGORY_BUTTONS_MAPPING | undefined = mapCompanyToButton(company)
            if (buttonMapped !== undefined) {
                const categoryButtons = item.children[COLUMNS_MAPPING.CATEGORY_BUTTONS_POSITION]!.children[0];

                // @ts-ignore
                categoryButtons.children[buttonMapped]!.click()
            }
        }
    }

    // Re-enable observers
    if (table) {
        tableObserver?.observe(table, { childList: true, subtree: true });
    }
}

// Observe the table for content changes (triggered by pagination AJAX)
if (table) {
    tableObserver = new MutationObserver(() => {
        console.log("RENDER - table content changed")
        selectCategories()
    });
    tableObserver.observe(table, { childList: true, subtree: true });
}

selectCategories();