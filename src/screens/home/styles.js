import { StyleSheet, Dimensions } from 'react-native';
import scale, {verticalScale} from '../../utils/scale';
import colors from '../../utils/theme';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.COLORS.WHITE_COLOR,
    marginVertical: scale(2)
  },
  topContent: {
   height: height/2 - scale(20),
   borderWidth: scale(1),
   marginVertical: scale(2),
  },
  top: {
    top: verticalScale(40),
  },
  row: {
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth: scale(1),
    height: scale(70)
  },
  margin: {
    marginHorizontal: scale(20)
  },
  weather: {
    alignSelf:'center',
    fontSize: scale(40),
    color: colors.COLORS.BLACK_COLOR
  },
  bigText: {
    alignSelf:'center',
    fontSize: scale(80),
    fontWeight: '600',
    color: colors.COLORS.BLACK_COLOR
  },
  smallText: {
    alignSelf:'center',
    fontSize: scale(25),
    color: colors.COLORS.BLACK_COLOR
  }
});