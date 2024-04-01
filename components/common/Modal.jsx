import React from 'react'
import { Pressable, Text, View } from 'react-native'
import ReactNativeModal from 'react-native-modal'

import Icons from './Icons'

const Modal = props => {
  //? Porps
  const { isShow, onClose, closeOnClickOverlay, effect, children, ...restProps } = props

  //? Handers
  const handleBackdropPress = () => {
    closeOnClickOverlay && onClose()
  }

  //? Render(s)
  return (
    <ReactNativeModal isVisible={isShow} onBackdropPress={handleBackdropPress} {...restProps}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { onClose })
        }

        return child
      })}
    </ReactNativeModal>
  )
}

const Content = props => {
  //? Props
  const { onClose, children, ...restProps } = props

  //? Render(s)
  return (
    <View {...restProps}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { onClose })
        }

        return child
      })}
    </View>
  )
}

const Header = props => {
  //? Props
  const { onClose, children } = props

  //? Render(s)
  return (
    <View className="flex flex-row items-center justify-between pb-2 border-b-2 border-gray-200 mb-2">
      <Text className="text-sm">{children}</Text>
      <Pressable onPress={onClose} className="p-1">
        <Icons.AntDesign name="close" size={16} className="icon" />
      </Pressable>
    </View>
  )
}

const Body = ({ children }) => {
  return <>{children}</>
}

const _default = Object.assign(Modal, {
  Modal,
  Content,
  Header,
  Body,
})

export default _default
