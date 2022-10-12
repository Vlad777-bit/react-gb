import React, { FC } from 'react'
import { CustomInputProps } from './CustomInput.props'


export const CustomInput: FC<CustomInputProps> = ({...props}) => {
  return (
    <input {...props} />
  )
}
