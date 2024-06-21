import DownloadIcon from '../icons/download.svg';
import LightbulbIcon from '../icons/lightbulb.svg';
import SearchIcon from '../icons/search-black.svg';
import ChartIcon from '../icons/chart-bar.svg';
import CogIcon from '../icons/cog.svg';
import LogoutIcon from '../icons/logout.svg';
import HomeIcon from '../icons/home.svg';
import SyncIcon from '../icons/sync.svg';
import WorkflowIcon from '../icons/direction.svg';

const sidebarData = [
    {
        items: [
            { icon: HomeIcon, title: 'Home', link: '/overview' },
        ]
    },
    {
        title: 'Analytics',
        items: [
            { icon: DownloadIcon, title: 'Enrich audience', link: '/enrich-audience' },
            { icon: LightbulbIcon, title: 'Enrich company', link: '/enrich-company' },
            { icon: SyncIcon, title: 'Sync company', link: '/sync-company' },
            { icon: SearchIcon, title: 'Search company', link: '/search-company' },
            { icon: WorkflowIcon, title: 'Workflow action', link: '/workflow' },
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
            { icon: CogIcon, title: 'Settings', link: '/profile' },
            { icon: LogoutIcon, title: 'Logout', link: '/', onClick: 'logout' },
        ],
        isLast: true
    },
];

export default sidebarData;