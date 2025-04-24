import React from 'react';
import { S } from './style';

type TableProps = {
  headers: string[];
  rows: React.ReactNode[][];
};

const Table: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <S.TableWrapper>
      <S.Table>
        <thead>
          <S.TableRow>
            {headers.map((header, index) => (
              <S.TableHeader key={index}>{header}</S.TableHeader>
            ))}
          </S.TableRow>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <S.TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <S.TableCell key={cellIndex}>{cell}</S.TableCell>
              ))}
            </S.TableRow>
          ))}
        </tbody>
      </S.Table>
    </S.TableWrapper>
  );
};

export default Table;
