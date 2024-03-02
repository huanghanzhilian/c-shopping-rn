import { yupResolver } from '@hookform/resolvers/yup'
import { Link, Stack, useRouter } from 'expo-router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ScrollView, Text, View } from 'react-native'

import { Button, HandleResponse, Logo, TextField } from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { useCreateUserMutation } from '@/services'
import { setTokenAsync } from '@/store'
import { registerSchema } from '@/utils'

export default function RegisterScreen() {
  //? Assets
  const dispatch = useAppDispatch()
  const router = useRouter()

  //? Create User
  const [createUser, { data, isSuccess, isError, isLoading, error }] = useCreateUserMutation()

  //? Form Hook
  const {
    handleSubmit,
    formState: { errors: formErrors },
    setFocus,
    control,
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' },
  })

  //? Focus On Mount
  useEffect(() => {
    setFocus('name')
  }, [])

  //? Store
  const { status } = useAppSelector(state => state.user)

  //? Handlers
  const onSubmit = async ({ name, email, password }) => {
    console.log('name', name)
    if (name && email && password) {
      await createUser({
        body: { name, email, password },
      })
    }
  }

  const onSuccess = async () => {
    try {
      await dispatch(setTokenAsync(data.data.token)).unwrap()
      router.back()
    } catch (error) {}
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: '注册',
          headerBackTitleVisible: false,
        }}
      />
      {/*  Handle Login Response */}
      {(isSuccess || isError) && (
        <HandleResponse
          isError={isError}
          isSuccess={isSuccess}
          error={error?.data?.message}
          message="注册成功"
          onSuccess={onSuccess}
        />
      )}
      <ScrollView className="h-[100%] bg-white pt-10">
        <View className="w-[100vw] px-8 py-6 space-y-4">
          <Logo className="mx-auto w-40 h-16" />
          <Text className=" mt-56">注册</Text>
          <View className="space-y-0">
            <TextField
              errors={formErrors.name}
              placeholder="请输入您的账户名称"
              name="name"
              control={control}
            />
            <TextField
              errors={formErrors.email}
              placeholder="请输入您的账户邮箱"
              name="email"
              keyboardType="email-address"
              autoCapitalize="none"
              control={control}
            />

            <TextField
              errors={formErrors.password}
              type="password"
              placeholder="请输入您的账户密码"
              name="password"
              control={control}
            />
            <TextField
              control={control}
              errors={formErrors.confirmPassword}
              type="password"
              placeholder="确认密码，请再次输入"
              name="confirmPassword"
            />
            <Button isLoading={isLoading} onPress={handleSubmit(onSubmit)}>
              注册
            </Button>
          </View>
          <View className="flex flex-row">
            <Text className="inline mr-2 text-gray-800 text-xs">我已经有账户了</Text>
            <Link replace href="/login" className="text-blue-400 text-xs">
              去登录
            </Link>
          </View>
        </View>
      </ScrollView>
    </>
  )
}
