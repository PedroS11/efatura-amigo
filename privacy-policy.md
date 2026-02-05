Política de Privacidade - Efatura Amigo

Esta política explica como a extensão trata as informações ao interagir com o portal e-fatura.

1. Recolha e Utilização de Dados

Para fornecer a categoria de CAE correta para cada fatura, a extensão lê o NIF do comerciante presente na página do portal e-fatura e envia-o para a nossa API.

- Dados Transmitidos: Apenas o NIF do comerciante (entidade terceira).

- Finalidade: Identificar a categoria fiscal correspondente (CAE) e devolvê-la à interface do utilizador.

- Não Recolha de Dados Pessoais: A extensão não recolhe, não lê e não transmite o NIF do utilizador, o valor das faturas, nomes, endereços ou qualquer outra informação pessoal identificável.

2. Armazenamento e Partilha

- Armazenamento: Os NIFs dos comerciantes enviados para a API são utilizados apenas para a consulta em tempo real. Não mantemos registos (logs) que associem estes NIFs a um utilizador específico.

- Partilha: Não partilhamos, vendemos ou alugamos quaisquer dados a terceiros. Não utilizamos os dados para fins publicitários ou profiling.

3. Segurança

A comunicação entre a extensão e a nossa API é realizada exclusivamente através de protocolos seguros (HTTPS) para garantir a integridade dos dados durante o trânsito.

4. Permissões do Chrome

A extensão solicita permissão para ler o conteúdo da página faturas.portaldasfinancas.gov.pt estritamente para extrair os NIFs dos comerciantes e injetar a informação da categoria.