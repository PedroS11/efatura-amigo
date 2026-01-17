import { CATEGORY_BUTTONS_MAPPING, COLUMNS_MAPPING } from "./constants";
import { mapCompanyToButton } from "./helpers";



const selectCategories = () => {
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
        }
    }
}

selectCategories()

document.addEventListener(
    'click',
    function (e) {
        // @ts-ignore
        const anchor = e.target.closest('.dataTables_paginate a');
        if (anchor) {
            const li = anchor.closest('li');

            // Ignore active or disabled pagination items
            if (li.classList.contains('active') || li.classList.contains('disabled')) {
                return;
            }
            selectCategories()
        }
    },
    true
);
