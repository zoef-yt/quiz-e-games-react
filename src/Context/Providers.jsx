import { FilterProvider } from './FilterContext';
import { ThemeProvider, CategoryProvider, AllQuizzesProvider, AuthProvider, ModalProvider } from './index';
import { QuizQuestionsProvider } from './QuizQuestionsContext';

const Providers = ({ children }) => {
	return (
		<ThemeProvider>
			<AuthProvider>
				<ModalProvider>
					<CategoryProvider>
						<AllQuizzesProvider>
							<QuizQuestionsProvider>
								<FilterProvider>{children}</FilterProvider>
							</QuizQuestionsProvider>
						</AllQuizzesProvider>
					</CategoryProvider>
				</ModalProvider>
			</AuthProvider>
		</ThemeProvider>
	);
};

export { Providers };
