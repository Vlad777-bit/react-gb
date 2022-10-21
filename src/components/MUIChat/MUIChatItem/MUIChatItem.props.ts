import { ListItemBaseProps } from "@mui/material";
import { ChatItemInterface } from "../../../types/ChatItemInterface";

export interface MUIChatItemProps extends ListItemBaseProps {
  chatData: ChatItemInterface;
}