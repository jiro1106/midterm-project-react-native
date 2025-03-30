import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  headerContainer: {
    paddingTop: 50, 
    paddingBottom: 20, 
    backgroundColor: '#6b86df', 
    alignItems: 'flex-start', 
    paddingHorizontal: 15, 
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    width: '90%',
    textAlign: 'left',
    color: 'white',
    marginBottom: 10, 
  },
  searchContainer: {
    marginTop:5,
    marginBottom:5,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%', 
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
  },

  searchBar: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingLeft: 8,
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
  jobContainer:{
    flex:1,
    alignItems:'center',
  },
  jobCard: {
    marginTop:20,
    flexDirection: 'row',
    width:'85%',
    backgroundColor: '#fff',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,

  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  jobDetails: {
    flex: 1,
    marginLeft:10,
    justifyContent: 'flex-start',
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 16,
    color: '#777',
  },
  salary: {
    fontSize: 14,
    fontWeight:500,
    color: '#4CAF50',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent:'flex-start',
    gap:10,
    marginTop: 10,
  },
  saveButton: {
    borderWidth:1,
    borderColor:"#6b86df",
    width:'40%',
    color:"#6b86df",
    padding: 10,
    borderRadius: 5,
    marginRight: 12,
  },
  applyButton: {
    backgroundColor: 'green',
    width:'40%',
    padding: 12,
    borderRadius: 5,
  },
  saveButtonText: {
    color:"#6b86df",
    fontWeight: '800',
    textAlign:'center',
  },
  applyButtonText: {
    color:"white",
    fontWeight: '800',
    textAlign:'center',
  },
  saveButtonDisabled: {
    backgroundColor: 'rgba(66, 49, 153, 0.59)', 
    borderWidth:0,
  },
  
  applyButtonDisabled: {
    backgroundColor: 'rgba(22, 75, 24, 0.6)', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
