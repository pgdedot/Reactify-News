import { useTheme } from "@/app/providers/ThemeProvider";
import Main from "@/pages/main/ui/Page";
import { Header } from "@/widgets/header/ui";

function BaseLayout() {
	const { isDark } = useTheme();

	return (
		<div className={`app ${isDark ? "dark" : "light"}`}>
			<Header></Header>
			<div className="container">
				<Main></Main>
			</div>
		</div>
	);
}

export default BaseLayout;
