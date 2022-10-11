import {queryByTestId, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'

import { Provider } from "react-redux";

import store from "../../store/store";
import ThankYou from "../../pages/ThankYou/ThankYou";

describe('It is test for ThankYou Page', () => {
    it('It renders ThankYou Component', () => {
        render(
            <Provider store={store}>
                <ThankYou />
            </Provider>);
        expect(screen.getByText(/Successful Registration/i)).toBeInTheDocument()
    })
})