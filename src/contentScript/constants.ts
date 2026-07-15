export enum CATEGORY_BUTTONS_MAPPING {
    "Saude",
    "Ginasio",
    "Educacao",
    "Imoveis",
    "Lares",
    "Outros",
    "Reparacao Automovel",
    "Reparacao Motas",
    "Alimentacao/Hotelaria",
    "Cabeleireiro",
    "Animais de Estimacao",
    "Transportes",
    "Jornais e Revista",
    "Comercio a retalho de livros",
    "Atividades artisticas e literarias",
    "Atividades dos museus e monumentos historicos"
}

export const SAUDE_KEYWORDS = ["hospital", "farmacia", "farmácia", "saude", "saúde"];
export const OUTROS_KEYWORDS = ["sonae", "continente", "supermercado", "auchan", "pingo doce", "lidl", "mercadona", "combusti", "combustí"]
export const ALIMENTACAO_HOTELARIA_KEYWORDS = ["restaurante", "restauracao", "restauração", "hotelaria", "hotel"]
export const TRANSPORTES_KEYWORDS = ["metro", "comboio", "transporte"]
export const CABELEIREIRO_KEYWORDS = ["cabeleireiro", "cabeleireira"]
export const REPARACAO_AUTOMOVEL_KEYWORDS = ["automovel", "automóvel", "oficina"]
export const ANIMAIS_KEYWORDS = ["veterinário", "veterinario"]
export const REVISTAS_JORNAIS_KEYWORDS = ["revista", "revistas", "jornal", "jornais"]

export const EXACT_COMPANIES_MAPPING = [
    {
        company: "504296434 - municipio da trofa",
        button: CATEGORY_BUTTONS_MAPPING.Ginasio
    },
    {
        company: "244164754 - ana cristina da costa marques",
        button: CATEGORY_BUTTONS_MAPPING["Alimentacao/Hotelaria"]
    }
]

export enum COLUMNS_MAPPING {
    CATEGORY_BUTTONS_POSITION = 5,
}
