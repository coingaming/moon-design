/** @jsx jsx */
import { useState, default as React } from 'react';
import { jsx } from '@emotion/core';
import {
  CashierLayout,
  StickyNav,
} from '@heathmont/sportsbet-user-portal-components';
import { LoggedInNav } from '../../../nav/dumb-components/logged-in-nav';
import { NonLoggedNav } from '../../../nav/dumb-components/non-logged-in-nav';
import { CashierNav } from '../wallets/dumb-components/navigation';
import { colors, border, base, breakpoints } from '@heathmont/sportsbet-tokens';
import rem from 'polished/lib/helpers/rem';
import {
  IconArrowLeft,
  IconCoins,
  IconExchange,
  IconMessage,
  IconWarningExclamation,
} from '@heathmont/sportsbet-icons';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import {
  Form,
  FormItem,
  TextInput,
  Button,
} from '@heathmont/sportsbet-components';
jsx;

export const WithdrawViewBTC = () => {
  const [isUserLoggedIn, login] = useState(false);

  return (
    <React.Fragment>
      {isUserLoggedIn ? (
        <LoggedInNav />
      ) : (
        <NonLoggedNav login={() => login(true)} />
      )}
      <StickyNav>
        <CashierNav />
      </StickyNav>

      <CashierLayout>
        <div
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: spacing('large'),
            paddingBottom: spacing('large'),
            borderBottom: `${border.width}px solid ${colors.neutral[70]}`,
          }}
        >
          <div
            css={{
              paddingRight: spacing(),
              paddingLeft: spacing(),
              fontSize: base.fontSize,
              color: colors.neutral[20],
              '&:hover': {
                color: `${colors.neutral[10]}`,
              },
            }}
          >
            <IconArrowLeft />
          </div>
          <p
            css={{
              fontSize: rem(20),
              color: colors.neutral[10],
              marginTop: 0,
            }}
          >
            Withdraw
          </p>
        </div>
        <div
          css={{
            padding: spacing('medium'),
            [mq(breakpoints.medium)]: {
              paddingRight: 0,
              paddingLeft: spacing('xlarge'),
              paddingTop: spacing('xlarge'),
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gridColumnGap: spacing('xlarge'),
              gridTemplateAreas: `
                "main    sidebar"
                `,
            },
          }}
        >
          <div
            css={{
              gridArea: 'main',
            }}
          >
            <div
              css={{
                borderRadius: border.radius.small,
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: colors.neutral[70],
                padding: rem(12),
              }}
            >
              <p css={{ marginTop: 0, color: colors.neutral[20] }}>
                To make a withdrawal all your deposits need at least 3
                confirmations.
              </p>
              <div
                css={{
                  marginLeft: 'auto',
                  fontSize: rem(16),
                  lineHeight: rem(16),
                }}
              >
                <IconWarningExclamation />
              </div>
            </div>
            <div css={{ marginTop: spacing('large') }}>
              <Form legend="Enter withdraw amount">
                <FormItem>
                  <div
                    css={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                    }}
                  >
                    <div css={{ flex: 'auto' }}>
                      <TextInput
                        label="Enter amount"
                        type="number"
                        placeholder="Enter amount"
                      />
                    </div>
                    <div
                      css={{
                        color: colors.neutral[20],
                        backgroundColor: colors.neutral[70],
                        padding: spacing(),
                        border: `${border.width * 2}px solid ${
                          colors.neutral[70]
                        }`,
                        height: rem(50),
                        borderRadius: border.radius.small,
                      }}
                    >
                      mBTC
                    </div>
                  </div>
                </FormItem>
                <p
                  css={{
                    fontSize: rem(12),
                    color: colors.warning,
                    marginTop: spacing('small'),
                    textAlign: 'right',
                  }}
                >
                  Minimum withdraw amount is €20
                </p>
                <FormItem>
                  <TextInput
                    label="Bitcoin address"
                    type="text"
                    placeholder="Enter your bitcoin address"
                  />
                </FormItem>

                <FormItem>
                  <div css={{ marginTop: spacing('large') }}>
                    <Button size="medium" modifier="primary">
                      Withdraw
                    </Button>
                  </div>
                </FormItem>
              </Form>
            </div>
          </div>
          <div
            css={{
              marginTop: spacing('large'),
              gridArea: 'sidebar',
              [mq(breakpoints.medium)]: {
                marginTop: 0,
              },
            }}
          >
            <div
              css={{
                display: 'flex',
                flexDirection: 'column',
                padding: spacing('medium'),
                border: `${border.width}px solid ${colors.neutral[70]}`,
                borderRadius: border.radius.small,
                marginBottom: spacing('xlarge'),
                '&:hover': {
                  backgroundColor: colors.neutral[70],
                },
              }}
            >
              <div
                css={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <div css={{ fontSize: '2rem', marginRight: spacing() }}>
                  <IconMessage />
                </div>
                <p css={{ marginTop: 0, fontSize: rem(16) }}>
                  Need assistance?
                </p>
              </div>
              <p
                css={{
                  fontSize: rem(14),
                  lineHeight: rem(24),
                  color: colors.neutral[20],
                }}
              >
                If you require any assistance our 24/7 live chat support is here
                to help.
              </p>
            </div>
            <div
              css={{
                display: 'flex',
                flexDirection: 'column',
                padding: spacing('medium'),
                border: `${border.width}px solid ${colors.neutral[70]}`,
                borderRadius: border.radius.small,
                marginBottom: spacing('xlarge'),
                '&:hover': {
                  backgroundColor: colors.neutral[70],
                },
              }}
            >
              <div
                css={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <div css={{ fontSize: '2rem', marginRight: spacing() }}>
                  <IconCoins />
                </div>
                <p css={{ marginTop: 0, fontSize: rem(16) }}>
                  How do Bitcoin transactions work?
                </p>
              </div>
              <p
                css={{
                  fontSize: rem(14),
                  lineHeight: rem(24),
                  color: colors.neutral[20],
                }}
              >
                If you require any assistance our 24/7 live chat support is here
                to help.
              </p>
            </div>
          </div>
          {/*
            <IconCoins />
            <IconExchange />
        */}
        </div>
      </CashierLayout>
    </React.Fragment>
  );
};
