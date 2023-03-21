import ComponentOne from "./components/ComponentOne";
import { TestContextProvider } from "./context/TestContext";

function App() {
  return (
    <>
      <TestContextProvider>
        <ComponentOne />
      </TestContextProvider>
    </>
  );
}

export default App;
