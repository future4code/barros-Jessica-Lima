import { User } from "../src/interfaceUser"
import { performPurchase } from "../src/user"

describe("Teste de usuário", () => {
    // A
    test("test-A", () => {
        const user: User = {
            name: "Jess",
            balance: 200
        }

        const result = performPurchase(user, 129)

        expect(result).toEqual({
            name: "Jess",
            balance: 71
        })
    })

    // B
    test("test-B", () => {
        const user: User = {
            name: "Jess",
            balance: 129
        }

        const result = performPurchase(user, 129)

        expect(result).toEqual({
            name: "Jess",
            balance: 0
        })
    })

    // C
    test("test-C", () => {
        const user: User = {
            name: "Jess",
            balance: 100
        }

        const result = performPurchase(user, 129)

        expect(result).not.toBeDefined()
    })
})