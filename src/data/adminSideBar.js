import LogoutIcon from '../icons/logout.svg';
import HomeIcon from '../icons/home.svg';
import UsersIcon from '../icons/buyer-persona.svg';

const sidebarData = [
    {
        items: [
            { icon: HomeIcon, title: 'Admin panel', link: '/admin' },
        ]
    },
    {
        title: 'Users',
        items: [
            { icon: UsersIcon, title: 'Users', link: '/users' },
        ],
    },
    {
        items: [
            { icon: LogoutIcon, title: 'Logout', link: '/', onClick: 'logout' },
        ],
        isLast: true
    },
];

export default sidebarData;