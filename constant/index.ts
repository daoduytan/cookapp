import { Dimensions } from 'react-native';

// color
const COLORS = {
  blue: '#034694',
  yellow: '#DBA111',
  red: '#ED1C24',
  light: '#D1D3D4',
};

// font
const FONTS = {
  FONT_FAMILY_REGULAR: 'Quicksand_400Regular',
  FONT_FAMILY_SEMIBOLD: 'Quicksand_600SemiBold',
};

// size
const SIZES = {
  SPACE: 15,
  BORDER_RADIUS: 5,
  WIDTH_SCREEN: Math.round(Dimensions.get('window').width),
  HEIGHT_SCREEN: Math.round(Dimensions.get('window').height),
};

export { FONTS, SIZES, COLORS };
