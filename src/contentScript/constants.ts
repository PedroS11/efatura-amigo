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

export const SAUDE_KEYWORDS = ["hospital", "farmacia", "farmácia", "saude", "saúde"];
export const OUTROS_KEYWORDS = ["sonae", "continente", "supermercado", "auchan", "pingo doce", "lidl", "mercadona", "combusti", "combustí"]
export const ALIMENTACAO_HOTELARIA_KEYWORDS = ["restaurante", "restauracao", "restauração", "hotelaria", "hotel"]
export const TRANSPORTES_KEYWORDS = ["metro", "comboio"]
export const CABELEIREIRO_KEYWORDS = ["cabeleireiro", "cabeleireira"]
export const REPARACAO_AUTOMOVEL_KEYWORDS = ["automovel", "automóvel", "oficina"]
export const ANIMAIS_KEYWORDS = ["veterinário", "veterinario"]

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