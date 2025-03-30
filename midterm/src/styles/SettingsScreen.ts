import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: 50, 
    paddingBottom: 20, 
    backgroundColor: '#6b86df', 
    alignItems: 'flex-start', 
    paddingHorizontal: 15, 
  },
  textWithIcon: {
    marginLeft:20,
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'center',
  },
  title:{
    marginHorizontal:15,
    marginTop:10,
    fontSize:30,
    fontWeight:'bold',
    width:'90%',
    textAlign:'left',
    color:'white',
  },
  settingsContainer: {
    marginTop:10,
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  settingRow: {
    flexDirection: 'row',
    width:'90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  settingText: {
    fontSize: 18,
    fontWeight: '500',
  },
});
