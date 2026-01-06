import { actionClasses, colorsClasses } from './Button.styles';
export function getColor(action, color) {
  if (action) return actionClasses[action];
  return color ? colorsClasses[color] : colorsClasses['default'];
}
