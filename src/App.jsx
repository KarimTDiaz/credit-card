import Header from './components/header/Header';
import { GlobalStyle } from './styles/globalStyles';
import Form from './components/form/Form';
import { useState } from 'react';
export const valueObj = {
	name: 'JANE APPLESEED',
	number: '',
	month: 'MM',
	year: 'YY',
	cvc: '000'
};

const App = () => {
	const [value, setValue] = useState(valueObj);
	return (
		<>
			<GlobalStyle />
			<Header value={value} setValue={setValue} />
			<Form value={value} setValue={setValue} />
		</>
	);
};

export default App;
