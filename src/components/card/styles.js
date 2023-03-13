import styled from 'styled-components';

const StyledCardBack = styled.div`
	position: absolute;
	right: 15px;
	top: 30px;
	width: 286px;
	height: 157px;
	background-image: url('/images/bg-card-back.png');
	background-size: cover;
	color: white;
`;

const StyledCardFront = styled.div`
	position: absolute;
	top: 119px;
	left: 15px;
	width: 286px;
	height: 157px;
	background-image: url('/images/card-logo.svg'),
		url('/images/bg-card-front.png');
	background-size: 54px, cover;
	background-repeat: no-repeat;
	background-position: 18px 19px, 0;
	color: white;
`;

const CardCvC = styled.span`
	position: absolute;
	right: 30px;
	top: 68px;
`;
const CardNumber = styled.span`
	position: absolute;
	top: 84.6px;
	left: 30px;
	font-size: 18px;
	letter-spacing: 0.1rem;
`;
const CardName = styled.span`
	position: absolute;
	top: 120px;
	left: 30px;
	font-size: 9px;
`;

const CardDate = styled.span`
	position: absolute;
	top: 120px;
	left: 230px;
	font-size: 9px;
`;

export {
	StyledCardBack,
	StyledCardFront,
	CardCvC,
	CardNumber,
	CardName,
	CardDate
};
