# b3-info-check
> Aplicação Web que mostra o valor de no máximo 5 ativos, por limitações da API, da b3 em um determinado período.

### Regras de negócio e funcionamento geral

Aplicação deve ser capaz de exibir um form, que quando preenchido corretamente, mostra os valores de determinados ativos selecionados em um período de tempo estabelecido. O form possui um campo de texto, para digitar a identificação de ativos, e 2 campos de data, para indicar as datas inicial e final. Caso o campo de texto seja deixado em branco, ativos inválidos sejam digitados, ou as datas sejam preenchidas incorretamente, uma mensagem de erro será exibida. Todos os campos são classificados como **required**.

### Como instalar

Aplicação foi desenvolvida utilizando a última versão do node estável, a 16.15LTS. 

Após instalar o node, as dependências devem ser instaladas executando `npm install` na raiz do projeto

Para rodar o projeto, execute `npm run dev` na raiz. Isso irá executar o backend e o frontend simultaneamente. 

O backend foi escrito em node e express; o frontend em react e javascript.
