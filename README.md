# b3-info-check
> Aplicação Web que mostra o valor de no máximo 5 ativos, por limitações da API, da bolsa de valores em um determinado período.

### Regras de negócio e funcionamento geral

Aplicação deve ser capaz de exibir um form, que quando preenchido corretamente, mostra os valores de determinados ativos selecionados em um período de tempo estabelecido. O form possui um campo de texto, para digitar a identificação de ativos, e 2 campos de data, para indicar as datas inicial e final. Caso o campo de texto seja deixado em branco, ativos inválidos sejam digitados, ou as datas sejam preenchidas incorretamente, uma mensagem de erro será exibida. Todos os campos são classificados como **required**.

### Como instalar

Aplicação está desenvolvida utilizando a última versão do node estável, a 16.15LTS. 

Após instalar o node, as dependências devem ser instaladas executando `npm install` na raiz do projeto

Para rodar o projeto, execute `npm run dev`, a raiz do projeto. Isso irá executar o backend e o frontend simultaneamente. 

O backend foi escrito es node e express, o frontend em reac e javascript.

### Ajustes e TODO
Como o projeto ainda está em desenvolvimento, features novas serão adicionadas na lista ao longo do projeto
- [ ] Separar div do form e do gráfico
- [ ] Instalar e utilizar lib para a geração do gráfico
- [ ] Formatar os dados no frontend, para geração do gráfico
- [ ] Melhorar mensagens de erro no form
- [ ] Estilizar aplicação
