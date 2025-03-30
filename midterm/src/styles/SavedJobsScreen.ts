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
    justifyContent: 'center',
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 14,
    color: '#777',
  },
  salary: {
    fontSize: 14,
    color: '#4CAF50',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap:5,
    marginTop: 10,
  },
  applyButton: {
    backgroundColor: 'green',
    width:'40%',
    padding: 12,
    borderRadius: 5,
  },
  removeButton: {
    backgroundColor: '#FF5252',
    width:'40%',
    padding: 12,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '800',
    textAlign:'center',
  },
  noJobsText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
    color: '#555',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 40,
    borderRadius: 8,
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#777',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#FF5252',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  saveButtonDisabled: {
    backgroundColor: '#B0BEC5',
  },
  applyButtonDisabled: {
    backgroundColor: 'rgba(22, 75, 24, 0.6)', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
