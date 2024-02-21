import { View, Image } from 'react-native'

import FeedSectionContainer from '../common/FeedSectionContainer'

export default function BannerOne(props) {
  //? Props
  const { data } = props

  //? Render(s)
  if (data.length === 0) return null
  return (
    <FeedSectionContainer title="今日专题">
      <View className="w-full flex flex-row flex-wrap">
        {data.map((item, index) => (
          <View
            className={`w-[49%] h-24 mr-[2%] mb-[2%] ${index % 2 === 1 ? 'mr-0 mb-0' : ''}`}
            key={index}
          >
            <Image
              key={index}
              source={{
                uri: item.image.url,
              }}
              className="w-full h-full rounded-lg"
            />
          </View>
        ))}
      </View>
    </FeedSectionContainer>
  )
}
