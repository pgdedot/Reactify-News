import BaseLayout from "@/app/layouts/BaseLayout";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { store } from "@/app/appStore";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<ThemeProvider>
				<BaseLayout />
			</ThemeProvider>
		</Provider>
	</StrictMode>,
);
