import { ListItemBaseProps } from '@mui/material';
import { MessageItemInterface } from '../../../types/MessageItemInterface';

export interface MUIMessageItemProps extends ListItemBaseProps {
  messageData: MessageItemInterface;
}
