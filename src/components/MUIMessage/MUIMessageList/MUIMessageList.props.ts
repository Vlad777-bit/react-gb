import { ListProps } from '@mui/material';
import { MessageItemInterface } from '../../../types/MessageItemInterface';

export interface MUIMessageListProps extends ListProps {
  messageList: MessageItemInterface[];
}
