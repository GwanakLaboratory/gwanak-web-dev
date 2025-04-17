import { S } from './style';

export type TechTableProps = {
  index: string;
  title: string;
  subtitle?: string;
  description: string;
};

const TechTable = ({ data }: { data: TechTableProps[] }) => {
  return (
    <S.TechTableContainer>
      {data.map((item) => (
        <S.TechTableRow>
          <S.TechTableCellText>{item.index}</S.TechTableCellText>
          {item.subtitle ? (
            <S.TechTableCellWrapper>
              <S.TechTableTitleText>{item.title}</S.TechTableTitleText>
              <S.TechTableTitleText style={{ fontWeight: 300 }}>
                {item.subtitle}
              </S.TechTableTitleText>
            </S.TechTableCellWrapper>
          ) : (
            <S.TechTableCellText>{item.title}</S.TechTableCellText>
          )}
          <S.TechTableCellText style={{ fontWeight: 300 }}>
            {item.description}
          </S.TechTableCellText>
        </S.TechTableRow>
      ))}
    </S.TechTableContainer>
  );
};
export default TechTable;
