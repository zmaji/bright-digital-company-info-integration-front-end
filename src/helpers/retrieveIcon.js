import { ReactComponent as ArrowRight } from '../icons/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../icons/arrow-left.svg';
import { ReactComponent as Plus } from '../icons/plus.svg';
import { ReactComponent as AB } from '../icons/a-b-test.svg';
import { ReactComponent as LightBulb } from '../icons/gloeilamp.svg';
import { ReactComponent as Exit } from '../icons/Exit-v2.svg';
import { ReactComponent as DownloadGradient } from '../icons/download-gradient.svg';
import { ReactComponent as LightBulbGradient } from '../icons/lightbulb-gradient.svg';
import { ReactComponent as SearchGradient } from '../icons/search-gradient.svg';

const icons = {
    ArrowRight: ArrowRight,
    ArrowLeft: ArrowLeft,
    Plus: Plus,
    AB: AB,
    LightBulb: LightBulb,
    Exit: Exit,
    DownloadGradient: DownloadGradient,
    LightBulbGradient: LightBulbGradient,
    SearchGradient: SearchGradient,
}

export const retrieveIcon = (icon) => {
    return icons[icon];
  };
  