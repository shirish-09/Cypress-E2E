import {loginPage} from '../Pages/loginPage'
describe('Login Test', () => {
    
  
    it('should login successfully', () => {
      loginPage.enterURL('/')
      loginPage.enterUsername('Support_Hris')
      loginPage.enterPassword('Infodev@2080')
      loginPage.clickButton()
    });

    // it('Should failed login', () => {
    //     loginPage.enterURL()
    //   loginPage.enterUsername('Support_Hri')
    //   loginPage.enterPassword('Infodev@2080')
    //   loginPage.clickButton()
    // });
  });

