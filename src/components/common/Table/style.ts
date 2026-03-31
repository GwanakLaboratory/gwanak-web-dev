import styled from '@emotion/styled';

export const S = {
  TableWrapper: styled.div`
    width: 100%;
    overflow-x: auto;
  `,
  Table: styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: left;
  `,
  TableRow: styled.tr`
    font-size: 1.6rem;
    border-bottom: 1px solid #e0e0e0;
  `,
  TableHeader: styled.th`
    padding: 12px;
    background-color: #f5f5f5;
    font-weight: 600;
  `,
  TableCell: styled.td`
    padding: 12px;
  `,
};
