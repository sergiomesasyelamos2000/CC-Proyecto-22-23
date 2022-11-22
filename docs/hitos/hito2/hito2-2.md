# Elección del marco de trabajo para las pruebas unitarias
El framework de pruebas elegido para el desarrollo de la parte backend ha sido [Jest](#jest) mientras que para la parte frontend se ha escogido [Cypress](#cypress).

<a name="jest"></a>

# Jest
Jest es un marco de prueba de JavaScript diseñado para garantizar la corrección de cualquier código base de JavaScript, permitiendo escribir pruebas con una API accesible, familiar y rica en funciones que le brinda resultados rápidamente. Jest está bien documentado, requiere poca configuración y se puede ampliar para satisfacer sus necesidades. Se debe destacar que esta elección ha sido propiciada por la comparación de dos de los *frameworks* más empelados para el testeo de aplicaciones JavaScript y TypeScript, *Jest* y *Mocha*.

La elección de Jest se basa principalmente en que con este framework contaremos con todas las librerías necesarias (aserciones, mocks, etc..) integradas en el propio framework sin necesidad de agregar dependencias externas al proyecto ofreciendo una respuesta totalmente valida para el sistema. Además, Jest cuenta con una sintaxis que se asemeja al lenguaje natural facilitándonos seguir un enfoque TDD pudiendo escribir test de manera sencilla. A continuación, se mostrará un sencillo ejemplo de un test unitario en Jest:

```
describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

```

```
PASS  ./suma.test.js
✓ sumar 1 + 2 es igual a 3 (5ms)
```

En conclusión, se ha elegido Jest como marco de pruebas debido principalmente a su sencillez y la funcionalidad que ofrece, sin ser necesario instalar dependencias adicionales puesto que se encuentra incorporado en el _framework_ de NestJS, lo que facilita la implementación de los tests.

# Mocha 
Mocha es un marco de prueba de JavaScript rico en funciones que se ejecuta en Node.js y en el navegador, lo que hace que las pruebas asincrónicas sean simples y divertidas. Las pruebas de Mocha se ejecutan en serie, lo que permite informes flexibles y precisos, al tiempo que asigna excepciones no detectadas a los casos de prueba correctos. Por el contrario, requiere de librerías externas, se absa en la simplicidad y no siempre posee rápidas ejecuciones. Además, posee una sintaxis muy compleja de comprender y desarrollar.

Un ejemplo sencillo de Mocha sería el siguiente:

```
describe('User', function () {
  describe('#save()', function () {
    it('should save without error', function (done) {
      var user = new User('Luna');
      user.save(function (err) {
        if (err) done(err);
        else done();
      });
    });
  });
});
```

```
$ ./node_modules/.bin/mocha mocha.test.js


  ✓ double done
  1) double done

  1 passing (6ms)
  1 failing

  1) double done:
     Error: done() called multiple times
      at Object.<anonymous> (mocha.test.js:1:63)
      at require (internal/module.js:11:18)
      at Array.forEach (<anonymous>)
      at startup (bootstrap_node.js:187:16)
      at bootstrap_node.js:608:3
```
<a name="cypress"></a>

# Cypress

Por otro lado, en cuanto al desarrollo de pruebas unitarias correspondiente a la parte frontend de la aplicación, se he escogido *Cypress*.

Cypress es una herramienta de prueba de front-end basada puramente en JavaScript creada para la web moderna. Su objetivo es abordar los puntos débiles que enfrentan los desarrolladores o los ingenieros de control de calidad al probar una aplicación. Cypress es una herramienta más amigable para los desarrolladores que utiliza una técnica única de manipulación DOM y opera directamente en el navegador. Cypress también proporciona un corredor de prueba interactivo único en el que ejecuta todos los comandos.
Con Cypress, los QA o los desarrolladores pueden crear:

- Pruebas unitarias
- Pruebas de integración
- Pruebas de extremo a extremo

Siguiendo la metodología ágil, el hecho de que Cypress se base puramente en JavaScript indica cómo esta herramienta está diseñada para satisfacer las necesidades de los desarrolladores front-end en particular. Las mejoras arquitectónicas en Cypress otorgan a los evaluadores la capacidad de realizar un desarrollo basado en pruebas (TDD) con pruebas completas de extremo a extremo, por lo que Cypress se trata de un marco de prueba todo en uno, como biblioteca de aserciones, con interfaz gráfica de simulación y creación de apéndices, todo ello sin necesidad de Selenium. 

Un ejemplo de test escribo haciendo uso de Cypress puede ser:

```
describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify
    // that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})
```

Mientras que la ejecución de las pruebas a través del navegador se muestra de la siguiente manera:

<img src="" alt="drawing" width="300"/>