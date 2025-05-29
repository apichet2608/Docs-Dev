import Table_MUIX from "./Components/Table/table";
const Homepage = () => {
  return (
    <>
      <div className="container mx-auto">
        <Table_MUIX
          datas={data}
          columns={columns}
          not_show_Count={true}
          loading={false}
        />
      </div>
    </>
  );
};

export default Homepage;
const data = [
  { id: 1, name: "John", role: "Admin" },
  { id: 2, name: "Jane", role: "User" },
];

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "role", headerName: "Role", width: 150 },
];
