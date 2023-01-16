import CommandPalette from './components/CommandPalette';
import { filterItems, getItemIndex } from "./utils/utils";
import { useState } from "react";

const Example = () => {
    const [page, setPage] = useState<"root" | "projects">("root");
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
                            setPage("projects");
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
            <CommandPalette
                onChangeSearch={setSearch}
                onChangeOpen={setOpen}
                search={search}
                isOpen={open}
                page={page}
            >
                <CommandPalette.Page id="root">
                    {filteredItems.length ? (
                        filteredItems.map((list) => (
                            <CommandPalette.List key={list.id} heading={list.heading}>
                                {list.items.map(({ id, ...rest }) => (
                                    <CommandPalette.ListItem
                                        // className="bg-gohan"
                                        key={id}
                                        index={getItemIndex(filteredItems, id)}
                                        {...rest}
                                    />
                                ))}
                            </CommandPalette.List>
                        ))
                    ) : (
                        <CommandPalette.FreeSearchAction />
                    )}
                </CommandPalette.Page>

                <CommandPalette.Page id="projects">
                    {/* Projects page */}
                    Projects
                </CommandPalette.Page>
            </CommandPalette>
        </>
    );
};

export default Example;