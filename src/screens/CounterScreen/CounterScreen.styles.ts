import { StyleSheet } from 'react-native';
import colors from '../../colors/colors';

const styles = StyleSheet.create({
container: {
    flex: 1,
    paddingTop: 20,
},
paddingTop_50: {
    paddingTop: 50,
},
contentContainer: {
    flex: 1,
    padding: 16,
},
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 10,
  },
  dropdownContainer: {
    width: '100%',
    borderRadius: 12,
  },
  shadowProp: {
    backgroundColor: colors.background_white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // android shadow
    elevation: 3,
  },
  dropdownHeader: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue_200,
    borderRadius: 12,
    height: 50,
  },
  dropdownList: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    borderRadius: 12,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: colors.background_white,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.dropdown_item_color,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyleHeader: {
    alignSelf: 'center',
    fontSize: 26,
    marginTop: 40,
  },
  textStyleHeaderSmall: {
    alignSelf: 'center',
    fontSize: 18,
    marginTop: 8,
    color: colors.gray_500,
  },
  allowButtonContainer: {
    backgroundColor: colors.blue_200,
    width: '100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  buttonText: {
    fontSize: 16,
    color: colors.background_white,
  },
  skipButtonContainer: {
    width: '100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  skipText: {
    fontSize: 16,
    color: colors.gray_500,
  },
  marginTop_12: {
    marginTop: 12,
  },
  marginTop_24: {
    marginTop: 24,
  },
  dropdownText: {
    fontSize: 16,
    color: colors.background_white,
  },
});

export default styles;