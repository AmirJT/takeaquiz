describe("Tech Quiz End-to-End Test", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/questions/random", { fixture: "questions.json" }).as("getQuestions");
    cy.visit("/");
  });

  it("loads the Start Quiz button on the homepage", () => {
    cy.contains("Start Quiz").should("be.visible");
  });

  it("starts the quiz and displays the first question", () => {
    cy.contains("Start Quiz").click();
    cy.wait("@getQuestions");

    cy.get("h2", { timeout: 5000 }).should("exist");
  });

  it("lets the user answer all questions and see their score", () => {
    cy.contains("Start Quiz").click();
    cy.wait("@getQuestions");

    for (let i = 0; i < 10; i++) {
      cy.get(".btn-primary").first().click();
    }

    cy.contains("Quiz Completed", { timeout: 5000 }).should("be.visible");
    cy.contains("Your score").should("be.visible");
  });

  it("allows restarting the quiz after completion", () => {
    cy.contains("Start Quiz").click();
    cy.wait("@getQuestions");

    for (let i = 0; i < 10; i++) {
      cy.get(".btn-primary").first().click();
    }

    cy.contains("Quiz Completed", { timeout: 5000 }).should("be.visible");

    cy.contains("Take New Quiz", { timeout: 5000 }).should("be.visible").click();

      cy.contains("Start Quiz", { timeout: 5000 }).should("be.visible");
  });
});