import React from "react";
import { mount } from "cypress/react";
import Quiz from "../../client/src/components/Quiz";

describe("Quiz Component", () => {
  it("renders the Start Quiz button initially", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").should("be.visible");
  });

  it("starts the quiz when Start button is clicked", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").click();
    cy.get("h2").should("exist"); 

  it("displays answer choices", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").click();
    cy.get(".btn-primary").should("have.length.at.least", 2); 
  });

  it("moves to next question when an answer is clicked", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").click();
    cy.get(".btn-primary").first().click(); 
    cy.get("h2").should("exist"); 
  });

  it("displays the final score after completing the quiz", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").click();
    
    for (let i = 0; i < 10; i++) {
      cy.get(".btn-primary").first().click();
    }

    cy.contains("Quiz Completed").should("be.visible");
    cy.contains("Your score").should("be.visible");
  });

  it("allows restarting the quiz after completion", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").click();
    
    for (let i = 0; i < 10; i++) {
      cy.get(".btn-primary").first().click();
    }

    cy.contains("Take New Quiz").click();
    cy.contains("Start Quiz").should("be.visible");
  });
});