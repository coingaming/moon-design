import * as React from 'react';
import {
  Heading,
  Form,
  FormItem,
  FileInput,
  TextInput,
  Button,
} from '@heathmont/sportsbet-components';
import { AccountNav } from './dumb-components/header';
import {
  SettingsText,
  SettingsSection,
  SettingsBlock,
  BlockContent,
  BlockColumn,
  DetailRow,
  CashierLayout,
  CashierHeading,
  HeadingDescription,
} from '@heathmont/sportsbet-user-portal-components';
import styled from '@emotion/styled';
import { mq } from '@heathmont/sportsbet-utils';
import { border, breakpoints, colors } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils/lib';

const ContentWrapper = styled.div((props: any) => ({
  display: 'flex',
  'flex-direction': 'column',
  ...props.css,
  [mq(breakpoints.medium)]: {
    'align-items': 'center',
    'flex-direction': 'row',
    'flex-wrap': 'wrap',
    ...props.cssMqMedium,
  },
}));

const DynamicContentItem = styled.div((props: any) => ({
  order: 0,
  margin: props.margin || 0,
  'flex-basis': '100%',
  ...props.css,
  [mq(breakpoints.medium)]: {
    'flex-basis': 'auto',
    ...props.cssMqMedium,
    order: props.order,
    margin: props.mqMediumMargin || props.margin || 0,
  },
}));

const Container = styled.div((props: any) => ({
  ...props.css,
  [mq(breakpoints.medium)]: {
    ...props.cssMqMedium,
    'max-width': props.maxWidth || 'auto',
    width: props.width || 'auto',
  },
}));

const GoogleAuthenticator = styled.div(() => ({
  border: `${border.width}px ${border.style} ${colors.neutral[50]}`,
  padding: spacing('default'),
}));

