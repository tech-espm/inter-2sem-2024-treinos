# Projeto Interdisciplinar II - Sistemas de Informação ESPM

<p align="center">
    <a href="https://www.espm.br/cursos-de-graduacao/sistemas-de-informacao/"><img src="https://raw.githubusercontent.com/tech-espm/misc-template/main/logo.png" alt="Sistemas de Informação ESPM" style="width: 375px;"/></a>
</p>

# Let's Fit

### 2024-02

## Integrantes
- [José Longo Neto](https://github.com/Jose-Longo-A)
- [Pedro Maricate](https://github.com/PedroMaricate)
- [Martim Ponzio](https://github.com/martimponzio)
- [Eduardo Gul](https://github.com/eduardogd09)
- [Enzo Malagoli](https://github.com/EnzoMalagoli)
- [Pablo Dimitrof](https://github.com/PabloDimitrof)
- [Artur Nápoles](https://github.com/NAPartur21)

## Descrição do Projeto

O mercado de saúde e bem-estar tem se encaminhando para uma significativa expansão,
impulsionada pela crescente conscientização sobre os benefícios de um estilo de vida saudável
e pela popularidade de soluções digitais que promovem a prática de exercícios físicos. Nesse
contexto, plataformas online têm se estruturado como ferramentas acessíveis e práticas para
atender a diferentes perfis de usuários, desde iniciantes até praticantes avançados. A demanda
por treinos personalizados, que respeitem os gostos individuais de cada usuário, destaca-se
como uma tendência relevante, reforçando a necessidade de soluções tecnológicas que
combinem acessibilidade, diversidade de modalidades e personalização.

Este trabalho propõe o desenvolvimento de um site de treinos online, projetado para
oferecer um serviço amplo, integrando modalidades como musculação, calistenia,
alongamentos, entre outros. Alinhado aos Objetivos de Desenvolvimento Sustentável (ODS),
especialmente o ODS 3, que trata de saúde e bem-estar e a ODS 10 de redução à desigualdade,
o projeto busca promover o acesso a práticas físicas inclusivas, atendendo tanto às necessidades
de quem frequenta academias quanto de indivíduos que não apresentam condições para
frequentar academias, ou não gostam do ambiente.

Com funcionalidades personalizadas e acessíveis, estratégias de monetização por
anúncio e planos premium, o projeto representa uma oportunidade para investimento e inovação
na área de saúde e bem-estar digital.

# Detalhes de Configuração

Para funcionar corretamente, devem ser criados os seguintes arquivos/pastas nos caminhos especificados, com o conteúdo especificado:

- O arquivo `.env` deve ser criado em `/`, com o conteúdo abaixo:
```
app_localIp=0.0.0.0
app_port=3000
app_root=
# Não pode terminar com barra /
app_urlSite=http://localhost:3000
app_cookie=[NOME DO COOKIE]
app_cookieSecure=0
app_staticFilesDir=public
app_disableStaticFiles=0
app_sqlConfig_connectionLimit=30
app_sqlConfig_waitForConnections=1
app_sqlConfig_charset=utf8mb4
app_sqlConfig_host=localhost
app_sqlConfig_port=3306
app_sqlConfig_user=[USUÁRIO DO BANCO]
app_sqlConfig_password=[SENHA DO USUÁRIO DO BANCO]
app_sqlConfig_database=[NOME DO BANCO]
app_usuarioSenhaPadrao=[SENHA PADRÃO PARA NOVOS USUÁRIOS]
app_usuarioHashSenhaPadrao=[HASH DA SENHA PADRÃO PARA NOVOS USUÁRIOS]
# Não utilizar números > 0x7FFFFFFF pois os XOR resultarão em -1
app_usuarioHashId=[HASH DE 32 BITS PARA O ID EM HEXADECIMAL, COMO 0x1234ABCD]
```

- A pasta `dados` deve ser criada em `/`
- A pasta `imagens` dee ser criada em `/dados`

# Licença

Este projeto é licenciado sob a [MIT License](https://github.com/tech-espm/misc-template/blob/main/LICENSE).

<p align="right">
    <a href="https://www.espm.br/cursos-de-graduacao/sistemas-de-informacao/"><img src="https://raw.githubusercontent.com/tech-espm/misc-template/main/logo-si-512.png" alt="Sistemas de Informação ESPM" style="width: 375px;"/></a>
</p>
