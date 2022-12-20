
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1f1e25',
    borderRadius: 8,
    marginBottom: 8,

    alignItems: 'center',
    flexDirection: 'row',
  },

  name: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    marginLeft: 16,
  },

  buttonContainer: {
    width: 56,
    height: 56,
    backgroundColor: '#e23c44',
    borderRadius: 8,

    alignItems: 'center',
    justifyContent: 'center',
  },  

  buttonContent: {
    fontSize: 24,
    color: '#fff',
  },


})