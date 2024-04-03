import { yupResolver } from '@hookform/resolvers/yup'
import regions from 'china-citys'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { SubmitModalBtn } from '../common/Buttons'
import Combobox from '../common/Combobox'
import DisplayError from '../common/DisplayError'
import HandleResponse from '../common/HandleResponse'
import Modal from '../common/Modal'
import TextField from '../common/TextField'

import { useUserInfo } from '@/hooks'
import { useEditUserMutation } from '@/services'
import { addressSchema } from '@/utils'

const AddressModal = props => {
  //? Porps
  const { isShow, onClose, address } = props

  //? Assets
  const AllProvinces = regions.getProvinces()
  const insets = useSafeAreaInsets()

  //? Get User Data
  const { userInfo } = useUserInfo()

  //? State
  const [cities, setCities] = useState([])
  const [areas, setAreas] = useState([])

  //? Form Hook
  const {
    handleSubmit,
    control,
    formState: { errors: formErrors },
    setValue,
    getValues,
    watch,
  } = useForm({
    resolver: yupResolver(addressSchema),
    defaultValues: address,
  })

  //? Edit User-Info Query
  const [editUser, { data, isSuccess, isLoading, isError, error }] = useEditUserMutation()

  //? Re-Renders
  //* Change cities beside on province

  useEffect(() => {
    setValue('area', {})
    getValues('city')?.code ? setAreas(regions.getAreasByCity(getValues('city')?.code)) : ''
    watch('city')
  }, [getValues('city')?.code])

  useEffect(() => {
    setValue('city', {})
    setCities(regions.getCitysByProvince(getValues('province')?.code))
    watch('province')
  }, [getValues('province')?.code])

  useEffect(() => {
    if (userInfo?.address) {
      setValue('city', userInfo.address.city)
      setValue('area', userInfo.address.area)
    }
  }, [])

  //? Handlers
  const submitHander = address => {
    editUser({
      body: { address },
    })
  }

  //? Render(s)
  return (
    <>
      {/* Handle Edit Address Response */}
      {(isSuccess || isError) && (
        <HandleResponse
          isError={isError}
          isSuccess={isSuccess}
          error={error?.data?.message}
          message={data?.message}
          onSuccess={onClose}
        />
      )}

      <Modal isShow={isShow} onClose={onClose} effect="bottom-to-top" className="m-0">
        <Modal.Content
          onClose={onClose}
          style={{ paddingTop: insets.top }}
          className="flex flex-col w-[100vw] h-[100vh] m-0 px-5 py-3 bg-white"
        >
          <Modal.Header onClose={onClose}>地址管理</Modal.Header>
          <Modal.Body>
            <Text>请输入您的收货地址</Text>
            <View className="flex flex-col justify-between flex-1 mt-4 overflow-y-auto">
              <View className="space-y-2">
                <View className="space-y-2">
                  <Combobox
                    control={control}
                    name="province"
                    list={AllProvinces}
                    placeholder="请选择您所在的省份"
                  />
                  <DisplayError errors={formErrors.province?.name} />
                </View>

                <View className="space-y-2 ">
                  <Combobox
                    control={control}
                    name="city"
                    list={cities}
                    placeholder="请选择您所在的城市"
                  />
                  <DisplayError errors={formErrors.city?.name} />
                </View>

                <View className="space-y-2 ">
                  <Combobox
                    control={control}
                    name="area"
                    list={areas}
                    placeholder="请选择您所在的区县"
                  />
                  <DisplayError errors={formErrors.area?.name} />
                </View>

                <TextField
                  label="街道信息"
                  control={control}
                  errors={formErrors.street}
                  name="street"
                />

                <TextField
                  label="邮政编码"
                  control={control}
                  errors={formErrors.postalCode}
                  name="postalCode"
                  type="number"
                  direction="ltr"
                  inputMode="numeric"
                />
              </View>

              <View className="py-3 border-t-2 border-gray-200 lg:pb-0 flex">
                <SubmitModalBtn
                  isLoading={isLoading}
                  className="ml-auto"
                  onPress={handleSubmit(submitHander)}
                >
                  确定
                </SubmitModalBtn>
              </View>
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default AddressModal
