import { BrowserRouter } from "react-router-dom"
import Cart from "../Cart";


global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
)

test("should load cart component", async() => {
    await act(async() => {
        render (
            <BrowserRouter>
                <Cart />
            </BrowserRouter>
        )
    })
})