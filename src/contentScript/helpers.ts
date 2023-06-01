import {
    ALIMENTACAO_HOTELARIA_KEYWORDS,
    ANIMAIS_KEYWORDS,
    CATEGORY_BUTTONS_MAPPING,
    CABELEIREIRO_KEYWORDS,
    EXACT_COMPANIES_MAPPING,
    OUTROS_KEYWORDS,
    REPARACAO_AUTOMOVEL_KEYWORDS,
    SAUDE_KEYWORDS,
    TRANSPORTES_KEYWORDS,
    REVISTAS_JORNAIS_KEYWORDS
} from "./constants";

const keywordMatches = (company: string, keywords: string[]): boolean => keywords.some((word: string) => company.includes(word))

const similarMappings = (company: string): CATEGORY_BUTTONS_MAPPING | undefined => {

    if (keywordMatches(company, SAUDE_KEYWORDS)) {
        return CATEGORY_BUTTONS_MAPPING.Saude
    } else if (keywordMatches(company, ALIMENTACAO_HOTELARIA_KEYWORDS)) {
        return CATEGORY_BUTTONS_MAPPING["Alimentacao/Hotelaria"]
    } else if (keywordMatches(company, TRANSPORTES_KEYWORDS)) {
        return CATEGORY_BUTTONS_MAPPING.Transportes
    } else if (keywordMatches(company, CABELEIREIRO_KEYWORDS)) {
        return CATEGORY_BUTTONS_MAPPING.Cabeleireiro
    } else if (keywordMatches(company, OUTROS_KEYWORDS)) {
        return CATEGORY_BUTTONS_MAPPING.Outros
    } else if (keywordMatches(company, REPARACAO_AUTOMOVEL_KEYWORDS)) {
        return CATEGORY_BUTTONS_MAPPING["Reparacao Automovel"]
    } else if (keywordMatches(company, ANIMAIS_KEYWORDS)) {
        return CATEGORY_BUTTONS_MAPPING["Animais de Estimacao"]
    } else if (keywordMatches(company, REVISTAS_JORNAIS_KEYWORDS)) {
        return CATEGORY_BUTTONS_MAPPING["Jornais e Revista"]
    }
}

export const mapCompanyToButton = (company: string): number => {
    const companyLowercase = company.toLowerCase()

    const found = EXACT_COMPANIES_MAPPING.find((item) => item.company === companyLowercase)

    if (found) {
        return found.button
    }

    return similarMappings(companyLowercase)
}
