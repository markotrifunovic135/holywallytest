import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: {
    flex: 1,
    paddingTop: 20,
    // backgroundColor: 'white',
},
contentContainer: {
    flex: 1,
    padding: 16,
    paddingBottom: 8,
},
userItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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
    color: 'gray',
  },
});

export default styles;