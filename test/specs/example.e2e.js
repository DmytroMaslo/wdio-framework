import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import {Element,ElementArray} from 'webdriverio'

const lazy = ['$','$$']

function _$(selector, parentHandler){
    async function getCurrentElement(){
        if(parentHandler){
            const parent = await parentHandler()
            return parent.$(selector)
        } else {
            return $(selector);
        }
    }
    return new Proxy({},{
        get(_t,value){
            if(lazy.includes(value)){
                return(selector)=>_$(_selector,getCurrentElement);
            }
        }
    })
}

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })
})


