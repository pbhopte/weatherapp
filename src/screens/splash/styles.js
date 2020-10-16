import { StyleSheet } from 'react-native';
import scale, {verticalScale} from '../../utils/scale';
import colors from '../../utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    alignSelf:'center',
    fontSize: scale(25),
    fontWeight: '600',
    color: colors.COLORS.BLACK_COLOR
  }
});