import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { View } from 'react-native'

import { SubmitModalBtn } from '../common/Buttons'
import HandleResponse from '../common/HandleResponse'
import Modal from '../common/Modal'
import TextField from '../common/TextField'

import { useEditUserMutation } from '@/services'
import { mobileSchema } from '@/utils'

const UserMobileModal = props => {
  //? Props
  const { isShow, onClose, editedData } = props

  //? Patch Data
  const [editUser, { data, isSuccess, isLoading, error, isError }] = useEditUserMutation()

  //? Form Hook
  const {
    handleSubmit,
    control,
    formState: { errors: formErrors },
  } = useForm({
    resolver: yupResolver(mobileSchema),
    defaultValues: { mobile: editedData ? editedData : '' },
  })

  //? Handlers
  const submitHander = ({ mobile }) => {
    editUser({
      body: { mobile },
    })
  }

  //? Render(s)
  return (
    <>
      {/* Handle Edit User Response */}
      {(isSuccess || isError) && (
        <HandleResponse
          isError={isError}
          isSuccess={isSuccess}
          error={error?.data?.message}
          message={data?.message}
          onSuccess={onClose}
        />
      )}

      <Modal isShow={isShow} onClose={onClose} effect="bottom-to-top">
        <Modal.Content
          onClose={onClose}
          className="flex flex-col px-5 py-3 bg-white rounded-lg gap-y-5 "
        >
          <Modal.Header onClose={onClose}>手机号码记录及编辑</Modal.Header>
          <Modal.Body>
            <View className="flex flex-col justify-between">
              <TextField
                label="电话号码"
                control={control}
                errors={formErrors.mobile}
                name="mobile"
                inputMode="tel"
              />

              <View className="py-3 border-t-2 border-gray-200 lg:pb-0 ">
                <SubmitModalBtn onPress={handleSubmit(submitHander)} isLoading={isLoading}>
                  确认
                </SubmitModalBtn>
              </View>
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default UserMobileModal
