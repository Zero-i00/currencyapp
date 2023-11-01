import { StatusBar } from 'expo-status-bar';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './app/store/store'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './app/navigation/Navigation'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider style={{ flex: 1 }}>
          <Navigation />
        </SafeAreaProvider>
        <StatusBar style='dark'></StatusBar>
      </PersistGate>
    </Provider>
  );
}
