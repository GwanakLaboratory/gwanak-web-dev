import styled from '@emotion/styled';
import { COLOR } from '../../../lib/constants';

export const S = {
  TechTableContainer: styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;

    font-weight: 700;
  `,
  TechTableRow: styled.li`
    width: 100%;
    list-style: none;

    display: flex;
    align-items: center;
    gap: 20px;

    border-bottom: 1px solid ${COLOR.Grey300};
    height: 100px;
    justify-content: space-between;
    text-align: center;
  `,
  TechTableCellText: styled.span`
    font-size: 2.2rem;
    word-break: auto-phrase;
    width: 100px;
  `,
  TechTableCellWrapper: styled.div`
    width: 100%;
    display: flex;
    flex: 1 1 0%;

    flex-direction: column;
    align-items: flex-start;
    gap: 2px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  `,
  TechTableTitleText: styled.span`
    font-size: 2.2rem;
    word-break: keep-all;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    width: 100%;
  `,
};
