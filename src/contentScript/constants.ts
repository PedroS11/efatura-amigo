export enum BUTTONS_MAPPING {
    "Saude",
    "Ginasio",
    "Educacao",
    "Imoveis",
    "Lares",
    "Outros",
    // Number 6 is a <p> tag
    "Reparacao Automovel" = 7,
    "Reparacao Motas",
    "Alimentacao/Hotelaria",
    "Cabeleireiro",
    "Animais de Estimacao",
    "Transportes"
}

export const SAUDE_KEYWORDS = ["hospital", "farmacia", "saude"];
export const OUTROS_KEYWORDS = ["sonae", "continente", "supermercado", "auchan", "pingo doce", "lidl", "combusti"]
export const ALIMENTACAO_HOTELARIA_KEYWORDS = ["restaurante", "restauração", "hotelaria"]
export const TRANSPORTES_KEYWORDS = ["metro", "comboio"]
export const CABELEIREIRO_KEYWORDS = ["cabeleireiro"]
export const REPARACAO_AUTOMOVEL_KEYWORDS = ["automóvel"]

export const EXACT_COMPANIES_MAPPING = [
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
        button: BUTTONS_MAPPING["Alimentacao/Hotelaria"]
    }
]