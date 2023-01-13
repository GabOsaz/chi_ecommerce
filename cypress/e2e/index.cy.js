/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */

describe('User Main Interactions', () => {
  beforeEach(() => {
    // runs before each test in the parent block
    cy.visit('http://localhost:3000');
  });

  it('allows a user view and add a product to cart while increasing the qty to 2', () => {
    cy.findByText('Chi Mart').should('be.visible');
    cy.findByText('Your Cart').should('be.visible');
    cy.findByText('You have not added any products yet, when you do, you will see them here!').should('be.visible');
    cy.findByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', { timeout: 100000 }).click();
    cy.get('[data-testid="increase_btn"]', { timeout: 10000 }).click();
    cy.get('[data-testid="quantity"]').contains('2');
    cy.get('[data-testid="add_btn"]').click();
  });

  it('allows a user view and add a product to cart while increasing the qty to 2 at the cart', () => {
    cy.findByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', { timeout: 100000 }).click();
    cy.get('[data-testid="add_btn"]').click();
    cy.get('[data-testid="add_qty_btn"]').click();
    cy.get('[data-testid="quantity_at_cart"]').contains('2x');
  });

  it('tests removing an item from the cart', () => {
    cy.findByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', { timeout: 100000 }).click();
    cy.get('[data-testid="add_btn"]').click();
    cy.get('[data-testid="add_qty_btn"]', { timeout: 100000 }).click();
    cy.get('[data-testid="quantity_at_cart"]').contains('2x');
    cy.get('[data-testid="reduce_qty_btn"]').click();
    cy.get('[data-testid="reduce_qty_btn"]').click();
    cy.findByText('You have not added any products yet, when you do, you will see them here!').should('be.visible');
  });

  it('adds items to cart and heads to summary page', () => {
    cy.findByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', { timeout: 100000 }).click();
    cy.get('[data-testid="add_btn"]').click();
    cy.get('[data-testid="add_qty_btn"]', { timeout: 100000 }).click();
    cy.get('[data-testid="order_btn"]').click();
    cy.findByText('Items Summary').should('be.visible');
  });

  it('completes order', () => {
    cy.findByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', { timeout: 100000 }).click();
    cy.get('[data-testid="add_btn"]').click();
    cy.get('[data-testid="add_qty_btn"]', { timeout: 100000 }).click();
    cy.get('[data-testid="order_btn"]').click();
    cy.findByText('Items Summary').should('be.visible');
    cy.get('[data-testid="finish_btn"]').click();
    cy.findByText('Chi Mart', { timeout: 150000 }).should('be.visible');
    cy.findByText('Your Cart').should('be.visible');
    cy.findByText('You have not added any products yet, when you do, you will see them here!').should('be.visible');
  });
});
