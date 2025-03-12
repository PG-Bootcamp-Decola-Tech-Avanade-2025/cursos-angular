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

#### Diretivas Angular

##### Diretivas Estruturais
- `ngIf`: Como uma cláusula if tradicional, define se um componente deve ou não ser renderizado com base em uma condicional; Pode ser aplicada em tags html e componentes angular como: `<tag *ngIf="<conditional>"></tag>` onde a condicional pode ser um simples valor booleano ou uma propriedade do componente pai.
A diretiva `ngIf` pode ser usada acompanhada de um bloco else definido com um componente `ng-template` como em:
    ```
    <tag *ngIf="<conditional>; else <else-block-name>"></tag>
    <ng-template #<else-block-name>>
        <p>Este bloco só é renderizado caso <condicional> seja falso<p>
    </ng-template>
    ```
- `ngFor`: Emula o funcionamento de uma cláusula foreach, renderizando dado componente ou bloco com base em uma lista de dados; Pode ser aplicado como: `<tag *ngFor="let <iterator-item-name> of <parent-list-prop-name>; let <index-name> = index">` onde a segunda parte da declaração, capturando index, é opcional.
- `ngSwitch`: Emula o funcionamento de um bloco switch-case, renderizando um dentre vários casos possíveis; Diferente das outras diretivas, usa-se um par de colchetes para invocar. Aplica-se como:
    ```
    <tag [ngSwitch]="<parent-component-prop>">
        <tag *ngSwitchCase="'<option-1>'">Este bloco só é renderizado caso <parent-component-prop> tenha valor de <opção-1></tag>
        <tag *ngSwitchCase="'<option-2>'">Este bloco só é renderizado caso <parent-component-prop> tenha valor de <opção-2></tag>
    </tag>
    ```

##### Diretivas de Atributo
- `ngClass`: Permite fazer o bind das classes CSS de uma tag a uma propriedade do componente. É usada com colchetes; Como em: `<tag [ngClass]="<parent-prop-name>">`.
- `ngStyle`: Permite fazer o bind de propriedades CSS de uma tag a uma propriedade do componente. É usada com colchete e recebe um objeto no qual chave é a propriedade CSS e valor é a propriedade do componente; Como em: `<tag [ngStyle]="{<css-prop>: <parent-prop-name>, <...>: <...>}">`
- `ngModel`: Permite comunicação bidirecional entre template e propriedades do componente. É usada com a estrutura `[()]`; Como em: `<tag [(ngModel)]="<parent-prop-name>">`.
- `ng-template`: É usada como um componente; Serve como um container para partes da estrutura do componente que são renderizadas condicionalmente. Bastante usada em conjunto com a diretiva `ngIf`; Nesse contexto, podem agir como bloco if e else.
- `ng-content`: É usada como um componente; Serve para recuperar conteúdo passado no interior da tag do componente. Com a propriedade `select`, é possível recuperar elementos específicos. É utilizado como:
    ```
    <angular-component>
        <h1>A Title</h1>
        <p>Some Text</p>
    </angular-component>    
    ```
    E, na template do componente `angular-component`:
    ```
    <ng-content select="h1">
    <br>
    <p>This is some content:</p>
    <ng-content select="p">
    <hr>
    ```
    Resultando em:
    ```
    <h1>A Title</h1>
    <br>
    <p>This is some content:</p>
    <p>Some Text</p>
    <hr>
    ```

### Angular Modules
- São agrupamentos de componentes; Úteis para organização.
- Não são tão relevantes em versões do Angular que implementam componentes stand-alone mas ainda têm seu uso.
- Em sua estrutura, pode importar e exportar componentes, exportando apenas os módulos que devem ser disponibilizados para componentes que importarem esse módulo.
