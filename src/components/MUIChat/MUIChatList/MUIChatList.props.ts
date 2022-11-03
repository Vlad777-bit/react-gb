import { ListProps } from '@mui/material';
import { ChatItemInterface } from '../../../types/ChatItemInterface';

export interface MUIChatsListProps extends ListProps {
  chatList: ChatItemInterface[];
}
