import { CATEGORY_BUTTONS_MAPPING, COLUMNS_MAPPING } from "./constants";
import {hasActiveButton, mapCompanyToButton} from "./helpers";
import {searchNif} from "../be";

const table: Element = document.querySelector("#listaPendencias > tbody");

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
            const nif = company.split(" - ")?.[0]

            if(nif) {
                searchNif(nif).then((categoryFromBe) => {
                    let category: CATEGORY_BUTTONS_MAPPING | undefined = categoryFromBe || mapCompanyToButton(company);

                    console.log(nif, category);
                    if(category !== undefined) {
                        const categoryButtons = item.children[COLUMNS_MAPPING.CATEGORY_BUTTONS_POSITION]!.children[0];

                        // @ts-ignore
                        categoryButtons.children[category]!.click()
                    }
                })
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
        selectCategories()
    });
    tableObserver.observe(table, { childList: true, subtree: true });
}

selectCategories();