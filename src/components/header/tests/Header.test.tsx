import Header from "../";

import { screen, render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../app/store";



describe("Header",()=>{{

	test("should render Header and navbar links",()=>{
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Header/>
				</MemoryRouter>
			</Provider>);
		expect(screen.getByRole("banner")).toBeDefined();
		expect(screen.getByLabelText(/click logo to go to home page/i));
		expect(screen.getByLabelText(/click to go to home page/i));
		expect(screen.getByLabelText(/click to go to all collection clothes/i));
		expect(screen.getByLabelText(/click to go to summer clothes/i));
		expect(screen.getByLabelText(/click to go to spring clothes/i));
		expect(screen.getByLabelText(/click to go to winter clothes/i));
		expect(screen.getByLabelText(/click to go to autumn clothes/i));
	})
}})