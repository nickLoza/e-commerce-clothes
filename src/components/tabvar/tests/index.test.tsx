import Tabvar from "../";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../app/store";


describe("Tabvar",()=>{

	test("should render and show the right content after click",()=>{
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Tabvar/>
				</MemoryRouter>
			</Provider>
		);
		expect(screen.getByRole("navigation")).toBeDefined();
		const homeBtn = screen.getByLabelText(/click to go to home page/i);
		const menuBtn = screen.getByLabelText(/click to open menu/i);
		const searchBtn = screen.getByLabelText(/click to open products search bar/i);
		const bagBtn = screen.getByLabelText(/click to open your bag/i);
		fireEvent.click(bagBtn);
		expect(screen.getByText(/total:/i)).toBeDefined();
		fireEvent.click(menuBtn);
		expect(screen.getByText(/Spring/i)).toBeDefined();
		fireEvent.click(searchBtn);
		expect(screen.getByText(/Search clothing by name/i)).toBeDefined();
		fireEvent.click(homeBtn);
	})
})