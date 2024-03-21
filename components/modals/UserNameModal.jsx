import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { View } from 'react-native'

import { SubmitModalBtn } from '../common/Buttons'
import HandleResponse from '../common/HandleResponse'
import Modal from '../common/Modal'
import TextField from '../common/TextField'

import { useEditUserMutation } from '@/services'
import { nameSchema } from '@/utils'

const UserNameModal = props => {
  //? Props
  const { isShow, onClose, editedData } = props

  //? Edit User Query
  const [editUser, { data, isSuccess, isLoading, isError, error }] = useEditUserMutation()

  //? Form Hook
  const {
    handleSubmit,
    control,
    formState: { errors: formErrors },
  } = useForm({
    resolver: yupResolver(nameSchema),
    defaultValues: { name: editedData ? editedData : '' },
  })

  //? Handlers
  const submitHander = ({ name }) => {
    editUser({
      body: { name },
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
          <Modal.Header onClose={onClose}>身份信息的提交和编辑</Modal.Header>
          <Modal.Body>
            <View className="flex flex-col justify-between">
              <TextField
                label="名字和姓氏"
                control={control}
                errors={formErrors.name}
                name="name"
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

export default UserNameModal
