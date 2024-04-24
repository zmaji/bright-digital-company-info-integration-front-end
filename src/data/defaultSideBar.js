import DownloadIcon from '../icons/download.svg';
import LightbulbIcon from '../icons/lightbulb.svg';
import SearchIcon from '../icons/search-black.svg';
import ChartIcon from '../icons/chart-bar.svg';
import SupportIcon from '../icons/support.svg';
import CogIcon from '../icons/cog.svg';
import LogoutIcon from '../icons/logout.svg';
import HomeIcon from '../icons/home.svg';

const sidebarData = [
    {
        items: [
            { icon: HomeIcon, title: 'Home', link: '/overview' },
        ]
    },
    {
        title: 'Analytics',
        items: [
            { icon: DownloadIcon, title: 'Install script', link: '/install-script' },
            { icon: LightbulbIcon, title: 'Enrich data', link: '/enrich-data' },
            { icon: SearchIcon, title: 'Search company', link: '/search-company' }
        ],
    },
    {
        title: 'Set-up',
        items: [
            { icon: ChartIcon, title: 'Manage properties', link: '/properties' },
        ]
    },
    {
        items: [
            // { icon: SupportIcon, title: 'Support', link: '' },
            { icon: CogIcon, title: 'Settings', link: '/profile' },
            { icon: LogoutIcon, title: 'Logout', link: '/', onClick: 'logout' },
        ],
        isLast: true
    },
];

export default sidebarData;