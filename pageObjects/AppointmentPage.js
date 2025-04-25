import { BasePage } from "./basePage";
 
export class AppointmentPage extends BasePage {
  static get url() {
    return "#appointment";
  };

  static get facilityBox() {
    return cy.get("#combo_facility");
  }

  static get readmissionButton() {
    return cy.get("#chk_hospotal_readmission");
  }

  static get medicaidButton() {
    return cy.get("#radio_program_medicaid");
  }

  static get dateBox() {
    return cy.get("#txt_visit_date");
  }

  static get selectDate() {
    return cy.get(".datepicker-days")
  }

  static get commentField() {
    return cy.get("#txt_comment");
  }

  static get bookAppointmentButton() {
    return cy.get("#btn-book-appointment");
  }

  static get checkFacility() {
    return cy.get("#facility");
  }
  static get checkReadmission() {
    return cy.get("#hospital_readmission");
  }
  static get checkHealthcare() {
    return cy.get("#program");
  }
  static get checkDate() {
    return cy.get("#visit_date");
  }
  static get checkComment() {
    return cy.get("#comment");
  }

  // ============================================

  static get clickMenuButton() {
    return cy.get("#menu-toggle")
  }

  static get checkSidebar() {
    return cy.get("#sidebar-wrapper");
  }

  static get clickHistoryButton() {
    return cy.get("nav#sidebar-wrapper").contains("History");
  }

  static get checkHistory() {
    return cy.get(".col-sm-12");
  }
}
