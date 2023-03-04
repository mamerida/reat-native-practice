import { StatusBar } from 'expo-status-bar';
import Main from './src/Components/Main';
import { NativeRouter } from 'react-router-native';

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NativeRouter>
        <Main/>
      </NativeRouter>
    </>
  );
}

