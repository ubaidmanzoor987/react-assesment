import { Container } from "reactstrap";
import DataTables from "../core/Table";

const TopCampaign = () => {
  const cell = (row) => (
    <div style={{ marginTop: 40 }}>
      <p className="m-0">
        <b>Name: </b> {row.full_name}
      </p>
      <p className="m-0">
        <b>Device: </b> {row.device}
      </p>
      <p className="m-0">
        <b>Ad network type: </b> {row.network_type}
      </p>
    </div>
  );

  const basicColumns = [
    {
      name: "Multiple Dimenions",
      sortable: true,
      maxWidth: "300px",
      cell,
    },
    {
      name: "Click",
      sortable: true,
      maxWidth: "140px",
      selector: (row) => row.clicks,
    },
    {
      name: "Impression",
      sortable: true,
      maxWidth: "150px",
      selector: (row) => row.impressions,
    },
    {
      name: "Ctr",
      sortable: true,
      maxWidth: "120px",
      selector: (row) => row.ctr,
    },
    {
      name: "Cost",
      sortable: true,
      maxWidth: "120px",
      selector: (row) => row.cost,
    },
    {
      name: "Conversion",
      sortable: true,
      maxWidth: "180px",
      selector: (row) => row.conversions,
    },
    {
      name: "All conversion value",
      sortable: true,
      maxWidth: "250px",
      selector: (row) => row.all_conversion,
    },
  ];
  const data = [
    {
      full_name: "Product Launc Campaign",
      device: "Iphone",
      network_type: "Google Display",
      clicks: 97,
      impressions: "7,788",
      ctr: "1.52%",
      cost: "$85.30",
      conversions: "8.14",
      all_conversion: "207.76",
    },
    {
      full_name: "Product Launc Campaign",
      device: "Iphone",
      network_type: "Google Display",
      clicks: 97,
      impressions: "7,788",
      ctr: "1.52%",
      cost: "$85.30",
      conversions: "8.14",
      all_conversion: "207.76",
    },
    {
      full_name: "Product Launc Campaign",
      device: "Iphone",
      network_type: "Google Display",
      clicks: 97,
      impressions: "7,788",
      ctr: "1.52%",
      cost: "$85.30",
      conversions: "8.14",
      all_conversion: "207.76",
    },
    {
      full_name: "Product Launc Campaign",
      device: "Iphone",
      network_type: "Google Display",
      clicks: 97,
      impressions: "7,788",
      ctr: "1.52%",
      cost: "$85.30",
      conversions: "8.14",
      all_conversion: "207.76",
    },
    {
      full_name: "Product Launc Campaign",
      device: "Iphone",
      network_type: "Google Display",
      clicks: 97,
      impressions: "7,788",
      ctr: "1.52%",
      cost: "$85.30",
      conversions: "8.14",
      all_conversion: "207.76",
    },
    {
      full_name: "Product Launc Campaign",
      device: "Iphone",
      network_type: "Google Display",
      clicks: 97,
      impressions: "7,788",
      ctr: "1.52%",
      cost: "$85.30",
      conversions: "8.14",
      all_conversion: "207.76",
    },
    {
      full_name: "Product Launc Campaign",
      device: "Iphone",
      network_type: "Google Display",
      clicks: 97,
      impressions: "7,788",
      ctr: "1.52%",
      cost: "$85.30",
      conversions: "8.14",
      all_conversion: "207.76",
    },
    {
      full_name: "Product Launc Campaign",
      device: "Iphone",
      network_type: "Google Display",
      clicks: 97,
      impressions: "7,788",
      ctr: "1.52%",
      cost: "$85.30",
      conversions: "8.14",
      all_conversion: "207.76",
    },
    {
      full_name: "Product Launc Campaign",
      device: "Iphone",
      network_type: "Google Display",
      clicks: 97,
      impressions: "7,788",
      ctr: "1.52%",
      cost: "$85.30",
      conversions: "8.14",
      all_conversion: "207.76",
    },
    {
      full_name: "Product Launc Campaign",
      device: "Iphone",
      network_type: "Google Display",
      clicks: 97,
      impressions: "7,788",
      ctr: "1.52%",
      cost: "$85.30",
      conversions: "8.14",
      all_conversion: "207.76",
    },
    {
      full_name: "Product Launc Campaign",
      device: "Iphone",
      network_type: "Google Display",
      clicks: 97,
      impressions: "7,788",
      ctr: "1.52%",
      cost: "$85.30",
      conversions: "8.14",
      all_conversion: "207.76",
    },
    {
      full_name: "Product Launc Campaign",
      device: "Iphone",
      network_type: "Google Display",
      clicks: 97,
      impressions: "7,788",
      ctr: "1.52%",
      cost: "$85.30",
      conversions: "8.14",
      all_conversion: "207.76",
    },
    {
      full_name: "Product Launc Campaign",
      device: "Iphone",
      network_type: "Google Display",
      clicks: 97,
      impressions: "7,788",
      ctr: "1.52%",
      cost: "$85.30",
      conversions: "8.14",
      all_conversion: "207.76",
    },
    {
      full_name: "Product Launc Campaign",
      device: "Iphone",
      network_type: "Google Display",
      clicks: 97,
      impressions: "7,788",
      ctr: "1.52%",
      cost: "$85.30",
      conversions: "8.14",
      all_conversion: "207.76",
    },
    {
      full_name: "Product Launc Campaign",
      device: "Iphone",
      network_type: "Google Display",
      clicks: 97,
      impressions: "7,788",
      ctr: "1.52%",
      cost: "$85.30",
      conversions: "8.14",
      all_conversion: "207.76",
    },
    {
      full_name: "Product Launc Campaign",
      device: "Iphone",
      network_type: "Google Display",
      clicks: 97,
      impressions: "7,788",
      ctr: "1.52%",
      cost: "$85.30",
      conversions: "8.14",
      all_conversion: "207.76",
    },
    {
      full_name: "Product Launc Campaign",
      device: "Iphone",
      network_type: "Google Display",
      clicks: 97,
      impressions: "7,788",
      ctr: "1.52%",
      cost: "$85.30",
      conversions: "8.14",
      all_conversion: "207.76",
    },
  ];
  return (
    <Container className="mt-5">
      <DataTables
        data={data}
        basicColumns={basicColumns}
        title={"Top Compaign"}
        rowHeight={100}
      />
    </Container>
  );
};
export default TopCampaign;
