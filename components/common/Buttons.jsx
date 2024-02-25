import { Text, TouchableOpacity } from 'react-native'

import Loading from '../loading/Loading'

export const Button = props => {
  //? Props
  const { isLoading = false, children, className = '', isRounded = false, ...restPropps } = props

  //? Render
  return (
    <TouchableOpacity
      disabled={isLoading}
      className={`py-3 px-8 flex items-center outline-none rounded-md active:scale-[.98] bg-red-500 button ${isRounded ? 'rounded-3xl' : ''} ${className}
    `}
      {...restPropps}
    >
      {isLoading ? <Loading /> : <Text className="text-white">{children}</Text>}
    </TouchableOpacity>
  )
}

export const LoginBtn = ({ children, ...restPropps }) => (
  <Button className="mx-auto rounded-3xl w-44" {...restPropps}>
    {children}
  </Button>
)

export const SubmitModalBtn = ({ children, ...restPropps }) => (
  <Button className="w-full max-w-xl mx-auto rounded-md btn lg:w-64 lg:ml-0" {...restPropps}>
    {children}
  </Button>
)
