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

#### Outras Formas de Data Binding
- Property binding é realizado com colchetes; Como em: `[<child-prop-name>] = "<parent-prop-name>"`. Envia valor de propriedade do componente para outro componente filho.
    - É possível utilizar data binding em propriedades html também; Como um exemplo, utilizando binding para alterar o estilo de um componente: Definida a propriedade color no componente pai, pode-se utilizar `<tag [style.color]="color"></tag>`.
- Event binding é realizado com parênteses. Como em: `(<html-event-name>) = "<component-method-invocation>"`. Associa um método qualquer do componente a um evento HTML como `click` e `mouseover`. É permitido passar parâmetros para a chamada de método.
- Two-way binding é realizado com colchetes e parênteses aninhados e a diretiva ngModel. Como em: `([ngModel]) = "<property-name>"`. É usada em elementos de input; Recupera e escreve na propriedade que referencia. Para que se possa utilizar da diretiva `ngModel`, é necessário importar o pacote `FormsModule` no componente.

#### Lifecycle Hooks
- Definidos como interfaces que os componentes devem implementar.
- São, em ordem geral de execução:
    - `OnInit`: Executado na inicialização do componente.
    - `OnChanges`: Executado quando há mudança nas props.
    - `DoCheck`: Executado sempre que há verificação internamente no componente. Sob uma perspectiva de lifecycle, são parte da fase check: 
        - `AfterContentInit`
        - `AfterContentChecked` 
        - `AfterViewInit`
        - `AfterViewChecked`
    - `OnDestroy`: Executado quando o componente é destruído; Quando deixa de ser renderizado.
