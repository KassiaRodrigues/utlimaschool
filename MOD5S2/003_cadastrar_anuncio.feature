#language:pt
#HISTORIA DO USUARIO
Funcionalidade:
    Como Anunciante
    Quero publicar um anuncio do meu serviço
    Para Clientes os agendarem a realização do serviço

# Papeis de usuarios
    # Anunciante
    # Cliente

# Criterios de aceite
# 1 Garantir que o pagamento por dia ou horario ou semana ou mês sopoderão ser reservados pela periodicidade definido.
# 2 Garantir que o paramento gratuito não podera haver cobrança.
# 3 Garantir que o calculo do pagamento estara de acordo com a periodicidade definida.
# 4 Garantir que um anuncio despublicado não ficara visivel na listagem de anuncios.

# DOCUMENTAÇÃO EM BDD (GHERKIN) -> DADO QUANDO ENTÃO E


Contexto:
    Dado que o "Anunciante" tenha realizado cadastros
    E tenha realizado o login com sucesso

Cenario: Tentativa de cadastro de anuncio com campos obrigatorios em branco
    Quando o anunciante estiver cadastrando um anuncio
    E Não informar os outros campos obrigatorios
    Entao o sistema exibe uma mensagem de erro

Cenario: Cadastro de anuncio com uma periodicidade definida
    Quando o anunciante estiver cadastrando um anuncio
    E selecionar a periodicidade do tipo "dia" ou "horario" ou "semana" ou "mês"
    E informar os outros campos obrigatorios: tipo, nome, preço ....
    Entao o sistema exibe uma mensagem de sucesso
    E devera publicar o anuncio conforme a periodicidade definida.

Cenario: Permitir o cadastro de anuncio gratuito
    Quando o anunciante estiver cadastrando o anuncio
    E selecionar o tipo de pagamento como "gratuito"
    E informar os outros campos obrigatorios: tipo, nome, preço ....
    Entao o sistema exibe uma mensagem de sucesso
    E devera publicar o anuncio considerando o tipo de pagamento selecionado.

Contexto:
    Dado que o "anuncio" esteja publicado

Cenario: Verificar o calculo do pagamento de acordo com a periodicidade definida
    QUANDO o "cliente" for reservar o serviço
    E a periodicidade: "dia" ou "horario" ou "semana" ou "mês"
    E o "cliente" selecionar um ou mais periodos.
    Entao o sistema devera calcular o valor total do anuncio conforme a quantidade da periodicidade selecionada.

Cenario: Verificar o calculo do pagamento para o tipo de pagamento gratuito
    Quando o "cliente" for reservar o serviço
    E a periodicidade: "dia" ou "horario" ou "semana" ou "mês"
    E o "cliente" selecionar um ou mais periodos.
    Entao o sistema nao devera cobrar nenhum valor pelo serviço.

Cenario: Visibilidade do anuncio despublicado para Clientes na pagina inciial
    Quando o "cliente" acessar a pagina inicial
    Entao o sistema nao devera listar os anuncios

Cenario: Visibilidade do anuncio despublicado para Clientes no filtro de anuncios
    Quando o "cliente" acessar a pagina inicial
    Entao o sistema nao devera listar os anuncios despublicados.
