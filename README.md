# Desafio Frontend StarSoft - NFT Marketplace

Este é um projeto de frontend para um marketplace de NFTs, desenvolvido utilizando Next.js e TypeScript.

O ambiente de desenvolvimento é totalmente containerizado com Docker, garantindo uma configuração rápida, consistente e isolada.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização no lado do servidor e geração de sites estáticos.
- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **Docker**: Plataforma de containerização para criação e gerenciamento do ambiente de desenvolvimento.

## Como Executar o Projeto

Para executar a aplicação, você precisará ter o **Docker** e o **Docker Compose** instalados em sua máquina.

1. Clone este repositório.

2. Na raiz do projeto, execute o seguinte comando para construir a imagem Docker e iniciar o container em modo detached (-d):
   ```bash
   docker-compose up --build -d
   ```

3. Após o processo ser finalizado, a aplicação estará disponível no seu navegador em:
   [http://localhost:3000](http://localhost:3000)

## Como Parar a Aplicação

Para parar os containers, execute o comando abaixo na raiz do projeto:
```bash
docker-compose down
```
