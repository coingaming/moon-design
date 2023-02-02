import { SetStateAction, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { ControlsClose, GenericSearch } from '@heathmont/moon-icons-tw'
import { mergeClassnames } from '@heathmont/moon-core-tw'
import { MenuItem } from '@heathmont/moon-core-tw'

const people = [
    'Durward Reynolds',
    'Kenton Towne',
    'Therese Wunsch',
    'Benedict Kessler',
    'Katelyn Rohan',
]

// TODO any type
const SearchRoot = ({ value, onChange, ...rest }: any) => {
    return <div className='relative max-w-xl flex flex-col'>
        <Combobox value={value} onChange={onChange} {...rest} />
    </div>
}

// TODO
const Input = ({ className, children, ...rest }: any) =>
    <Combobox.Input
        className={mergeClassnames("py-4 px-0 border-none w-full focus:outline-none focus:border-none focus:ring-0 bg-transparent placeholder-bulma text-bulma", className)}
        {...rest}
    >
        {children}
    </Combobox.Input>

const Clear: React.FC<{ onClick: (e: any) => void, className?: string }> = ({ children, className, ...rest }) => <button className={mergeClassnames('pointer-events-none touch-none text-trunks', className)}{...rest} >{children}</button>

const Icon = ({ className, ...rest }: { className?: string }) => <GenericSearch className={mergeClassnames("w-8 h-8 text-bulma", className)} {...rest} />

const MobileClose = ({ className, isOpen, ...rest }: { className?: string, isOpen: boolean }) => isOpen ? <ControlsClose className={mergeClassnames("sm:hidden border-l border-trunks ms-4 ps-4 w-12 h-8 text-bulma", className)} {...rest} /> : null;

const Trigger = ({ children, isOpen, className, ...rest }: any) =>
    isOpen ?
        <div
            className={mergeClassnames(
                "bg-gohan shadow-moon-md flex items-center px-3 gap-2", // space-x-1.5
                isOpen ? 'rounded-t-moon-s-md' : 'rounded-moon-s-md',
                // mobile full screen
                isOpen ? 'z-10 fixed top-0 left-0 w-screen' : '',
                // desktop
                'sm:static sm:w-auto',
                className
            )}
            {...rest}>{children}</div> : <div
                className={mergeClassnames(
                    "bg-gohan shadow-moon-md flex items-center px-3 gap-2", // space-x-1.5
                    isOpen ? 'rounded-t-moon-s-md' : 'rounded-moon-s-md',
                    // mobile full screen
                    isOpen ? 'z-10 fixed top-0 left-0 w-screen' : '',
                    // desktop
                    'sm:static sm:w-auto',
                    className
                )}
                {...rest}
            >
            {children}
        </div>

const Options = ({ isOpen, children, className, ...rest }: any) =>
    <div className={
        mergeClassnames(
            "z-20",
            // mobile full screen
            isOpen && "fixed top-14 w-screen left-0",
            // desktop
            "sm:static sm:w-auto",
            className
        )}>
        <Transition
            show={isOpen}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
        >
            <Combobox.Options
                static
                className={
                    mergeClassnames(
                        "px-4 py-3 overflow-auto bg-gohan shadow-moon-md rounded-b-moon-s-md",
                        // mobile full screen
                        isOpen && "fixed w-screen h-screen -mt-px",
                        // desktop
                        "sm:absolute sm:w-full sm:h-auto",
                        className
                    )}
                {...rest}
            >
                {children}
            </Combobox.Options>
        </Transition>
    </div>

const Search = Object.assign(
    SearchRoot,
    {
        Input,
        Icon,
        Clear,
        MobileClose,
        Trigger,
        Options,
        Option: Combobox.Option,
    }
);

const Example = () => {
    const [selectedPerson, setSelectedPerson] = useState<string | null>(people[0])
    const [query, setQuery] = useState('')
    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) => {
                return person.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <Search nullable value={selectedPerson} onChange={setSelectedPerson}>
            {({ open }: { open: boolean }) => (
                <>
                    <Search.Trigger isOpen={open}>
                        <Search.Icon />

                        <Search.Input
                            onChange={(event: { target: { value: SetStateAction<string> } }) =>
                                setQuery(event.target.value)
                            }
                            displayValue={selectedPerson || query}
                        />
                        {/* {query && <Search.Clear onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log('Clear')
                            setQuery('');
                            // setSelectedPerson(null);
                        }}>
                            Clear
                        </Search.Clear>} */}

                        <Search.MobileClose isOpen={open} />
                    </Search.Trigger>

                    <Search.Options isOpen={open}>
                        {filteredPeople.map((person) => (
                            <Combobox.Option key={person} value={person}>
                                <MenuItem>
                                    <MenuItem.Title>{person}</MenuItem.Title>
                                    <span className="text-moon-12 text-piccolo">Meta</span>
                                </MenuItem>
                            </Combobox.Option>
                        ))}
                    </Search.Options>
                </>)}
        </Search>
    )
}

export default Example;
