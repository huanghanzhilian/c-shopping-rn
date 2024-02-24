import { useRouter } from 'expo-router'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

import { TextField } from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { setTokenAsync } from '@/store'

export default function LoginScreen() {
  //? Assets
  const dispatch = useAppDispatch()
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [submittedData, setSubmittedData] = useState(null)

  //? Store
  const { status } = useAppSelector(state => state.user)

  //? Handlers
  const onSubmit = data => {
    // Simulate form submission
    console.log('Submitted Data:', data)
    setSubmittedData(data)
  }

  const onLogIn = async () => {
    try {
      await dispatch(
        setTokenAsync(
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWVhODk4Njg2NjVhOGEyMjliODdhMCIsImlhdCI6MTcwODU5MDIzMSwiZXhwIjoxNzA4Njc2NjMxfQ.f5y6GIkfy6JcTPPcZYJfidiiKn13ceyYDtps3TP0fqg'
        )
      ).unwrap()
      router.back()
    } catch (error) {}
  }

  return (
    <View className="flex-1 w-[100vw] items-center justify-center bg-white">
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput {...field} style={styles.input} placeholder="Your Name" />
        )}
        name="name"
        rules={{ required: 'You must enter your name' }}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}

      <Controller
        control={control}
        render={({ field }) => <TextInput {...field} style={styles.input} placeholder="Email" />}
        name="email"
        rules={{
          required: 'You must enter your email',
          pattern: { value: /^\S+@\S+$/i, message: 'Enter a valid email address' },
        }}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

      {/* Submit Butonu */}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />

      {/* Gönderilen Veriler */}
      {submittedData && (
        <View style={styles.submittedContainer}>
          <Text style={styles.submittedTitle}>Submitted Data:</Text>
          <Text>Name: {submittedData.name}</Text>
          <Text>Email: {submittedData.email}</Text>
        </View>
      )}
      <TextField />
      <Pressable onPress={onLogIn}>
        <Text>Login: {status}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
})
