describe('Sum Test', () => {
  it('Validates basic sum', () => {
    cy.visit('http://localhost/add?num1=2&num2=2')
    cy.contains('La suma de 2 + 2 es 4')
  })
  it('Validates default sum', () => {
    cy.visit('http://localhost/add')
    cy.contains('La suma de 0 + 0 es 0')
  })
})

describe('Subtraction Test', () => {
  it('Validates basic sub', () => {
    cy.visit('http://localhost/sub?num1=10&num2=2')
    cy.contains('La resta de 10 - 2 es 8')
  })
  it('Validates default sub', () => {
    cy.visit('http://localhost/sub')
    cy.contains('La resta de 0 - 0 es 0')
  })
})

describe('Multiplication Test', () => {
  it('Validates basic mult', () => {
    cy.visit('http://localhost/mult?num1=6&num2=5')
    cy.contains('La multiplicación de 6 * 5 es 30')
  })
  it('Validates default mult', () => {
    cy.visit('http://localhost/mult')
    cy.contains('La multiplicación de 0 * 0 es 0')
  })
})

describe('Division Test', () => {
  it('Validates basic div', () => {
    cy.visit('http://localhost/div?num1=20&num2=5')
    cy.contains('La división de 20 / 5 es 4')
  })
  it('Validates default div', () => {
    cy.visit('http://localhost/div')
    cy.contains('La división de 1 / 1 es 1')
  })
})

describe('Module Test', () => {
  it('Validates basic mod', () => {
    cy.visit('http://localhost/mod?num1=13&num2=5')
    cy.contains('El modulo de 13 % 5 es 3')
  })
  it('Validates default mod', () => {
    cy.visit('http://localhost/mod')
    cy.contains('El modulo de 0 % 0 es NaN')
  })
})

