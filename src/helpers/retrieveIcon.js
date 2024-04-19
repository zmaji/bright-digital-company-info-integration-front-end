import { ReactComponent as ArrowRight } from '../icons/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../icons/arrow-left.svg';
import { ReactComponent as ArrowDown } from '../icons/arrow-down.svg';
import { ReactComponent as Plus } from '../icons/plus.svg';
import { ReactComponent as AB } from '../icons/a-b-test.svg';
import { ReactComponent as LightBulb } from '../icons/gloeilamp.svg';
import { ReactComponent as Exit } from '../icons/Exit-v2.svg';
import { ReactComponent as Download } from '../icons/download.svg';
import { ReactComponent as DownloadGradient } from '../icons/download-gradient.svg';
import { ReactComponent as LightBulbGradient } from '../icons/lightbulb-gradient.svg';
import { ReactComponent as SearchGradient } from '../icons/search-gradient.svg';
import { ReactComponent as Search } from '../icons/search.svg';
import { ReactComponent as SearchWhite } from '../icons/search-white.svg';
import { ReactComponent as SearchBlack } from '../icons/search-black.svg';

const icons = {
    ArrowRight: ArrowRight,
    ArrowLeft: ArrowLeft,
    ArrowDown: ArrowDown,
    Plus: Plus,
    AB: AB,
    LightBulb: LightBulb,
    Exit: Exit,
    DownloadGradient: DownloadGradient,
    LightBulbGradient: LightBulbGradient,
    SearchGradient: SearchGradient,
    Download: Download,
    Search: Search,
    SearchWhite: SearchWhite,
    SearchBlack: SearchBlack,
}

export const retrieveIcon = (icon) => {
    return icons[icon];
  };
  