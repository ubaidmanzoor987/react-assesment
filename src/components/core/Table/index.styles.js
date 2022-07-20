import styled from "@emotion/styled";

export const StyledDiv = styled.div`
  .react-dataTable {
    border-radius: 0;
    .rdt_TableHead {
      .rdt_TableHeadRow {
        background-color: #f3f2f7;
        border-top: 1px solid;
        border-color: #ebe9f1;
        min-height: 0;
        height: 38px;
        .rdt_TableCol {
          padding: 0.72rem 1.5rem;
          .rdt_TableCol_Sortable {
            color: #6e6b7b;
            font-weight: bold;
            font-style: 0.857rem;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            &:hover {
              opacity: 1;
            }
            span {
              margin-left: 0.35rem;
            }
          }
          &:first-child {
            .form-check {
              transform: translateX(-10px);
            }
          }
        }
      }
    }
    .rdt_TableBody {
      .rdt_TableRow {
        color: #6e6b7b;
        min-height: 100px;
        @media (max-width: 767px) {
          min-height: 160px;
        }
        .rdt_TableCell {
          height: 53px;
          padding: 0.72rem 1.5rem;
          .column-action {
            svg {
              stroke: #6e6b7b;
            }
            .dropdown-item:hover {
              svg {
                stroke: #7367f0;
              }
            }
            .dropdown-item:active {
              svg {
                stroke: "white";
              }
            }
          }
        }
      }
    }
    .react-paginate {
      &.separated-pagination {
        .page-item:first-child .page-link,
        .page-item:last-child .page-link {
          border-radius: 50%;
        }
      }
    }
    &.roles-table {
      .rdt_TableHead .rdt_TableHeadRow .rdt_TableCol:first-child .form-check {
        transform: translateX(0);
      }
      .rdt_TableBody .rdt_TableRow .rdt_TableCell:first-child .form-check {
        transform: translateX(10px);
      }
    }
    &.react-dataTable-selectable-rows {
      .rdt_TableHead {
        .rdt_TableHeadRow {
          .rdt_TableCol:not(:first-child) {
            padding-left: 0.2rem;
          }
        }
      }
    }
  }
  .permission-header {
    @media (max-width: 740px) {
      .add-permission {
        margin-top: 1rem !important;
      }
    }
  }
  .rdt_Pagination {
    select {
      min-width: 30px;
      &:focus,
      &:active {
        outline: 0;
      }
    }
  }
  .dataTable-filter {
    max-width: 220px;
  }
  .dataTable-select {
    width: 5rem;
    &:not([multiple="multiple"]) {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
      background-position: calc(100% - 12px) 10px, calc(100% - 20px) 12px,
        100% 0;
      background-size: 10px 10px, 10px 10px;
    }
  }
  .pagination {
    &.react-paginate {
      .page-link {
        transition: all 0.05s ease-in-out;
      }
      .page-item.prev,
      .page-item.next {
        a.page-link:before,
        a.page-link:after {
          height: 16.83px;
          margin-top: 1px;
        }
      }
      &.pagination-sm {
        .page-item.prev,
        .page-item.next {
          a.page-link:before,
          a.page-link:after {
            height: 14.5px;
          }
        }
      }
      &.pagination-lg {
        .page-item.prev,
        .page-item.next {
          a.page-link:before,
          a.page-link:after {
            height: 19.5px;
          }
        }
      }
    }
    &.no-navigation {
      li:first-of-type,
      li:last-of-type {
        display: none;
      }
    }
  }
  .page-item {
    border-radius: 5rem;
    &:not(.prev-item),
    &:not(.next-item),
    &:not(.first),
    &:not(.last),
    &:not(.active) {
      .page-link {
        line-height: 1.3;
      }
    }
    .page-link {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &.previous,
    &.prev,
    &.next,
    &.first,
    &.last {
      .page-link {
        width: auto;
      }
    }
    &.prev-item,
    &.next-item {
      .page-link {
        transition: all 0.2s ease-out;
      }
    }
    // prev and next item separated styles
    &.prev-item {
      margin-right: 0.3571rem;
      .page-link {
        border-radius: 50%;
        background-color: #f3f2f7;
        &:before {
          background-image: url("https://i.ibb.co/Y29fpXM/chevron-left.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 14px;
          color: #6e6b7b;
          width: 8px;
          height: 18px;
          content: "";
        }
        &:hover {
          background: #f3f2f7;
          color: #7367f0;
        }
        &:active,
        &:hover {
          /* background-color: #7367f0 !important; */
          &:before {
            background-image: url(str-replace(
              str-replace(
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E",
                "currentColor",
                white
              ),
              "#",
              "%23"
            )) !important;
          }
        }
      }
      &.disabled {
        .page-link {
          &:before {
            background-image: url(str-replace(
              str-replace(
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E",
                "currentColor",
                #b9b9c3
              ),
              "#",
              "%23"
            ));
          }
        }
      }
      & ~ .page-item:nth-child(2) {
        border-top-left-radius: 5rem;
        border-bottom-left-radius: 5rem;
        .page-link {
          border-top-left-radius: 5rem !important;
          border-bottom-left-radius: 5rem !important;
        }
      }
      & ~ .page-item:nth-last-child(2) {
        border-top-right-radius: 5rem;
        border-bottom-right-radius: 5rem;
        .page-link {
          border-top-right-radius: 5rem !important;
          border-bottom-right-radius: 5rem !important;
        }
      }
    }
    &.next-item {
      margin-left: 0.3571rem;
      .page-link {
        border-radius: 50%;
        background-color: #f3f2f7;
        &:after {
          background-image: url("https://i.ibb.co/zm4GPJ6/chevron-right.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 14px;
          width: 8px;
          height: 18px;
          content: "";
        }
        &:hover {
          background: #f3f2f7;
          color: #7367f0;
        }
        &:active,
        &:hover {
          /* background-color: #7367f0 !important; */
          &:after {
            background-image: url(str-replace(
              str-replace(
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E",
                "currentColor",
                white
              ),
              "#",
              "%23"
            )) !important;
          }
        }
      }
      &.disabled {
        .page-link {
          &:after {
            background-image: url(str-replace(
              str-replace(
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E",
                "currentColor",
                #b9b9c3
              ),
              "#",
              "%23"
            ));
          }
        }
      }
    }
    // prev and next style
    &.prev,
    &.previous {
      .page-link {
        &:before {
          background-image: url(str-replace(
            str-replace(
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E",
              "currentColor",
              #6e6b7b
            ),
            "#",
            "%23"
          ));
          background-repeat: no-repeat;
          background-position: center;
          background-size: 14px;
          color: #6e6b7b;
          width: 12px;
          height: 18px;
          content: "";
        }
        // &:active,
        &:hover {
          &:before {
            background-image: url(str-replace(
              str-replace(
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E",
                "currentColor",
                #7367f0
              ),
              "#",
              "%23"
            )) !important;
          }
        }
      }
      &.disabled {
        .page-link {
          &:before {
            background-image: url(str-replace(
              str-replace(
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E",
                "currentColor",
                #b9b9c3
              ),
              "#",
              "%23"
            ));
          }
        }
      }
    }
    &.next {
      .page-link {
        &:after {
          background-image: url(str-replace(
            str-replace(
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E",
              "currentColor",
              #6e6b7b
            ),
            "#",
            "%23"
          ));
          background-repeat: no-repeat;
          background-position: center;
          background-size: 14px;
          color: #6e6b7b;
          width: 12px;
          height: 18px;
          content: "";
        }
        // &:active,
        &:hover {
          &:after {
            background-image: url(str-replace(
              str-replace(
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E",
                "currentColor",
                #7367f0
              ),
              "#",
              "%23"
            )) !important;
          }
        }
      }
      &.disabled {
        .page-link {
          &:after {
            background-image: url(str-replace(
              str-replace(
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E",
                "currentColor",
                #b9b9c3
              ),
              "#",
              "%23"
            ));
          }
        }
      }
    }
    &.disabled {
      .page-link {
        color: #b9b9c3;
      }
    }
    // page link customization
    .page-link {
      margin: 0;
      margin-left: 0;
      font-size: 1rem;
      min-width: 2.286rem;
      &:focus {
        box-shadow: none;
      }
      &:hover {
        color: #7367f0;
      }
    }
    // for active page item
    &.active {
      background-color: #f3f2f7;
      border-radius: 0;
      .page-link {
        z-index: 3;
        border-radius: 5rem;
        background-color: #7367f0;
        color: white !important;
        font-weight: 600;
      }
    }
    // if you don't want separated look
    &:first-child:not(.prev-item) {
      &.active {
        border-top-left-radius: 1.428rem;
        border-bottom-left-radius: 1.428rem;
        .page-link {
          border-radius: 5rem;
        }
      }
      .page-link {
        border-top-left-radius: 1.428rem;
        border-bottom-left-radius: 1.428rem;
      }
    }
    &:last-child:not(.next-item) {
      &.active {
        border-top-right-radius: 1.428rem;
        border-bottom-right-radius: 1.428rem;
        .page-link {
          border-radius: 5rem;
        }
      }
      .page-link {
        border-top-right-radius: 1.428rem;
        border-bottom-right-radius: 1.428rem;
      }
    }
  }
  // For Pagination Font sizes
  .pagination {
    // For Pagination lg
    &.pagination-lg {
      .page-item {
        .page-link {
          font-size: 1.14rem;
          min-width: 2.6rem;
        }
      }
    }
    // For Pagination sm
    &.pagination-sm {
      .page-item {
        .page-link {
          font-size: 0.857rem;
          min-width: 2rem;
        }
      }
    }
  }
`;
