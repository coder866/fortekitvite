export default [
    {
        title: "Dashboard",
        route: "dashboard",
        icon: "GridIcon",
    },
    {
        header: "Pages",
        icon: "FileIcon",
        children: [
            {
                title: "Home",
                route: "home",
                icon: "HomeIcon",
            },
            {
                title: "Second Page",
                route: "second-page",
                icon: "FileIcon",
            },
        ],
    },
];
