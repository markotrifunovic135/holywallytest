import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: {
    flex: 1,
    paddingTop: 20,
    // backgroundColor: 'white',
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
bottomSheetShadow: {
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  dropdownContainer: {
    width: '100%',
    borderRadius: 12,
  },
  shadowProp: {
    backgroundColor: 'white',
    shadowColor: '#000',
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
    backgroundColor: '#0496FF',
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
    backgroundColor: 'white',
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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
    color: '#7B7B7B',
  },
  allowButtonContainer: {
    backgroundColor: '#0496FF',
    width: '100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
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
    color: '#7B7B7B',
  },
  marginTop_12: {
    marginTop: 12,
  },
  marginTop_24: {
    marginTop: 24,
  },
  dropdownText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default styles;