import { List } from '@mui/material';
import { FC } from 'react';
import { makeStyles } from 'tss-react/mui';
import { MUIMessageItem } from '../MUIMessageItem/MUIMessageItem';
import { MUIMessageListProps } from './MUIMessageList.props';

const useStyles = makeStyles()((theme) => ({
  userMessageList: {
    width: '100%',
    maxHeight: 'calc(100vh - 175px)',
    overflow: 'auto',

    padding: '15px',
  },
}));

export const MUIMessageList: FC<MUIMessageListProps> = ({ messageList }) => {
  const { classes } = useStyles();

  return (
    <List className={classes.userMessageList}>
      {messageList?.map((msg) => (
        <MUIMessageItem key={msg.id} messageData={msg} />
      ))}
    </List>
  );
};
