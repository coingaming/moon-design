import {
  TextAncor,
  TextAttach,
  TextBold,
  TextBulletsList,
  TextCards,
  TextCenter,
  TextClearFormatting,
  TextCut,
  TextDescreaseIndent,
  TextHashtag,
  TextIncreaseIndent,
  TextInsertLine,
  TextItalic,
  TextLeftAlign,
  TextListView,
  TextMarker,
  TextMath,
  TextNumbersList,
  TextRightAlign,
  TextSize,
  TextStrikethrough,
  TextStyle,
  TextTable,
  TextTableAlternative,
  TextUnderline,
} from '@heathmont/moon-icons-tw';
import Icon from './Icon';

interface Props {
  wrapperProps: {
    onClick: (iconName: string) => void;
    selectedIcons: string[];
  };
  props: {
    className: string;
  };
}

const Example = ({ wrapperProps, props }: Props) => (
  <>
    <Icon {...wrapperProps} name="TextAncor">
      <TextAncor {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextAttach">
      <TextAttach {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextBold">
      <TextBold {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextBulletsList">
      <TextBulletsList {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextCards">
      <TextCards {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextCenter">
      <TextCenter {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextClearFormatting">
      <TextClearFormatting {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextCut">
      <TextCut {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextDescreaseIndent">
      <TextDescreaseIndent {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextHashtag">
      <TextHashtag {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextInsertLine">
      <TextInsertLine {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextIncreaseIndent">
      <TextIncreaseIndent {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextItalic">
      <TextItalic {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextLeftAlign">
      <TextLeftAlign {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextListView">
      <TextListView {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextMarker">
      <TextMarker {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextMath">
      <TextMath {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextNumbersList">
      <TextNumbersList {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextRightAlign">
      <TextRightAlign {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextSize">
      <TextSize {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextStrikethrough">
      <TextStrikethrough {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextStyle">
      <TextStyle {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextTable">
      <TextTable {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextTableAlternative">
      <TextTableAlternative {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TextUnderline">
      <TextUnderline {...props} />
    </Icon>
  </>
);

export default Example;
