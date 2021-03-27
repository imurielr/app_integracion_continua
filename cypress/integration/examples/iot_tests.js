describe('HomePage test', () => {
    it('Validates homepage text', () => {
      cy.visit('http://localhost:3000')
      cy.contains('Welcome to app-integracion-continua')
    })
})

describe('Sum Test', () => {
  it('Validates basic sum', () => {
    cy.visit('http://localhost:3000/examples/add?num1=2&num2=2')
    cy.contains('La suma de 2 + 2 es 4')
  })
  it('Validates default sum', () => {
    cy.visit('http://localhost:3000/examples/add')
    cy.contains('La suma de 0 + 0 es 0')
  })
})

describe('Subtraction Test', () => {
  it('Validates basic sub', () => {
    cy.visit('http://localhost:3000/examples/sub?num1=10&num2=2')
    cy.contains('La resta de 10 - 2 es 8')
  })
  it('Validates default sub', () => {
    cy.visit('http://localhost:3000/examples/sub')
    cy.contains('La resta de 0 - 0 es 0')
  })
})

describe('Multiplication Test', () => {
  it('Validates basic mult', () => {
    cy.visit('http://localhost:3000/examples/mult?num1=6&num2=5')
    cy.contains('La multiplicación de 6 * 5 es 30')
  })
  it('Validates default mult', () => {
    cy.visit('http://localhost:3000/examples/mult')
    cy.contains('La multiplicación de 0 * 0 es 0')
  })
})

describe('Division Test', () => {
  it('Validates basic div', () => {
    cy.visit('http://localhost:3000/examples/div?num1=20&num2=5')
    cy.contains('La división de 20 / 5 es 4')
  })
  it('Validates default div', () => {
    cy.visit('http://localhost:3000/examples/div')
    cy.contains('La división de 1 / 1 es 1')
  })
})

describe('Module Test', () => {
  it('Validates basic mod', () => {
    cy.visit('http://localhost:3000/examples/mod?num1=13&num2=5')
    cy.contains('El modulo de 13 % 5 es 3')
  })
  it('Validates default mod', () => {
    cy.visit('http://localhost:3000/examples/mod')
    cy.contains('El modulo de 0 % 0 es NaN')
  })
})

