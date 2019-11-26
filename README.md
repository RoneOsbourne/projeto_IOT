# Setup do projeto

1. Instale o Node
2. Instale o VS Code
3. Na pasta do projeto, execute o comando:

    npm install

4. Inicie o projeto com o comando:

    DEBUG=projeto:* npm start

GITHUB

CMD:

    entrar no Path do projeto
    git init (cria pasta oculta de controle arquivos, branchs, histórico, etc)
    git status (status dos arquivos do projeto - em vermelho, sem monitoramento)
    git add . (inicia monitoramento dos arquivos - fica verde)
    git status (verifica se arquivos foram adicionados com sucesso)
    git commit -m "Descrição do Commit" (cria commit das alterações)
    git status (verifica se todos foram commitados e estão sem nenhuma alteração)
    git remote add origin "endereço do repositório SSH do github" (especifica alterações para o diretório)
    git remote -v (verifica links do repositorio remoto. Fetch: busca atualizações. Push: envia)
    git push -u origin master (Envia as alterações)
    Se der erro (Ex: referencias de arquivos do git com local), colocar ""--force"
    git remote rm origin (retira vinculo do projeto com o repositorio, para informar novo repo para enviar)

-> Caso seja feito Download ou clonagem do projeto_web, adicionar diretório "node_modules" para rodar. Este diretório não é uppado no push e github não permite add diretório com mais de 100 arquivos



