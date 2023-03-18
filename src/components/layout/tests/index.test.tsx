import Layout from "../";

import { screen, render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../app/store";



describe("Layout",()=>{{

	test("should render and show the right collection",()=>{
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Layout/>
				</MemoryRouter>
			</Provider>
		);
		
		const allLink = screen.getByLabelText(/click to go to ALL COLLECTION clothes/i);
		const springLink = screen.getByLabelText(/click to go to spring clothes/i);
		const summerLink = screen.getByLabelText(/click to go to summer clothes/i);
		const autumnLink = screen.getByLabelText(/click to go to autumn clothes/i);
		const winterLink = screen.getByLabelText(/click to go to winter clothes/i);
		fireEvent.click(allLink)
		expect(screen.getByText(/ALL COLLECTION 2023/i))
		fireEvent.click(springLink)
		expect(screen.getByText(/SPRING COLLECTION 2023/i))
		fireEvent.click(summerLink)
		expect(screen.getByText(/SUMMER COLLECTION 2023/i))
		fireEvent.click(winterLink)
		expect(screen.getByText(/WINTER COLLECTION 2023/i))
		fireEvent.click(autumnLink)
		expect(screen.getByText(/AUTUMN COLLECTION 2023/i))
	})
}})