import { FormBottom, FormField, FormFieldDate, StyledForm } from './styles';

const Form = ({ value, setValue }) => {
	return (
		<StyledForm>
			<FormField>
				<label>CARDHOLDER NAME</label>
				<input
					type='text'
					placeholder='e.g. Jane Appleseed'
					onChange={ev => setName(ev.target.value, value, setValue)}
				/>
			</FormField>
			<FormField>
				<label>CARD NUMBER</label>
				<input
					type='text'
					placeholder='e.g. 1234 5678 9123 0000'
					value={value.number}
					onChange={ev => setNumber(ev.target.value, value, setValue)}
				/>
			</FormField>
			<FormBottom>
				<FormField>
					<label>EXP.DATE(MM/YY)</label>
					<FormFieldDate>
						<input
							type='text'
							placeholder='MM'
							onChange={ev => changeMonth(ev, value, setValue)}
						/>
						<input
							type='text'
							placeholder='YY'
							onChange={ev => changeYear(ev, value, setValue)}
						/>
					</FormFieldDate>
				</FormField>
				<FormField>
					<label>CVC</label>
					<input
						type='text'
						placeholder='e.g. 123'
						onChange={ev => changeCvc(ev, value, setValue)}
					/>
				</FormField>
			</FormBottom>
		</StyledForm>
	);
};

const setName = (name, value, setValue) => {
	setValue({ ...value, name });
};

const setNumber = (number, value, setValue) => {
	if (number.length <= 19) {
		setValue({ ...value, number });
	}
	if (number.length === 4 || number.length === 9 || number.length === 14) {
		number += ' ';
		console.log(number.length);
	}
};

const changeMonth = (ev, value, setValue) => {
	setValue({ ...value, month: ev.target.value });
};

const changeYear = (ev, value, setValue) => {
	setValue({ ...value, year: ev.target.value });
};

const changeCvc = (ev, value, setValue) => {
	setValue({ ...value, cvc: ev.target.value });
};

export default Form;
