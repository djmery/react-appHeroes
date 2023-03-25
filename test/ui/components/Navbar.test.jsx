import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en <Navbar />', () => {

    const contextValue = {
        logged: true,
        user: {
            id: "ABC",
            name: "Julia"
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el nombre del usuario', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </AuthContext.Provider>
        );
        //creen.debug();
        expect(screen.getByText('Julia')).toBeTruthy();

    });

    test('debe de llamar el logout y navigate cuando se hace click en el botón', () => {


        render(
            <AuthContext.Provider value={contextValue}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </AuthContext.Provider>
        );
        //screen.debug();

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { "replace": true });
    });
});