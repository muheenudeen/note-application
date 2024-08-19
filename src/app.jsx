import { Provider } from "react-redux";
import store from "./Note/storre";
import Description from "./Note/description";
import Title from "./Note/title";



export function App() {
 

  return (
    <>
     
     
     <Provider store={store}>
     <Description/>
     <Title/>
     </Provider>
    
    </>
  )
}
