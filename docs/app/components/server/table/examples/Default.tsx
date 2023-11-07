import Table from '@heathmont/moon-base-tw/lib/table/Table';

export const Default = () => (
  <Table>
    <Table.Head>
      <Table.Row>
        <Table.Header>Header 1</Table.Header>
        <Table.Header>Header 2</Table.Header>
        <Table.Header>Header 3</Table.Header>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell 1</Table.Cell>
        <Table.Cell>Cell 2</Table.Cell>
        <Table.Cell>Cell 3</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell 1</Table.Cell>
        <Table.Cell>Cell 2</Table.Cell>
        <Table.Cell>Cell 3</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);
