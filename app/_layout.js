import { Stack } from 'expo-router/stack';

import { store } from '../store'
import { Provider } from 'react-redux'

import { AuthProvider } from "../context/auth";
import { useState } from 'react';

export default function Layout() {
  const [loadedUser, setLoadedUser] = useState(null);

  return (
    <Provider store={store}>
        <AuthProvider userCredentials={loadedUser}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </AuthProvider>
    </Provider>
  );
}
