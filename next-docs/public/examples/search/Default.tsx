import Search from './components/Search';
import { filterItems, getItemIndex } from "./utils/utils";
import { useState } from "react";

const Example = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [search, setSearch] = useState("");

    const filteredItems = filterItems(
        [
            {
                heading: "Home",
                id: "home",
                items: [
                    {
                        id: "home",
                        children: "Home",
                        href: "#",
                    },
                    {
                        id: "settings",
                        children: "Settings",
                        href: "#",
                    },
                    {
                        id: "projects",
                        children: "Projects",
                        closeOnSelect: false,
                        onClick: () => {
                            alert("projects");
                        },
                    },
                ],
            },
            {
                heading: "Other",
                id: "advanced",
                items: [
                    {
                        id: "developer-settings",
                        children: "Developer settings",
                        href: "#",
                    },
                    {
                        id: "privacy-policy",
                        children: "Privacy policy",
                        href: "#",
                    },
                    {
                        id: "log-out",
                        children: "Log out",
                        onClick: () => {
                            alert("Logging out...");
                        },
                    },
                ],
            },
        ],
        search
    );



    return (
        <>
            <button onClick={() => setOpen(true)}>
                Search
            </button>
            <Search
                onChangeSearch={setSearch}
                onChangeOpen={setOpen}
                search={search}
                isOpen={open}
            >
                {filteredItems.length ? (
                    filteredItems.map((list) => (
                        <Search.List key={list.id} heading={list.heading}>
                            {list.items.map(({ id, ...rest }) => (
                                <Search.ListItem
                                    key={id}
                                    index={getItemIndex(filteredItems, id)}
                                    {...rest}
                                />
                            ))}
                        </Search.List>
                    ))
                ) : (
                    <Search.FreeSearchAction />
                )}

            </Search>
        </>
    );
};

export default Example;