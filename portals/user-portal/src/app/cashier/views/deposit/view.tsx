import * as React from 'react';
import { Button, TextInput, Link } from '@heathmont/sportsbet-components';
import { IconEdit, IconSuccess, IconWarning } from '@heathmont/sportsbet-icons';
import { colors } from '@heathmont/sportsbet-tokens';
import { CashierLayout, CashierHeading } from '../../components/layout';
import { CashierNav } from './dumb-components/navigations';
import {
  CashierGrid,
  LayoutHeader,
  LayoutMain,
  LayoutAside,
} from '../../components/grid';
import { NeedAssistanceBanner } from './dumb-components/need-assistance-banner';
import {
  SettingsSection,
  SettingsBlock,
  BlockColumn,
} from '../../../settings/components';
import {
  InfoName,
  ApprovedMethod,
  Info,
  Logo,
  InfoTitle,
  ApprovedIcon,
  EditIcon,
  AmountBlock,
  HeadingBlock,
} from '../../components/approved-payment-method/method';
import {
  BannerSection,
  BannerBlock,
} from '../../components/side-bannar/side-bannar';
import {
  OptionsBlock,
  MessageBlock,
  Options,
  AmountOption,
  MessageText,
  MessageIcon,
} from '../../components/amount-options/amount-options';
import { PaymentMethodImage } from '../../..';

export const DepositView = () => {
  return (
    <CashierLayout>
      <CashierNav />
      <CashierGrid asideWidth={280}>
        <LayoutHeader>
          <CashierHeading>Deposit</CashierHeading>
        </LayoutHeader>
        <LayoutMain>
          <SettingsSection>
            <BlockColumn>
              <AmountBlock>
                <TextInput label="Enter amount" labelBlock />
              </AmountBlock>
              <OptionsBlock>
                <MessageBlock>
                  <MessageText>
                    You couldn’t deposit 30 EUR with this payment method, you
                    need to choose one of the following amounts.
                  </MessageText>
                  <MessageIcon>
                    <IconWarning
                      color={colors.neutral[100]}
                      backgroundColor={colors.warning}
                    />
                  </MessageIcon>
                </MessageBlock>
                <Options>
                  <AmountOption>10</AmountOption>
                  <AmountOption>25</AmountOption>
                  <AmountOption>50</AmountOption>
                  <AmountOption active>100</AmountOption>
                </Options>
              </OptionsBlock>
              <HeadingBlock>
                <div>Payment method</div>
                <div>
                  + <Link>Add another method</Link>
                </div>
              </HeadingBlock>
              <ApprovedMethod active>
                <Logo>
                  <PaymentMethodImage
                    src="/assets/img/payment-logos/Ecopayz.png"
                    alt="Ecopayz"
                  />
                </Logo>
                <Info>
                  <InfoTitle>And15151asf</InfoTitle>
                  <InfoName>Andrew Johnson</InfoName>
                </Info>
                <ApprovedIcon>
                  <p>
                    <IconSuccess
                      color={colors.neutral[10]}
                      backgroundColor={colors.brand}
                    />
                  </p>
                </ApprovedIcon>
                <EditIcon>
                  <IconEdit />
                </EditIcon>
              </ApprovedMethod>
              <ApprovedMethod>
                <Logo>
                  <PaymentMethodImage
                    src="/assets/img/payment-logos/Ecopayz.png"
                    alt="Ecopayz"
                  />
                </Logo>
                <Info>
                  <InfoTitle>And15151asf</InfoTitle>
                  <InfoName>Andrew Johnson</InfoName>
                </Info>
                <ApprovedIcon>
                  <IconEdit />
                </ApprovedIcon>
              </ApprovedMethod>
            </BlockColumn>
            <SettingsBlock>
              <Button modifier="primary">Deposit</Button>
            </SettingsBlock>
          </SettingsSection>
        </LayoutMain>
        <LayoutAside>
          <BannerSection>
            <BannerBlock>
              <NeedAssistanceBanner />
            </BannerBlock>
            <BannerBlock>
              <NeedAssistanceBanner />
            </BannerBlock>
          </BannerSection>
        </LayoutAside>
      </CashierGrid>
    </CashierLayout>
  );
};
