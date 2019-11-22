import * as React from 'react';
import styled from 'styled-components';
import { useTheme } from '@heathmont/sportsbet-themes';
import { rem } from '@heathmont/sportsbet-utils';

const Table = styled.table(
  ({ theme: { border, color, fontWeight, space } }) => ({
    width: '100%',
    tableLayout: 'fixed',
    maxWidth: '40rem',
    textAlign: 'left',
    td: {
      wordBreak: 'break-word',
      padding: `${rem(space.xsmall)} 0`,
      verticalAlign: 'top',
    },
    // Create header spacing by adding padding to bottom of table header and top
    // of the first row.
    '> thead': {
      borderBottom: border,
      borderColor: color.bulma[100],
      th: {
        paddingBottom: rem(space.small),
      },
    },
    'tr:first-child td': {
      paddingTop: rem(space.small),
    },
    // For nested Tables, prevent double padding and remove default th styles.
    '& &': {
      '> tr:first-child > td, >  tr:last-child > td': {
        padding: 0,
      },
      th: {
        fontWeight: fontWeight.normal,
      },
    },
  })
);

type ThemePropsTableProps = {
  options: {
    property: string;
    key: string;
    value: string;
  }[];
};

const ThemePropsTable: React.FC<ThemePropsTableProps> = ({ options }) => (
  <Table>
    <thead>
      <tr>
        <th>Property</th>
        <th>Key</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      {options.map(option => (
        <tr>
          <td>{`${option.property}`}</td>
          {/* eslint-disable-next-line no-nested-ternary */}
          {typeof option.value === 'object' && option.key !== 'fontFace' ? (
            <td colSpan={2}>
              <Table>
                {Object.keys(option.value).map(variant => (
                  <tr>
                    <th>{`${variant}`}</th>
                    {/**
                      * @TODO Create Index Signature for Themes
                      // @ts-ignore */}
                    <td>{`${option.value[variant]}`}</td>
                  </tr>
                ))}
              </Table>
            </td>
          ) : option.key === 'fontFace' ? (
            <React.Fragment>
              <td>{`${option.key}`}</td>
              <td>Returns CSS @font-face declaration.</td>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <td>{`${option.key}`}</td>
              <td>{`${option.value}`}</td>
            </React.Fragment>
          )}
        </tr>
      ))}
    </tbody>
  </Table>
);

export const ThemeTable: React.FC<{ property: string | [] }> = ({
  property,
}) => {
  const theme = useTheme();

  if (!theme) {
    return <p>Theme not configured.</p>;
  }

  if (Array.isArray(property)) {
    return (
      <ThemePropsTable
        options={property.map(option => ({
          property: option,
          key: option,
          value: theme[option],
        }))}
      />
    );
  }

  // @TODO Create Index Signature for Themes
  // @ts-ignore
  return theme[property] && typeof theme[property] === 'object' ? (
    <ThemePropsTable
      // @TODO Create Index Signature for Themes
      // @ts-ignore
      options={Object.keys(theme[property]).map(option => ({
        property: option,
        key: `${property}.${option}`,
        // @TODO Create Index Signature for Themes
        // @ts-ignore
        value: theme[property][option],
      }))}
    />
  ) : (
    <ThemePropsTable
      options={[
        {
          property,
          key: property,
          // @TODO Create Index Signature for Themes
          // @ts-ignore
          value: theme[property],
        },
      ]}
    />
  );
};
