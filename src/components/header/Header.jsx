import { StyledHeader } from './styles';
import Card from '../card/Card';

const Header = ({ value, setValue }) => {
	return (
		<>
			<StyledHeader>
				<Card value={value} setValue={setValue} />
			</StyledHeader>
		</>
	);
};

export default Header;
