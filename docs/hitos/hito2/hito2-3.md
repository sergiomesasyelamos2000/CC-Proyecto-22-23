# Librería de aserciones

Por un lado, en cuanto al marco de trabajo de Jest, este incluye su propia librería de aserciones utilizando el objeto _expect_ para realizar las aserciones. Además, Jest posee una gran cantidad de métodos y funciones que permiten comprobar el correcto funcionamiento tanto de las funcionalidades como de determiandos valores. Tanto es así que esta librería de aserciones encaja a la perfección con la metodología de desarrollo TDD puesto que podemos trasladar a través de un lenguaje natural lo que queremos que realice una funcionalidad concreta.
Un ejemplo de asserción mediante Jest es el siguiente:

```
const caesar = require("../caesar-cipher");

//other tests here

test('wraps', function() {
    expect(caesar('Z', 1)).toEqual('A');
});

test('works with large shift factors', function() {
    expect(caesar('Hello, World!', 75)).toEqual('Ebiil, Tloia!');
});

test('works with large negative shift factors', function() {
    expect(caesar('Hello, World!', -29)).toEqual('Ebiil, Tloia!');
});
```

Por otro lado, en cuanto al marco de trabajo de Cypress, este incluye la popular biblioteca de aserciones Chai , así como extensiones útiles para Sinon y jQuery , lo que le brinda docenas de aserciones tanto para la metodología BDD como TDD. Un ejemplo de asserción mediante Cypress es el siguiente:

```
cy.get('.assertion-table')
  .find('tbody tr:last').should('have.class', 'success')
  .find('td')
  .first()
  // checking the text of the  element in various ways
  .should('have.text', 'Column content')
  .should('contain', 'Column content')
  .should('have.html', 'Column content')
  // chai-jquery uses "is()" to check if element matches selector
  .should('match', 'td')
  // to match text content against a regular expression
  // first need to invoke jQuery method text()
  // and then match using regular expression
  .invoke('text')
  .should('match', /column content/i)

// a better way to check element's text content against a regular expression
// is to use "cy.contains"
// https://on.cypress.io/contains
cy.get('.assertion-table')
  .find('tbody tr:last')
  // finds first  element with text content matching regular expression
  .contains('td', /column content/i)
  .should('be.visible')

```




