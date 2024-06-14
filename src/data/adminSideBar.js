import DownloadIcon from '../icons/download.svg';
import LogoutIcon from '../icons/logout.svg';
import HomeIcon from '../icons/home.svg';

const sidebarData = [
    {
        items: [
            { icon: HomeIcon, title: 'Home', link: '/admin' },
        ]
    },
    {
        title: 'Users',
        items: [
            { icon: DownloadIcon, title: 'Users', link: '/users' },
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