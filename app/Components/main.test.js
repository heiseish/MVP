const rewire = require("rewire")
const main = rewire("./main")
const Main = main.__get__("Main")

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Jean-Philippe", "Michael", "George"], ["Michael", "Edmond", "Anas"], ["George", "George", "Edmond"]]
        inst = new Main(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
