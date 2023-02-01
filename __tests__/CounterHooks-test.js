import React from 'react';
import { render,fireEvent } from "@testing-library/react-native";
import CounterHook from '../src/vistoEnClase/CounterHooks';

describe("Counter", () => {
    it("muestra el estado inicial en 0", () => {
        const { queryByText } = render(<CounterHook/>);

        const initialState = queryByText("contador:0");
        //Se espera encontrarlo
        expect(initialState).not.toBeNull();
    });

    it("muestra el estado inicial en 0 e ir incrementado y muestre 1 ", () => {
        const { queryByText, queryByTestId } = render(<CounterHook/>);

        const initialState = queryByText("contador:0");
        //Se espera encontrarlo
        expect(initialState).not.toBeNull();

        const increment = queryByTestId("BotonCircularSuma");
        expect(increment).not.toBeNull();
        //se le da clic
        fireEvent.press(increment);
        //se espera que aumente 
        const oneState = queryByText("contador:1");
        expect(oneState).not.toBeNull();
    });

    it("muestra el estado inicial en 0 e ir disminuyendo y muestre -1 ", () => {
        const { queryByText, queryByTestId } = render(<CounterHook/>);
       
        const initialState = queryByText("contador:0");

        expect(initialState).not.toBeNull();
        //Se espera encontrarlo
        const increment = queryByTestId("BotonCircularResta");
        //se le da clic
        expect(increment).not.toBeNull();
        fireEvent.press(increment);

        const oneState = queryByText("contador:-1");
        //se espera que disminuya 
        expect(oneState).not.toBeNull();
    });

    it("muestra el estado inicial en 0 y el otro no cambia al estado ", () => {
        const { queryByText, queryByTestId } = render(<CounterHook/>);

        const initialState = queryByText("contador:0");
        //Se espera encontrarlo
        expect(initialState).not.toBeNull();

        const increment = queryByTestId("BotonCircularCero");
         //se le da clic
        expect(increment).not.toBeNull();
        fireEvent.press(increment);
        //se espera que se mantenga igual
        const oneState = initialState;
        expect(oneState).not.toBeNull();
    });

});