import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
container: {
    paddingTop: 20,
},
contentContainer: {
    padding: 16,
    paddingBottom: 8,
},
userItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.dropdown_item_color,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  companyName: {
    fontSize: 16,
  },
  address: {
    fontSize: 14,
    color: colors.gray_500,
  },
});

export default styles;