const rewire = require("rewire")
const registerServiceWorker = rewire("./registerServiceWorker")
const register = registerServiceWorker.__get__("register")
// @ponicode
describe("register", () => {
    test("0", () => {
        let callFunction = () => {
            register()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("registerServiceWorker.unregister", () => {
    test("0", () => {
        let callFunction = () => {
            registerServiceWorker.unregister()
        }
    
        expect(callFunction).not.toThrow()
    })
})
