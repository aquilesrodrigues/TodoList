# Plano de criação do banco

* Levantamento e Análise de Requisitos;
  
  :left_speech_bubble: (principal etapa - conhecer as necessidades do usuário ou contratante) O Analista de sistema precisa conhecer os relacionamentos dos processos de quem contrata.
  Registrar necessidades e o que já funciona hoje seus processos para serem modelados (*_minimundo_*). Requistos **Funcionais** e **Não-Funcionais**:
  * Funcional - estão claros para o cliente
  * Não-Funcionais - os clientes não falam e que sabemos que são necessários (Segurança, backup, integridade).
  :exclamation: Com o Levantamento em mãos devemos fazer a análise e gerar a Documentação (durante todo o processo)

* Modelagem Conteitual(DER):
Não tem ligação com o tipo de SGBD (SQL ou NO-SQL), qual arquitetura.Se interessa analisar como os dados que o cliente precisa se relaciona.
É a atividade que cria um modelo abstrato que descreve como os dados deverão ser agrupados e relacionados em um banco.
    :exclamation: (DER) Diagrama de Entidades e Relacionamentos.

* Modelagem Lógica;
Partindo do modelo conceitual é criado um modelo detalhado que define as nomenclaturas, atributos e chaves das tabelas em um banco de dados.
:exclamation: É nesta fase que ter noção de qual SGBD será usado, ajudará a definir de que forma serão os atributos.

* Modelagem Física.
  Fase de materialização do modelo lógico através de códigos SQL.
Quais elementos: Tabelas(Colunas e Tuplas), chaves(Candidatas ou Alternativas),  
Chaves candidatas(simples e compostas)

fim de bloco

Chave | Tipo | Nível
:-------------- | :-------------- | :--------------
Candidata | Simples | Primária
Candidata | Composta |
Estrangeira | simples |

* comandos categorizados

Categoria | Referencia | Objetivo | Utilização | Observação
:---- |:---- |:---- |:---- |:----
DDL| comandos que definem **OBJETOS** | Bancos, tabelas, visões | incluir, alterar e excluir. | Data Definition Language 
DML| comandos que manipulam **DADOS** | trata diretamente com dados dos campos | incluir, alterar e excluir |  Alguns escritores inserem o SELECT aqui
DCL - Data Control Language | comandos de controle de nível de acesso de usuário | - | - | Data Control Language
DTL  