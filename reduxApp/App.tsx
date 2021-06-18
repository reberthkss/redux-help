 import React from 'react';
 import ListOfDepartmentsScreen from "./src/screens/ListOfDepartmentsScreen";
 import {PersistGate} from "redux-persist/integration/react";
 import { Provider } from 'react-redux';
 import store, { persistor } from "./src/redux/ConfigureStore";

 const App = () => {
     return (
         <Provider store={store}>
             <PersistGate loading={null} persistor={persistor}>
                 <ListOfDepartmentsScreen/>
             </PersistGate>
         </Provider>
     )
 };
 export default App;
