import carIcon from '../icons/auto.svg';

const sidebarData = [
    {
        title: 'Analytics',
        items: [
            { icon: carIcon, title: 'Test menu item 1', link: '/' },
            { icon: carIcon, title: 'Test menu item 2', link: '/' },
            { icon: carIcon, title: 'Test menu item 3', link: '/test' }
        ],
    },
    {
        title: 'Set-up',
        items: [
            { icon: carIcon, title: 'Test menu item 4', link: '/' },
            { icon: carIcon, title: 'Test menu item 5', link: '/' }
        ]
    },
    {
        items: [
            { icon: carIcon, title: 'Support', link: '/' },
            { icon: carIcon, title: 'Settings', link: '/' },
            { icon: carIcon, title: 'Logout', link: '/' }
        ],
        isLast: true
    },
];

export default sidebarData;