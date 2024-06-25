import { render } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { appStore } from "../../utils/appStore";
import { Provider } from "react-redux";

it("should render Header", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
})