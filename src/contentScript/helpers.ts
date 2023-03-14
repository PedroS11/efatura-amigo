import {
    ALIMENTACAO_HOTELARIA_KEYWORDS,
    BUTTONS_MAPPING,
    CABELEIREIRO_KEYWORDS,
    EXACT_COMPANIES_MAPPING,
    OUTROS_KEYWORDS,
    REPARACAO_AUTOMOVEL_KEYWORDS,
    SAUDE_KEYWORDS,
    TRANSPORTES_KEYWORDS
} from "./constants";

const keywordMatches = (company: string, keywords: string[]): boolean => keywords.some((word: string) => company.includes(word))

const similarMappings = (company: string): BUTTONS_MAPPING => {
    const companyLowercase = company.toLowerCase()

    if (keywordMatches(companyLowercase, SAUDE_KEYWORDS)) {
        return BUTTONS_MAPPING.Saude
    } else if (keywordMatches(companyLowercase, ALIMENTACAO_HOTELARIA_KEYWORDS)) {
        return BUTTONS_MAPPING["Alimentacao/Hotelaria"]
    } else if (keywordMatches(companyLowercase, TRANSPORTES_KEYWORDS)) {
        return BUTTONS_MAPPING.Transportes
    } else if (keywordMatches(companyLowercase, CABELEIREIRO_KEYWORDS)) {
        return BUTTONS_MAPPING.Cabeleireiro
    } else if (keywordMatches(companyLowercase, OUTROS_KEYWORDS)) {
        return BUTTONS_MAPPING.Outros
    } else if (keywordMatches(companyLowercase, REPARACAO_AUTOMOVEL_KEYWORDS)) {
        return BUTTONS_MAPPING["Reparacao Automovel"]
    } else return BUTTONS_MAPPING.Outros
}

export const mapCompanyToButton = (company: string): number => {
    const found = EXACT_COMPANIES_MAPPING.find((item) => item.company === company)

    if (found) {
        return found.button
    }

    return similarMappings(company)
}
