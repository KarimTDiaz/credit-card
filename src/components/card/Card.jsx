import {
	CardCvC,
	CardDate,
	CardName,
	CardNumber,
	StyledCardBack,
	StyledCardFront
} from './styles';

const Card = ({ value }) => {
	return (
		<>
			<StyledCardBack>
				<CardCvC>{value.cvc}</CardCvC>
			</StyledCardBack>
			<StyledCardFront>
				<CardNumber>{value.number || '0000 0000 0000 0000'}</CardNumber>
				<CardName>{value.name}</CardName>
				<CardDate>
					{value.month} / {value.year}
				</CardDate>
			</StyledCardFront>
		</>
	);
};

export default Card;
