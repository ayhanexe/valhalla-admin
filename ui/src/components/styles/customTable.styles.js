import styled from "styled-components";

const FirstPageSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-chevron-double-left ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
    />
    <path
      fillRule="evenodd"
      d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
    />
  </svg>
);

const LastPageSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-chevron-double-right ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
    />
    <path
      fillRule="evenodd"
      d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
    />
  </svg>
);

const PreviousPageSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-chevron-left ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
    />
  </svg>
);

const NextPageSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-chevron-right ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
    />
  </svg>
);

export const CustomTableWrapper = styled.div`
  ${({ theme }) => (theme?.customTable ? { ...theme?.customTable } : null)}
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  padding: 0 0 10px 0;
`;

export const CustomTableContainer = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  margin-bottom: 7px;
`;

export const CustomTableInteractiveHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CustomTableThead = styled.thead``;
export const CustomTableTbody = styled.tbody`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  ${({ theme }) =>
    theme?.customTable.tbody ? { ...theme?.customTable.tbody } : null}
`;
export const CustomTableTfoot = styled.tfoot``;

export const CustomTableTR = styled.tr`
  padding: 5px;
  height: auto;
  display: flex;
  ${({ theme }) =>
    theme?.customTable.tr ? { ...theme?.customTable.tr } : null}
  &:nth-child(1) {
    border: none;
  }
`;
export const CustomTableTD = styled.td`
  width: 100%;
  display: inline-flex;
  padding: 5px 10px;
  font-size: 0.85vw;
`;
export const CustomTableTH = styled.th`
  width: 100%;
  display: inline-flex;
  padding: 5px 10px;
  font-size: 0.85vw;
`;
export const TableRowText = styled.span`
  width: 100%;

  font-size: 0.85em;

  text-align: right;
  float: right;
  padding: 5px 10px 0;
  ${({ theme }) => (theme?.tableRowText ? { ...theme?.tableRowText } : null)}
`;

const TablePageButtonElement = styled.button`
  width: 30px;
  height: 30px;

  padding: 0px 20px;
  margin: 5px 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) =>
    theme?.customTable?.tablePageButtonElement
      ? { ...theme?.customTable?.tablePageButtonElement }
      : null}

  border-radius: 5px;

  border: none;

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  &:nth-child(1) {
    margin-left: 20px;
  }
  &:nth-last-child(1) {
    margin-right: 20px;
  }
`;

const FirstTablePageButtonIcon = styled(FirstPageSVG)`
  width: 15px;
  height: 15px;
  flex: 0 0 15px;
  ${({ theme }) =>
    theme?.customTable?.tablePageButtonElement.icon
      ? { ...theme?.customTable?.tablePageButtonElement.icon }
      : null}
`;

const PreviousTablePageButtonIcon = styled(PreviousPageSVG)`
  width: 15px;
  height: 15px;
  flex: 0 0 15px;
  ${({ theme }) =>
    theme?.customTable?.tablePageButtonElement.icon
      ? { ...theme?.customTable?.tablePageButtonElement.icon }
      : null}
`;

const NextTablePageButtonIcon = styled(NextPageSVG)`
  width: 15px;
  height: 15px;
  flex: 0 0 15px;
  ${({ theme }) =>
    theme?.customTable?.tablePageButtonElement.icon
      ? { ...theme?.customTable?.tablePageButtonElement.icon }
      : null}
`;

const LastTablePageButtonIcon = styled(LastPageSVG)`
  width: 15px;
  height: 15px;
  flex: 0 0 15px;
  ${({ theme }) =>
    theme?.customTable?.tablePageButtonElement.icon
      ? { ...theme?.customTable?.tablePageButtonElement.icon }
      : null}
`;

export const FirstTablePageButton = (props) => (
  <TablePageButtonElement {...props}>
    <FirstTablePageButtonIcon />
  </TablePageButtonElement>
);

export const PreviousTablePageButton = (props) => (
  <TablePageButtonElement {...props}>
    <PreviousTablePageButtonIcon />
  </TablePageButtonElement>
);

export const NextTablePageButton = (props) => (
  <TablePageButtonElement {...props}>
    <NextTablePageButtonIcon />
  </TablePageButtonElement>
);

export const LastTablePageButton = (props) => (
  <TablePageButtonElement {...props}>
    <LastTablePageButtonIcon />
  </TablePageButtonElement>
);

const CustomTablePageChangerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const CustomTablePageChangerText = styled.span`
  font-size: 0.85em;
  font-weight: 500;
  margin: 4px 0 5px 10px;
  ${({ theme }) =>
    theme?.customTable?.customTablePageChangerText
      ? { ...theme?.customTable?.customTablePageChangerText }
      : null}
`;
const CustomTablePageChangerInput = styled.input`
  width: 70px;
  height: 30px;
  margin: 0 10px;
  padding: 0 5px 0 10px;
  border: none;
  border-radius: 5px;
  font-size: 0.85em;
  font-weight: 500;
  color: whitesmoke;
  ${({ theme }) =>
    theme?.customTable?.customTablePageChangerInput
      ? { ...theme?.customTable?.customTablePageChangerInput }
      : null}

  outline: none;
  -moz-default-appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
`;

export const CustomTableResultsArea = (props) => (
  <CustomTablePageChangerContainer>
    <CustomTablePageChangerText>Go to page:</CustomTablePageChangerText>
    <CustomTablePageChangerInput
      type="number"
      value={props.value}
      onChange={(e) => {
        const page = e.target.value ? Number(e.target.value) - 1 : 0;
        props.setValue(e.target.value);
        props.gotoPage(page);
      }}
    />
  </CustomTablePageChangerContainer>
);

export const CustomTableGlobalFilterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  margin: 0 0 0 10px;
`;
export const CustomTableGlobalFilterText = styled.span`
  font-size: 1em;
  font-weight: 600;
  ${({ theme }) =>
    theme?.customTable?.customTableGlobalFilterText
      ? { ...theme?.customTable?.customTableGlobalFilterText }
      : null}
`;
export const CustomTableGlobalFilterInput = styled.input`
  width: 150px;
  height: 30px;

  margin: 0 10px;
  padding: 0 0 0 10px;

  font-size: 0.85em;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  outline: none;
  ${({ theme }) =>
    theme?.customTable?.customTableGlobalFilterInput
      ? { ...theme?.customTable?.customTableGlobalFilterInput }
      : null}
`;

const CustomTableShowContentContainer = styled.div`
  width: 100px;
  height: 30px;
  ${({ theme }) =>
    theme?.customTable?.customTableShowContentSelect
      ? { ...theme?.customTable?.customTableShowContentSelect }
      : null}
  padding: 2px 5px;
  margin: 5px 10px;
  border-radius: 7px;
  overflow: hidden;
`;
const CustomTableShowContentSelect = styled.select`
  width: 100%;
  height: 100%;
  font-size: 0.85em;
  font-weight: 500;
  border: 0;
  ${({ theme }) =>
    theme?.customTable?.customTableShowContentSelect
      ? { ...theme?.customTable?.customTableShowContentSelect }
      : null}
`;
const CustomTableShowContentOption = styled.option``;

export const CustomTableShowContentForm = (props) => (
  <CustomTableShowContentContainer>
    <CustomTableShowContentSelect
      value={props.pageSize}
      onChange={(e) => {
        props.setPageSize(Number(e.target.value));
      }}
    >
      {props.values.map((pageSize) => (
        <CustomTableShowContentOption key={pageSize} value={pageSize}>
          Show {pageSize}
        </CustomTableShowContentOption>
      ))}
    </CustomTableShowContentSelect>
  </CustomTableShowContentContainer>
);
