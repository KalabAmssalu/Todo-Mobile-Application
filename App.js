import { StatusBar } from "expo-status-bar";
import {useState} from 'react';
// styled components
import { Container } from "../todoApp/styles/appstyles";

//Components
import Home from "../todoApp/Components/Home";

import AppLoading from 'expo-app-loading'


//async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [ready, setReady] = useState(false);

    //initial todos
   // done
  const initialTodos = [];

  const [todos, setTodos] = useState(initialTodos);

  const loadTodos = () => {
    AsyncStorage.getItem("storedTodos").then((data) => {
      if(data!== null){
        setTodos(JSON.parse(data))
      }
    }).catch((err) => console.log(err))
  }

  if(!ready) {
    return(
      <AppLoading startAsync={loadTodos} 
      onFinish={()=> setReady(true)} 
      onError={(e) => console.warn(e)}/>
    )
  }

  return (
    <Container>
      <Home todos= {todos} setTodos={setTodos}/>
      <StatusBar style='light' />
    </Container>
  );
}
