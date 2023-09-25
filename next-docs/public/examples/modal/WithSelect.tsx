import { useState } from 'react';
import {
  Modal,
  Button,
  Dropdown,
  MenuItem,
  IconButton,
} from '@heathmont/moon-core-tw';
import { ControlsCloseSmall } from '@heathmont/moon-icons-tw';

type Options = {
  value: string;
  label: string;
};

const sizes = [
  { value: 'Small', label: 'Small' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Large', label: 'Large' },
];

const colors = [
  { value: 'Red', label: 'Red' },
  { value: 'Blue', label: 'Blue' },
  { value: 'Green', label: 'Green' },
];

const materials = [
  { value: 'Leather', label: 'Leather' },
  { value: 'Silk', label: 'Silk' },
  { value: 'Cotton', label: 'Cotton' },
  { value: 'Wool', label: 'Wool' },
];

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<Options | null>(null);
  const [color, setColor] = useState<Options | null>(null);
  const [material, setMaterial] = useState<Options | null>(null);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <Button onClick={openModal}>Open dialog</Button>
      <Modal open={isOpen} onClose={closeModal}>
        <Modal.Backdrop />
        <Modal.Panel>
          <div className="border-b-[0.063rem] border-beerus pt-5 pb-4 px-6 relative">
            <h3 className="text-moon-18 text-bulma font-medium">Modal title</h3>
            <IconButton
              variant="ghost"
              size="sm"
              className="absolute top-4 end-5"
              onClick={closeModal}
            >
              <ControlsCloseSmall className="text-moon-24" />
            </IconButton>
          </div>
          <div className="px-6 py-4 flex flex-col gap-3">
            <Dropdown value={size} onChange={setSize} size="xl">
              {({ open }) => (
                <>
                  <Dropdown.Select
                    open={open}
                    label="xLarge"
                    placeholder="Choose size..."
                    data-test="data-test"
                  >
                    {size?.label}
                  </Dropdown.Select>

                  <Dropdown.Options>
                    {sizes.map((size, index) => (
                      <Dropdown.Option value={size} key={index}>
                        {({ selected, active }) => (
                          <MenuItem isActive={active} isSelected={selected}>
                            {size.label}
                          </MenuItem>
                        )}
                      </Dropdown.Option>
                    ))}
                  </Dropdown.Options>
                </>
              )}
            </Dropdown>
            <Dropdown value={color} onChange={setColor} size="xl">
              {({ open }) => (
                <>
                  <Dropdown.Select
                    open={open}
                    label="xLarge"
                    placeholder="Choose color..."
                    data-test="data-test"
                  >
                    {color?.value}
                  </Dropdown.Select>

                  <Dropdown.Options>
                    {colors.map((color, index) => (
                      <Dropdown.Option value={color} key={index}>
                        {({ selected, active }) => (
                          <MenuItem isActive={active} isSelected={selected}>
                            {color.value}
                          </MenuItem>
                        )}
                      </Dropdown.Option>
                    ))}
                  </Dropdown.Options>
                </>
              )}
            </Dropdown>
            <Dropdown value={material} onChange={setMaterial} size="xl">
              {({ open }) => (
                <>
                  <Dropdown.Select
                    open={open}
                    label="xLarge"
                    placeholder="Choose material..."
                    data-test="data-test"
                  >
                    {material?.value}
                  </Dropdown.Select>

                  <Dropdown.Options>
                    {materials.map((material, index) => (
                      <Dropdown.Option value={material} key={index}>
                        {({ selected, active }) => (
                          <MenuItem isActive={active} isSelected={selected}>
                            {material.value}
                          </MenuItem>
                        )}
                      </Dropdown.Option>
                    ))}
                  </Dropdown.Options>
                </>
              )}
            </Dropdown>
          </div>
          <div className="flex gap-2 p-4 justify-end pt-2">
            <Button variant="outline" onClick={closeModal}>
              Cancel
            </Button>
            <Button onClick={closeModal}>Create</Button>
          </div>
        </Modal.Panel>
      </Modal>
    </>
  );
};

export default Example;
