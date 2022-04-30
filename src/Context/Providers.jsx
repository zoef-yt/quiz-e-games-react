import { FilterProvider } from './FilterContext';
import { ThemeProvider, CategoryProvider, AllQuizzesProvider, AuthProvider, ModalProvider } from './index';

const Providers = ({ children }) => {
	return (
		<ThemeProvider>
			<AuthProvider>
				<ModalProvider>
					<CategoryProvider>
						<AllQuizzesProvider>
							<FilterProvider>{children}</FilterProvider>
						</AllQuizzesProvider>
					</CategoryProvider>
				</ModalProvider>
			</AuthProvider>
		</ThemeProvider>
	);
};

export { Providers };