export const AccountView = () => (
  <CashierLayout>
    <AccountNav />
    <CashierHeading>Account</CashierHeading>
    <HeadingDescription>
      Manage your profile, password and more.
    </HeadingDescription>
    <SettingsSection>
      <SettingsBlock>
        <Heading size="delta" element="h2">
          General information
        </Heading>
      </SettingsBlock>
      <SettingsBlock>
        <BlockContent>
          <ContentWrapper>
            <DynamicContentItem>
              <Container maxWidth="25rem">
                <Form legend="Resend the Email">
                  <FormItem>
                    <TextInput label="E-mail address" type="email" required />
                  </FormItem>
                </Form>
              </Container>
            </DynamicContentItem>
            <DynamicContentItem order={2} margin={`${spacing('medium')} 0`}>
              <SettingsText>
                We've sent a message to you with a link to activate your
                account.
              </SettingsText>
              <SettingsText>
                If you don't see an email from us within a few minutes, be sure
                to check your spam folder.
              </SettingsText>
            </DynamicContentItem>
            <DynamicContentItem
              order={1}
              mqMediumMargin={`0 0 0 ${spacing('large')}`}
            >
              <Button modifier="highlight">Resend the Email</Button>
            </DynamicContentItem>
          </ContentWrapper>
        </BlockContent>
      </SettingsBlock>
      <SettingsBlock>
        {/* <Details> */}
        <DetailRow>
          {/* <DetailColumn>
              <FormItem>
                <TextInput label="Username" type="text" required />
              </FormItem>
              <FormItem>
                <TextInput label="Phone number" type="tel" />
              </FormItem>
              <FormItem>
                <TextInput label="City" type="text" />
              </FormItem>
              <FormItem>
                <TextInput label="Zip code" type="number" />
              </FormItem>
            </DetailColumn>
            <DetailColumn>
              <FormItem>
                <TextInput label="Date of birth" type="date" required />
              </FormItem>
              <FormItem>
                <TextInput label="Address" type="text" />
              </FormItem>
              <FormItem>
                <TextInput label="Country" type="text" />
              </FormItem>
            </DetailColumn> */}
        </DetailRow>
        <DetailRow>
          <Button modifier="primary">Save Changes</Button>
        </DetailRow>
        {/* </Details> */}
      </SettingsBlock>
    </SettingsSection>
    <SettingsSection>
      <SettingsBlock>
        <Heading size="delta" element="h2">
          Change password
        </Heading>
      </SettingsBlock>
      <SettingsBlock>
        {/*<BlockContent>*/}
        <Container maxWidth="25rem">
          <Form legend="Enter you current password">
            <FormItem>
              <TextInput label="Enter you current password" type="password" />
            </FormItem>
            <FormItem>
              <TextInput label="Enter new password" type="password" />
            </FormItem>
            <FormItem>
              <TextInput label="Repeat password" type="password" />
            </FormItem>
            <FormItem>
              <Container width="10rem">
                <Button fullWidth modifier="secondary">
                  Save Changes
                </Button>
              </Container>
            </FormItem>
          </Form>
        </Container>
        {/*</BlockContent>*/}
      </SettingsBlock>
    </SettingsSection>
    <SettingsSection>
      <SettingsBlock>
        <Heading size="delta" element="h2">
          Google Authenticator
        </Heading>
      </SettingsBlock>
      <SettingsBlock>
        <BlockContent>
          <ContentWrapper cssMqMedium={{ 'align-items': 'flex-start' }}>
            <DynamicContentItem>
              <GoogleAuthenticator>
                What is google authenticator
              </GoogleAuthenticator>
            </DynamicContentItem>
            <DynamicContentItem>
              <Container
                maxWidth="25rem"
                css={{ margin: `${spacing('medium')} 0` }}
                cssMqMedium={{ margin: `0 ${spacing('large')} 0` }}
              >
                <SettingsText>Key value: PBVWSRCIOZJG4SLUPJYVIVCC</SettingsText>
                <Form legend="Type code">
                  <FormItem>
                    <TextInput label="Type code" type="text" required />
                  </FormItem>
                  <FormItem>
                    <Container width="10rem">
                      <Button fullWidth modifier="secondary">
                        Submit Code
                      </Button>
                    </Container>
                  </FormItem>
                </Form>
              </Container>
            </DynamicContentItem>
          </ContentWrapper>
        </BlockContent>
      </SettingsBlock>
    </SettingsSection>
    <SettingsSection>
      <SettingsBlock>
        <Heading size="delta" element="h2">
          Verify account
        </Heading>
      </SettingsBlock>
      <SettingsBlock>
        <SettingsText>
          We ask you to upload your documents for our review to provide better
          security. Please send us a photo of either of your ID card, driver’s
          license or passport. For proof of address, please send us a photo of a
          utility bill dated within the last three months and clearly showing
          your name.
        </SettingsText>
      </SettingsBlock>
      <SettingsBlock>
        <BlockContent>
          <Form fullWidth legend="KYC file upload">
            <Container
              css={{
                display: 'flex',
                'flex-direction': 'column',
              }}
              cssMqMedium={{ 'flex-direction': 'row' }}
            >
              <Container cssMqMedium={{ 'flex-basis': '20rem' }}>
                <FormItem>
                  <FileInput placeholder="ID, driver's license or passport" />
                </FormItem>
              </Container>
              <Container
                css={{ marginTop: '1rem' }}
                cssMqMedium={{
                  'flex-basis': '20rem',
                  margin: `0 ${spacing('large')} 0 0`,
                }}
              >
                <FormItem>
                  <FileInput placeholder="Photo of a utility bill" />
                </FormItem>
              </Container>
            </Container>
          </Form>
          <Container
            css={{ margin: `${spacing('large')} 0` }}
            cssMqMedium={{ margin: `${spacing('medium')} 0` }}
          >
            <SettingsText>
              Supported file types: .jpg, .png and .gif. Both documents are
              required.
            </SettingsText>
          </Container>
        </BlockContent>
      </SettingsBlock>
    </SettingsSection>
    <Container
      width="12rem"
      css={{ margin: `${spacing('medium')}` }}
      cssMqMedium={{ margin: `${spacing('medium')} 0` }}
    >
      <Button fullWidth modifier="secondary" outline>
        Delete Account
      </Button>
    </Container>
  </CashierLayout>
);
