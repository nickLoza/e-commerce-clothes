import Footer from "../";

import { screen, render, fireEvent } from "@testing-library/react";



describe("Footer",()=>{{

	test("should render footer and links",()=>{
		render(<Footer/>);
		expect(screen.getByRole("contentinfo")).toBeDefined();
		expect(screen.getByLabelText(/click to open clothes-shop facebook page/i));
		expect(screen.getByLabelText(/click to open clothes-shop instagram page/i));
		expect(screen.getByLabelText(/click to open clothes-shop twitter page/i));
	})
}})