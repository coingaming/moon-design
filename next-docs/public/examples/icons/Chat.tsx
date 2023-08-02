import {
  ChatChat,
  ChatComment,
  ChatCommentAdd,
  ChatCommentBubble,
  ChatCommentBubbleAlert,
  ChatCommentBubbleQuestionMark,
  ChatCommentRemove,
  ChatCommentText,
  ChatDoubleBubble,
  ChatStatsChat,
} from '@heathmont/moon-icons-tw';
import Icon from './Icon';
import type Props from './Props';

const Example = ({ wrapperProps, props }: Props) => (
  <>
    <Icon {...wrapperProps} name="ChatChat">
      <ChatChat {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ChatComment">
      <ChatComment {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ChatCommentAdd">
      <ChatCommentAdd {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ChatCommentBubble">
      <ChatCommentBubble {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ChatCommentBubbleAlert">
      <ChatCommentBubbleAlert {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ChatCommentBubbleQuestionMark">
      <ChatCommentBubbleQuestionMark {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ChatCommentRemove">
      <ChatCommentRemove {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ChatCommentText">
      <ChatCommentText {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ChatDoubleBubble">
      <ChatDoubleBubble {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ChatStatsChat">
      <ChatStatsChat {...props} />
    </Icon>
  </>
);

export default Example;
