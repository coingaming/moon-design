import * as React from 'react';
import { Button, TextInput, Link } from '@heathmont/sportsbet-components';
import { IconEdit, IconSuccess, IconWarning } from '@heathmont/sportsbet-icons';
import { colors } from '@heathmont/sportsbet-tokens';
import { CashierNav } from './dumb-components/navigation';
import { NeedAssistanceBanner } from './dumb-components/need-assistance-banner';
import {
  CashierLayout,
  CashierHeading,
  CashierGrid,
  LayoutHeader,
  LayoutMain,
  LayoutAside,
  SettingsSection,
  SettingsBlock,
  BlockColumn,
  // InfoName,
  // ApprovedMethod,
  // Info,
  // Logo,
  // InfoTitle,
  // ApprovedIcon,
  // EditIcon,
  // AmountBlock,
  // HeadingBlock,
  // BannerSection,
  // BannerBlock,
  // OptionsBlock,
  // MessageBlock,
  // Options,
  // AmountOption,
  // MessageText,
  // MessageIcon,
  // PaymentMethodImage,
  // PaymentListBlock,
  // PaymentListItem,
  // PaymentCheck,
} from '@heathmont/sportsbet-user-portal-components';
import { SubNavigation } from '../../../nav/components/sub-navigation/sub-nav';

export const DepositView = () => {
  return (
    <CashierLayout>
      <SubNavigation />
      <CashierGrid asideWidth={280}>
        <LayoutHeader>
          <CashierHeading>Deposit</CashierHeading>
        </LayoutHeader>
        <LayoutMain>
          {/* <SettingsSection>
            <BlockColumn>
              <AmountBlock>
                <TextInput label="Enter amount" labelBlock />
              </AmountBlock>
              <HeadingBlock>Choose other payment method</HeadingBlock>
              <PaymentListBlock>
                <PaymentListItem>
                  <PaymentMethodImage
                    src="/assets/img/payment-logos/Ecopayz.png"
                    alt="Ecopayz"
                    size="large"
                  />
                </PaymentListItem>
                <PaymentListItem>
                  <PaymentMethodImage
                    src="/assets/img/payment-logos/Ecopayz.png"
                    alt="Ecopayz"
                    size="large"
                  />
                </PaymentListItem>
                <PaymentListItem active>
                  <PaymentMethodImage
                    src="/assets/img/payment-logos/Ecopayz.png"
                    alt="Ecopayz"
                    size="large"
                  />
                  <PaymentCheck>
                    <IconSuccess
                      color={colors.neutral[10]}
                      backgroundColor={colors.brand}
                    />
                  </PaymentCheck>
                </PaymentListItem>
                <PaymentListItem>
                  <PaymentMethodImage
                    src="/assets/img/payment-logos/Ecopayz.png"
                    alt="Ecopayz"
                    size="large"
                  />
                </PaymentListItem>
                <PaymentListItem>
                  <PaymentMethodImage
                    src="/assets/img/payment-logos/Ecopayz.png"
                    alt="Ecopayz"
                    size="large"
                  />
                </PaymentListItem>
                <PaymentListItem>
                  <PaymentMethodImage
                    src="/assets/img/payment-logos/Ecopayz.png"
                    alt="Ecopayz"
                    size="large"
                  />
                </PaymentListItem>
                <PaymentListItem>
                  <PaymentMethodImage
                    src="/assets/img/payment-logos/Ecopayz.png"
                    alt="Ecopayz"
                    size="large"
                  />
                </PaymentListItem>
                <PaymentListItem>
                  <PaymentMethodImage
                    src="/assets/img/payment-logos/Ecopayz.png"
                    alt="Ecopayz"
                    size="large"
                  />
                </PaymentListItem>
                <PaymentListItem>
                  <PaymentMethodImage
                    src="/assets/img/payment-logos/Ecopayz.png"
                    alt="Ecopayz"
                    size="large"
                  />
                </PaymentListItem>
              </PaymentListBlock>
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
          </SettingsSection> */}
        </LayoutMain>
        <LayoutAside>
          {/* <BannerSection>
            <BannerBlock>
              <NeedAssistanceBanner />
            </BannerBlock>
            <BannerBlock>
              <NeedAssistanceBanner />
            </BannerBlock>
          </BannerSection> */}
        </LayoutAside>
      </CashierGrid>
    </CashierLayout>
  );
};
