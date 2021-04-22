import React, { useMemo, useState } from "react";
import {
  useAsyncDebounce,
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { CustomTableStyles as s } from "../styles";

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <s.CustomTableGlobalFilterContainer>
      <s.CustomTableGlobalFilterText>Search:</s.CustomTableGlobalFilterText>
      <s.CustomTableGlobalFilterInput
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records.`}
      />
    </s.CustomTableGlobalFilterContainer>
  );
}

const CustomTable = (props) => {
  const [pageInputValue, setPageInputValue] = useState(0);
  const data = React.useMemo(() => (props.data ? props.data : []), [props]);
  const columns = React.useMemo(() => (props.columns ? props.columns : []), [
    props,
  ]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  useMemo(() => {
    setPageInputValue(pageIndex + 1);
  }, [pageIndex]);

  return (
    <s.CustomTableWrapper className="w-100">
      <s.CustomTableInteractiveHeader>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <s.CustomTableShowContentForm
          pageSize={pageSize}
          setPageSize={setPageSize}
          values={[10, 20, 30]}
        />
      </s.CustomTableInteractiveHeader>
      <s.CustomTableContainer {...props} {...getTableProps()}>
        <s.CustomTableThead>
          {headerGroups.map(function (headerGroup) {
            return (
              <s.CustomTableTR {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(function (column) {
                  return (
                    <s.CustomTableTH
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " 🔽"
                            : " 🔼"
                          : ""}
                      </span>
                    </s.CustomTableTH>
                  );
                })}
              </s.CustomTableTR>
            );
          })}
          <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: "left",
              }}
            ></th>
          </tr>
        </s.CustomTableThead>
        <s.CustomTableTbody {...getTableBodyProps()}>
          {page.map(function (row, i) {
            prepareRow(row);
            return (
              <s.CustomTableTR {...row.getRowProps()}>
                {row.cells.map(function (cell) {
                  return (
                    <s.CustomTableTD {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </s.CustomTableTD>
                  );
                })}
              </s.CustomTableTR>
            );
          })}
        </s.CustomTableTbody>
      </s.CustomTableContainer>
      <div className="pagination">
        <s.FirstTablePageButton
          onClick={() => {
            gotoPage(0);
            setPageInputValue(1);
          }}
          disabled={!canPreviousPage}
        />
        <s.PreviousTablePageButton
          onClick={() => {
            previousPage();
            setPageInputValue(pageIndex);
          }}
          disabled={!canPreviousPage}
        />
        <s.NextTablePageButton
          onClick={() => {
            nextPage();
            setPageInputValue(pageIndex + 2);
          }}
          disabled={!canNextPage}
        />
        <s.LastTablePageButton
          onClick={() => {
            gotoPage(pageCount - 1);
            setPageInputValue(pageCount);
          }}
          disabled={!canNextPage}
        />
        <s.TableRowText>
          Page&nbsp;
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </s.TableRowText>
        <s.CustomTableResultsArea
          value={pageInputValue}
          setValue={setPageInputValue}
          pageIndex={pageIndex}
          gotoPage={gotoPage}
        />
      </div>
      <s.TableRowText>{`Showing ${pageSize} results of ${rows.length} rows`}</s.TableRowText>
    </s.CustomTableWrapper>
  );
};

export default CustomTable;
