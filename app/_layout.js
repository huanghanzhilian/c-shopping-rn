import { Stack } from 'expo-router/stack';

import { AuthProvider } from "../context/auth";
import { useState } from 'react';

export default function Layout() {
  const [loadedUser, setLoadedUser] = useState(null);

  return (
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
  );
}
