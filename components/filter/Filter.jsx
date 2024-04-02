import { useLocalSearchParams } from 'expo-router'
import { useEffect } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import { Switch } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Icons from '../common/Icons'
import Modal from '../common/Modal'

import { useAppDispatch, useAppSelector, useDebounce, useDisclosure } from '@/hooks'
import { loadFilters, resetFilter, updateFilter } from '@/store'

const Filter = props => {
  //? Props
  const { mainMinPrice, mainMaxPrice, handleChangeRoute } = props

  //? Assets
  const dispatch = useAppDispatch()
  const [isFilters, filtersHandlers] = useDisclosure()
  const params = useLocalSearchParams()
  const insets = useSafeAreaInsets()

  //? State
  const filters = useAppSelector(state => state.filters)

  //? Debounced Values
  const debouncedMinPrice = useDebounce(filters.minPrice, 1200)
  const debouncedMaxPrice = useDebounce(filters.maxPrice, 1200)
  //? Handlers
  const handlefilter = props => {
    const { name, value, type } = props
    const filterValue = value
    dispatch(updateFilter({ name, value: filterValue }))

    if (type === 'checkbox') handleChangeRoute({ [name]: filterValue })
  }

  const handleResetFilters = () => {
    handleChangeRoute({ inStock: '', discount: '', price: '' })
    dispatch(resetFilter({ maxPrice: String(mainMaxPrice), minPrice: String(mainMinPrice) }))
    if (filtersHandlers.close) filtersHandlers.close()
  }

  const canReset =
    !!params.inStock ||
    !!params.discount ||
    mainMinPrice !== debouncedMinPrice ||
    mainMaxPrice !== debouncedMaxPrice

  //? Re-Renders
  //*   load Filters
  useEffect(() => {
    dispatch(
      loadFilters({
        price: mainMaxPrice && mainMinPrice ? `${mainMinPrice}-${mainMaxPrice}` : '',
        discount: 'false',
        inStock: 'false',
        ...params,
      })
    )
  }, [params.category, mainMaxPrice, mainMinPrice, dispatch])
  //*   Change Route After Debounce
  useEffect(() => {
    if (Number(debouncedMinPrice) && mainMinPrice !== Number(debouncedMinPrice))
      handleChangeRoute({
        price: `${debouncedMinPrice}-${debouncedMaxPrice}`,
      })
  }, [debouncedMinPrice])

  useEffect(() => {
    if (Number(debouncedMaxPrice) && mainMaxPrice !== Number(debouncedMaxPrice))
      handleChangeRoute({
        price: `${debouncedMinPrice}-${debouncedMaxPrice}`,
      })
  }, [debouncedMaxPrice])

  //*   Close Modal on Change Filter
  useEffect(() => {
    if (filtersHandlers.close) filtersHandlers.close()
  }, [filters.discount, filters.inStock, debouncedMaxPrice, debouncedMinPrice])

  //? Render(s)
  return (
    <>
      <View className=" px-3">
        <Pressable className="flex flex-row items-center gap-x-1" onPress={filtersHandlers.open}>
          <Icons.Ionicons name="filter" size={16} className="text-neutral-600" />
          <Text className="text-base text-neutral-600">筛选</Text>
        </Pressable>
      </View>
      <Modal
        isShow={isFilters}
        onClose={filtersHandlers.close}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        onBackdropPress={filtersHandlers.close}
      >
        <Modal.Content
          onClose={filtersHandlers.close}
          style={{ paddingTop: insets.top }}
          className="flex flex-col h-[100vh] w-[80vw] px-5 ml-[15vw] bg-white"
        >
          <Modal.Header onClose={filtersHandlers.close}>过滤器</Modal.Header>
          <Modal.Body>
            <View className="flex justify-end ">
              <Pressable disabled={!canReset} onPress={handleResetFilters}>
                <Text type="button" className="text-sm text-sky-500">
                  删除过滤器
                </Text>
              </Pressable>
            </View>

            <View className="divide-y">
              <View className="flex flex-row justify-between items-center py-2.5">
                <Text className="font-medium text-gray-700 w-3/4">仅限库存商品</Text>
                <Switch
                  value={filters.inStock}
                  onValueChange={value =>
                    handlefilter({ name: 'inStock', type: 'checkbox', value })
                  }
                />
              </View>
              <View className="flex flex-row justify-between items-center py-2.5">
                <Text className="font-medium text-gray-700 w-3/4">仅限特价商品</Text>
                <Switch
                  value={filters.discount}
                  onValueChange={value =>
                    handlefilter({ name: 'discount', type: 'checkbox', value })
                  }
                />
              </View>

              <View className="py-4">
                <Text className="font-medium text-gray-700">价格范围</Text>
                <View className="flex flex-row items-center justify-between gap-x-1">
                  <Text className="text-base">从</Text>

                  <TextInput
                    className="w-3/4 px-1 text-xl text-left border-b border-gray-200 outline-none"
                    keyboardType="number-pad"
                    value={filters.minPrice || 0}
                    name="minPrice"
                    onChangeText={value => handlefilter({ name: 'minPrice', type: 'input', value })}
                  />
                  <Text className="w-6 h-6">¥</Text>
                </View>
                <View className="flex flex-row items-center justify-between mt-2 mb-4 gap-x-1">
                  <Text className="text-base">到</Text>

                  <TextInput
                    className="w-3/4 px-1 text-xl text-left border-b border-gray-200 outline-none"
                    keyboardType="number-pad"
                    value={filters.maxPrice || 0}
                    name="maxPrice"
                    onChangeText={value => handlefilter({ name: 'maxPrice', type: 'input', value })}
                  />

                  <Text className="w-6 h-6">¥</Text>
                </View>
              </View>
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default Filter
