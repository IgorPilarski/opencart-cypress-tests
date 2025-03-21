import users from "../fixtures/usersData.json";

describe('Simple register tests', () => {
  it(`Given: the user that attempts to register
      When: trying to register
      Then: the user should be successfully registered  
      AND: the new user should be able delete his account`, () => {
    cy.visit("");
    cy.verifyHomePageLoaded();
    cy.goTo("loginPage");
    cy.registerRandomUser();
    cy.deleteCurrentUser();

})
  it(`Given the already registered user 
      When trying to register with its credentials
      Then they should not be registered`, () => {
      cy.visit("");
      cy.verifyHomePageLoaded();
      cy.goTo("loginPage");
      cy.tryToRegisterExistingUser(users.simpleLoginUser.name, users.simpleLoginUser.email);
    })
})
