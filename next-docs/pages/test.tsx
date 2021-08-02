import { Search } from '@heathmont/moon-components';

const TestSearch = () => {
  return (
    <Search
      placeholder="Search"
      onChange={(e) => {
        console.log(e.target.value);
      }}
      onSubmit={(e) => {
        console.log('Submitted');
      }}
      results={[
        {
          title: <span>Games</span>,
          items: [
            <span
              onClick={() => {
                console.log('Click');
              }}
            >
              First Game
            </span>,
            <span>Second Game</span>,
            <span>Third Game</span>,
          ],
        },
        {
          title: <span>Providers</span>,
          items: [
            <span>Provider One</span>,
            <span>Provider Two</span>,
            <span>Provider Three</span>,
          ],
        },
      ]}
    />
  );
};

export default TestSearch;
