const TravelForm = require("./TravelForm")
// @ponicode
describe("handleChange", () => {
    let inst

    beforeEach(() => {
        inst = new TravelForm.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleChange({ target: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleChange({ target: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleChange(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
