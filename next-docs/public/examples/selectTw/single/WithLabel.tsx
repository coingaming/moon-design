import React, { useState } from 'react';
import {
  Select,
  Dropdown,
  MenuItem,
  Button,
  Chip,
  InputBtn,
} from '@heathmont/moon-core-tw';
import { MediaMusic } from '@heathmont/moon-icons-tw';

const options = [
  {
    value: 'Option 1',
    label: 'Option 1',
  },
  {
    value: 'Option 2',
    label: 'Option 2',
  },
  {
    value: 'Option 3',
    label: 'Option 3',
  },
];

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
];

const Example = () => {
  const [selected, setSelected] = useState(people[0]);
  const [selectedPeople, setSelectedPeople] = useState([people[0], people[1]]);
  console.log('selected', selected);

  const onChangeHandler = (d) => {
    console.log('Some Action!!!!!');
    setSelected(d);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
        <Select
          options={options}
          size="sm"
          label="Small"
          placeholder="Choose an option"
        />
        <Select
          options={options}
          label="Medium"
          placeholder="Choose an option"
        />
        <Select
          options={options}
          label="Large"
          size="lg"
          placeholder="Choose an option"
        />
        <Select
          options={options}
          label="xLarge"
          size="xl"
          placeholder="Choose an option"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2 pb-96">
        <Dropdown value={selected} onChange={(d) => onChangeHandler(d)}>
          {({ open, referenceElement }) => (
            <>
              <InputBtn size="xl" open={open}>
                {/* <InputBtn.Label>Small</InputBtn.Label> */}
                <InputBtn.Input elRef={referenceElement}>
                  <InputBtn.FloatingLabel>xLarge</InputBtn.FloatingLabel>
                  {selected ? (
                    <InputBtn.Value>{selected.name}</InputBtn.Value>
                  ) : (
                    <InputBtn.Placeholder>
                      Choose an option
                    </InputBtn.Placeholder>
                  )}
                </InputBtn.Input>
              </InputBtn>
              <Dropdown.Options>
                {people.map((person, index) => (
                  <Dropdown.Option value={person} index={index}>
                    {({ selected, active }) => (
                      <MenuItem isActive={active} isSelected={selected}>
                        <MenuItem.Title>{person.name}</MenuItem.Title>
                        <MenuItem.Radio isSelected={selected} />
                      </MenuItem>
                    )}
                  </Dropdown.Option>
                ))}
              </Dropdown.Options>
            </>
          )}
        </Dropdown>
      </div>
    </>
  );
};

export default Example;

// <List
//   selected={selectedPeople}
//   setSelected={setSelectedPeople}
//   multiple
// >
//   {/* <List.Input /> */}

//   <List.Trigger>
//     {/* <Chip>Options</Chip> */}
//     {/* <Button>Options</Button> */}
//     <div>{selectedPeople.map((person) => person.name).join(', ')}</div>
//   </List.Trigger>
//   <List.Dropdown>
//     {people.map((person) => {
//       console.log('selectedPeople', selectedPeople);
//       console.log(selectedPeople.find((s) => s.name === person.name));
//       return (
//         <MenuItem value={person} role="сheckbox">
//           <MenuItem.Title>{person.name}</MenuItem.Title>
//           <MenuItem.Checkbox
//             isActive={
//               !!selectedPeople.find((s) => s.name === person.name)
//             }
//           />
//         </MenuItem>
//       );
//     })}
//   </List.Dropdown>
// </List>
