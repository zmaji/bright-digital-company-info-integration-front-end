import { ReactComponent as ArrowRight } from '../icons/arrow-right.svg';
import { ReactComponent as Plus } from '../icons/plus.svg';

const icons = {
    ArrowRight: ArrowRight,
    Plus: Plus,
}

export const retrieveIcon = (icon) => {
    return icons[icon];
  };
  