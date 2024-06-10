import Logo from "./Components/Logo/Logo";
import Body from "./Components/Body/Body"
import { SnackbarProvider } from 'notistack'


function App() {
  return (
    <div>
      <SnackbarProvider>
      <Logo/>
      <Body/>
      </SnackbarProvider>
     
      
    </div>
  );
}

export default App;
