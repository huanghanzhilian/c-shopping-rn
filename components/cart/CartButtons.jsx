import { Pressable, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

import Icons from '../common/Icons'

import { decrease, increase, removeFromCart } from '@/store'
import { formatNumber } from '@/utils'

const CartButtons = props => {
  //? Props
  const { item } = props

  //? Assets
  const dispatch = useDispatch()

  //? Render(s)
  return (
    <View className="flex flex-row items-center py-2 text-sm rounded-md bg-white shadow justify-evenly">
      <Pressable onPress={() => dispatch(increase(item.itemID))} className="active:scale-90">
        <Icons.AntDesign name="plus" size={16} className="text-red-500 icon" />
      </Pressable>

      <Text className="text-sm min-w-[22px] text-center">{formatNumber(item.quantity)}</Text>

      {item.quantity === 1 ? (
        <Pressable
          onPress={() => dispatch(removeFromCart(item.itemID))}
          className="active:scale-90"
        >
          <Icons.AntDesign name="delete" size={16} className="text-red-500 icon" />
        </Pressable>
      ) : (
        <Pressable onPress={() => dispatch(decrease(item.itemID))} className="active:scale-90">
          <Icons.AntDesign name="minus" size={16} className="text-red-500 icon" />
        </Pressable>
      )}
    </View>
  )
}

export default CartButtons
