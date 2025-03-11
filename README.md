# Projeto de estudo, seguindo o conteúdo apresentado nos cursos relacionados ao Angular
O repositório contém, além das anotações neste documento, um projeto Angular seguindo o conteúdo apresentado durante os cursos disponibilizados.

## Setup Inicial do Projeto
O projeto em desenvolvimento foi inicializado com o comando a CLI do Angular, utilizando o comando `ng new`.

## Anotações

### Angular Components
- Gerado com `ng g c <component-name>` ou `ng generate component <component-name>`.
- Para utilizar um componente dentro de outro, a classe do componente deve ser adicionada aos imports do componente pai.
- Com `"{{ <prop-name> }}"` no template de um componente, é possível acessar suas propriedades; Funciona não somente para valores únicos mas também para objetos mais complexos como:
    - Arrays com `"{{ <array-prop>[<index>] }}"`.
    - Objetos com `"{{ <object-prop>.<object-prop-name> }}"`.
Essa funcionalidade é denominada interpolação de dados.

#### Fornecendo Valores Externos
- Anotando uma propriedade com o decorator `@Input()`, é possível abrir uma propriedade para receber valores externos através de propriedades em sua tag html.
    - Passa-se um valor para uma propriedade anotada com `@Input()` como em: `<tag <prop-name> = <valor>></tag>`.
    - Pode-se passar o valor de uma propriedade de um componente para uma propriedade de um componente filho fazendo uso de colchetes; Como em: `<tag [<child-prop-name>]="<parent-prop-name>"></tag>`. Também é possível utilizar uma notação mais simples, mais adequada ao padrão do que foi visto até agora; Como em: `<tag <child-prop-name>="{{<parent-prop-name>}}"></tag>`.
