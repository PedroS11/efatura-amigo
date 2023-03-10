enum BUTTONS_MAPPING {
    "Saude",
    "Ginasio",
    "Educacao",
    "Imoveis",
    "Lares",
    "Outros",
    "IGNORE_BECAUSE_ITS_A_P_TAG",
    "Reparacao Automovel",
    "Reparacao Motas",
    "Alimentacao",
    "Cabeleireiro",
    "Animais de Estimacao",
    "Transportes"
}

const SAUDE_KEYWORDS = ["hospital", "farmacia", "saude"];
const OUTROS_KEYWORDS = ["sonae", "continente", "supermercado", "auchan", "pingo doce", "lidl", "combusti"]
const ALIMENTACAO_KEYWORDS = ["restaurante"]
const TRANSPORTES_KEYWORDS = ["metro", "comboio"]
const CABELEIREIRO_KEYWORDS = ["cabeleireiro"]

const EXACT_COMPANIES_MAPPING = [
    {
        company: "503933813 - Infraestruturas de Portugal, S.A.",
        button: BUTTONS_MAPPING.Outros
    },
    {
        company: "504296434 - Municipio da Trofa",
        button: BUTTONS_MAPPING.Ginasio
    },
    {
        company: "244164754 - Ana Cristina da Costa Marques",
        button: BUTTONS_MAPPING.Alimentacao
    }
]

const keywordMatches = (company: string, keywords: string[]): boolean => keywords.some((word: string) => company.includes(word))

const similarMappings = (company: string): BUTTONS_MAPPING => {
    const companyLowercase = company.toLowerCase()

    if (keywordMatches(companyLowercase, SAUDE_KEYWORDS)) {
        return BUTTONS_MAPPING.Saude
    } else if (keywordMatches(companyLowercase, ALIMENTACAO_KEYWORDS)) {
        return BUTTONS_MAPPING.Alimentacao
    } else if (keywordMatches(companyLowercase, TRANSPORTES_KEYWORDS)) {
        return BUTTONS_MAPPING.Transportes
    } else if (keywordMatches(companyLowercase, CABELEIREIRO_KEYWORDS)) {
        return BUTTONS_MAPPING.Cabeleireiro
    } else if (keywordMatches(companyLowercase, OUTROS_KEYWORDS)) {
        return BUTTONS_MAPPING.Outros
    } else return BUTTONS_MAPPING.Outros
}


const mapCompanyToButton = (company: string): number => {
    const found = EXACT_COMPANIES_MAPPING.find((item) => item.company === company)

    if (found) {
        return found.button
    }

    return similarMappings(company)
}


const table: Element = document.querySelector("#listaPendencias > tbody")

if (table?.childElementCount > 0) {
    for (let item of table.children) {
        const company: string = item.firstChild.textContent.trim()

        const buttonMapped: BUTTONS_MAPPING = mapCompanyToButton(company)

        // @ts-ignore
        const buttons = item.lastChild!.children[0];
        buttons.children[buttonMapped].click()
    }
}
