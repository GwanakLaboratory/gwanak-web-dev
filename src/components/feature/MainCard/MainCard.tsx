import React from 'react';
import { S } from './style';

type MainCardProps = {
  img: string;
  title: string;
  detail: string;
};

const MainCard = ({ img, title, detail }: MainCardProps) => {
  const formattedDetail = detail.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
  const formattedTitle = title.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
  return (
    <S.MainCardContainer>
      <S.CardImg src={img} alt="icon" />
      <S.CardTitleText>{formattedTitle}</S.CardTitleText>
      <S.CardSubTitleText>{formattedDetail}</S.CardSubTitleText>
    </S.MainCardContainer>
  );
};

export default MainCard;
