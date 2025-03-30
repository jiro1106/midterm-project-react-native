import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor:"#6b86df",
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    width: '50%',
    marginTop: 10,
    gap:50,
    marginBottom:80,
  },
  toggleContainer: {
    padding:10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5, 
    borderRadius:20,
  },
  switchContainer: {
    backgroundColor:'#433199',
    borderRadius:20,
  },
  toggleIcon: {
    marginRight:5,
  },
  appName:{
    marginHorizontal:15,
    fontSize:40,
    fontWeight:'bold',
    width:'90%',
    textAlign:'left',
    color:'white',
  },
  welcomeImg: {
    resizeMode: 'contain', 
    width: '90%',
    height: '50%',
    marginHorizontal:10,
  },
  title: {
    textAlign:'left',
    marginHorizontal:20,
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  highlightedText:{
    color: '#f6f7f9',
  },
  startBtn: {
    backgroundColor:'black',
    paddingVertical: 22,
    paddingHorizontal: 24,
    borderRadius: 20,
    width:'91%',
    marginTop:15,
    marginBottom:20,
  },
  startBtnText: {
    color: '#FFF',
    fontWeight:'bold',
    fontSize: 19,
    textAlign:'center',
  },

});