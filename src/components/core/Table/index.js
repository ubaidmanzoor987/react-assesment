import { useState } from "react";
import ReactPaginate from "react-paginate";
import { ChevronDown } from "react-feather";
import drive from "../../../assets/drive.PNG";
import DataTable from "react-data-table-component";
import { Card, CardTitle } from "reactstrap";
import { StyledDiv } from "./index.styles";
const DataTablesReOrder = (props) => {
  const { data, basicColumns, title, rowHeight } = props;
  const [currentPage, setCurrentPage] = useState(0);
  const handlePagination = (page) => {
    setCurrentPage(page.selected);
  };
  const CustomPagination = () => (
    <ReactPaginate
      nextLabel=""
      breakLabel="..."
      previousLabel=""
      pageRangeDisplayed={2}
      forcePage={currentPage}
      marginPagesDisplayed={2}
      activeClassName="active"
      pageClassName="page-item"
      breakClassName="page-item"
      nextLinkClassName="page-link"
      pageLinkClassName="page-link"
      breakLinkClassName="page-link"
      previousLinkClassName="page-link"
      nextClassName="page-item next-item"
      previousClassName="page-item prev-item"
      pageCount={Math.ceil(data.length / 7) || 1}
      onPageChange={(page) => handlePagination(page)}
      containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"
    />
  );
  return (
    <Card className="overflow-hidden">
      <div className="p-3 d-flex justify-content-between">
        <CardTitle tag="h5">{title}</CardTitle>
        <img width="30" height="30" src={drive} alt="drive" />
      </div>
      <StyledDiv>
        <div className="react-dataTable">
          <DataTable
            noHeader
            pagination
            data={data}
            columns={basicColumns}
            className="react-dataTable"
            sortIcon={<ChevronDown size={10} />}
            paginationComponent={CustomPagination}
            paginationDefaultPage={currentPage + 1}
            paginationRowsPerPageOptions={[10, 25, 50, 100]}
            customStyles={{
              rows: {
                style: {
                  minHeight: rowHeight,
                },
              },
            }}
          />
        </div>
      </StyledDiv>
    </Card>
  );
};
export default DataTablesReOrder;
