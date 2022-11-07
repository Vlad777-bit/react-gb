import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  setMessageList: (prev: any) => void;
}
