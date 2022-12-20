
import { Button, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },

  eventName: {
    color: '#fdfcfe',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },

  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },

  form: {
    width: '100%',
    marginTop: 36,
    marginBottom: 42,

    flexDirection: 'row',
  },

  input: {
    flex: 1,
    height: 56,
    color: '#fff',
    backgroundColor: '#1f1e25',
    marginRight: 12,
    padding: 12,
    borderRadius: 8,
  },

  buttonContainer: {
    width: 56,
    height: 56,
    backgroundColor: '#31cf67',
    borderRadius: 8,

    alignItems: 'center',
    justifyContent: 'center',
  },  

  buttonContent: {
    fontSize: 24,
    color: '#fff',
  },

  emptyList: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  }, 

})