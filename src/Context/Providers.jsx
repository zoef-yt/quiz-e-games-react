import { FilterProvider } from './FilterContext';
import { ThemeProvider, CategoryProvider, AllQuizzesProvider } from './index';

const Providers = ({ children }) => {
	return (
		<ThemeProvider>
			<CategoryProvider>
				<AllQuizzesProvider>
					<FilterProvider>{children}</FilterProvider>
				</AllQuizzesProvider>
			</CategoryProvider>
		</ThemeProvider>
	);
};

export { Providers };
