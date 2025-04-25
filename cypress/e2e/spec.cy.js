import { StartPage} from "../../pageObjects/StartPage"
import { LoginPage } from "../../pageObjects/LoginPage";
import { AppointmentPage } from "../../pageObjects/AppointmentPage";

describe("MD2", () => {
  context("Made by Kristers Jirgensons", () => {
    beforeEach(() => {
      StartPage.visit();
    });
    // Scenario 1
    it("Making an appointment", () => {

      // click Appointment button
      StartPage.makeAppointment.click();

      // Set username and password fields with the demo account credentials
      LoginPage.loginField.type("John Doe");
      LoginPage.passwordField.type("ThisIsNotAPassword");

      // Click - Login
      LoginPage.loginButton.click();

      // Set the following values:
      // 1. Facility - Seoul CURA Healthcare Center
      AppointmentPage.facilityBox.select("Seoul CURA Healthcare Center");

      // 2. Check - Apply for hospital readmission
      AppointmentPage.readmissionButton.click();

      // 3. Select - Medicaid
      AppointmentPage.medicaidButton.click();

      // 4. Set Date value by using the widget - 30
      AppointmentPage.dateBox.click();
      AppointmentPage.selectDate.contains("30").click();

      // 5. Set comment - CURA Healthcare Service
      AppointmentPage.commentField.type("CURA Healthcare Service");

      // 6. Click - Book Appointment
      AppointmentPage.bookAppointmentButton.click();

      // Validate that previously set values are correct

      AppointmentPage.checkFacility.should("contain.text", "Seoul CURA Healthcare Center");
      AppointmentPage.checkReadmission.should("contain.text", "Yes");
      AppointmentPage.checkHealthcare.should("contain.text", "Medicaid");
      AppointmentPage.checkDate.should("contain.text", "30/03/2025");
      AppointmentPage.checkComment.should("contain.text", "CURA Healthcare Service");

    });

    // Scenario 2
    it.only("Appointment history empty", () => {

      // click Appointment button
      StartPage.makeAppointment.click();

      // Set username and password fields with the demo account credentials
      LoginPage.loginField.type("John Doe");
      LoginPage.passwordField.type("ThisIsNotAPassword");

      // Click - Login
      LoginPage.loginButton.click();

      // Click - Menu/Stack/Burger icon
      AppointmentPage.clickMenuButton.click();

      // Validate that the sidebar is active
      AppointmentPage.checkSidebar.should("have.class", "active");

      // Click - History
      AppointmentPage.clickHistoryButton.click();

      // Validate that - No appointment - is visible
      AppointmentPage.checkHistory.should("contain.text", "No appointment.")
    });
  });
});