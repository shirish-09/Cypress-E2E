class LoginPage {
    enterURL() {
        cy.visit('/')
    }
    enterUsername(username) {
        cy.get('#Username').type(username)
    }
     enterPassword(password){
        cy.get('#Password').type(password)
     }

     clickButton(){
        cy.get('button[type="submit"]').click()
     }
}

export default LoginPage
const loginPage = new LoginPage();