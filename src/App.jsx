import UserTable from "./components/antd-table/UserTable";
import Preview from "./components/preview/Preview";
import { TableContextProvider } from "./context/context/TableContext";
// import ComponentOne from "./components/ComponentOne";
// import { TestContextProvider } from "./context/context/TestContext";

function App() {
  return (
    <>
      {/* <TestContextProvider>
        <ComponentOne />
      </TestContextProvider> */}
      <TableContextProvider>
        <Preview />
        <UserTable />
      </TableContextProvider>
    </>
  );
}

export default App;
