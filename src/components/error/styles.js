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
    fontSize: scale(60),
    marginHorizontal: scale(15),
    color: colors.COLORS.BLACK_COLOR,
    bottom: scale(25)
  },
  button: {
    borderRadius: scale(1),
    width: scale(120),
    height: scale(50),
    top: verticalScale(60),
    justifyContent:'center',
    fontSize: scale(25),
    borderWidth: scale(0.8),
    color: colors.COLORS.BLACK_COLOR
  },
  btnText: {
    alignSelf:'center',
    fontSize: scale(20),
    color: colors.COLORS.BLACK_COLOR
  }
});