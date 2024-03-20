import { ReactComponent as ArrowRight } from '../icons/arrow-right.svg';
import { ReactComponent as Plus } from '../icons/plus.svg';
import { ReactComponent as AB } from '../icons/a-b-test.svg';
import { ReactComponent as LightBulb } from '../icons/gloeilamp.svg';
import { ReactComponent as Exit } from '../icons/Exit-v2.svg';

const icons = {
    ArrowRight: ArrowRight,
    Plus: Plus,
    AB: AB,
    LightBulb: LightBulb,
    Exit: Exit,
}

export const retrieveIcon = (icon) => {
    return icons[icon];
  };
  