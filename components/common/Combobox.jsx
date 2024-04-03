import { Fragment, useState } from 'react'
import { Control, useController } from 'react-hook-form'
import { View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

const Combobox = props => {
  //? Props
  const { list, name, control, placeholder } = props

  //? Form Hook
  const { field } = useController({ name, control })

  //? Handlers
  const filteredList = list.map(item => ({ ...item, label: item.name, value: item.code }))

  const onChangeHandler = value => {
    field.onChange(filteredList.find(item => item.value === value))
  }

  //? Render(s)
  return (
    <View className="w-full px-3 py-2.5 transition-colors border border-gray-200 rounded-md outline-none bg-zinc-50/30 focus:border-blue-600 leading-none">
      <RNPickerSelect
        onValueChange={onChangeHandler}
        items={filteredList}
        value={field.value?.code ?? ''}
        placeholder={{
          label: placeholder,
          value: '',
        }}
      />
    </View>
  )
}

export default Combobox
