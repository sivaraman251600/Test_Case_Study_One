import './App.css';
import ContextAccessingPages from './components/Context_API/ContextAccessingPages/ContextAccessingPages';
import SeconAccessingPage from './components/Context_API/ContextAccessingPages/SeconAccessingPage';
import CreateContextProvider from './components/Context_API/Create_Context/CreateContext';
// import ConditionalRendering from './components/conditionalRendering';
// import DisplayPassengerDetails from './components/DisplayPassengerDetails';
// import ForEachJson from './components/ForEachJson';
// import MultipleCheckBox from './components/Pages/MultipleCheckBox';
// import LoginPageValidation from './components/LoginPageValidation';
// import Test from './components/test';

function App() {
  return (
    <div className="App">
      {/* <Test />
      <LoginPageValidation /> */}
      {/* <ConditionalRendering /> */}
      {/* <ForEachJson /> */}
      {/* <DisplayPassengerDetails /> */}
      {/* <MultipleCheckBox /> */}
      <CreateContextProvider>
        <ContextAccessingPages />
        <SeconAccessingPage />
    </CreateContextProvider>
    </div>
  );
}

export default App;
