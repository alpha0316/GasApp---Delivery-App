import React, { useEffect, useState }  from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';


const data = [
  { id: '1', No: '1', Name: 'Riely Ferguson', Hostel: 'Hall 7', Size: 'Small', Price: 'GHC 35' },
  { id: '2', No: '2', Name: 'lauren Jackson', Hostel: 'Evandy - Newsite', Size: 'Medium', Price: 'GHC 70'},
  { id: '3', No: '3', Name: 'Princess Rashida', Hostel: 'Victory Towers', Size: 'Medium', Price: 'GHC 70' },
  // Add more data as needed
];



const Table = ({onSelectCountChange}) => {
  
  const [selectBookingID, setSelectBookingID] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)
 
  useEffect(() =>{

      const totalPrice = data.reduce((sum, item) => {
      const price = parseFloat(item.Price.replace('GHC', ''))
      return sum + price
    },0)

    setTotalPrice(totalPrice)

    onSelectCountChange(selectBookingID.length, data.length, totalPrice)
  },[selectBookingID])

  const handleSelection = (id) => {
    let updatedSelection;
    if (selectBookingID.includes(id)) {
      updatedSelection = selectBookingID.filter((selectId)=> selectId !== id )
    }
    else {
      updatedSelection = ([...selectBookingID, id])
    }

    setSelectBookingID(updatedSelection)
  }

  const renderHeader = () => {

    return(
      <View style={styles.headerContainer}>
      <Text style={styles.headerNo}>#</Text>
      <Text style={styles.headerName}>Name</Text>
      <Text style={styles.headerHostel}>Hostel</Text>
      <Text style={styles.headerSize}>Size</Text>
      <Text style={styles.headerText}>Price</Text>
    </View>
    )
 
  };

  const renderItem = ({ item }) => {
    
    const isSelect = selectBookingID.includes(item.id)

    return(
      <TouchableOpacity onPress={() => handleSelection(item.id)}>
          <View style={[styles.rowContainer, isSelect && styles.selected]}>
          <Text style={styles.rowNo}>{item.No}</Text>
          <Text style={styles.rowName}>{item.Name}</Text>
          <Text style={styles.rowHostel}>{item.Hostel}</Text>
          <Text style={styles.rowSize}>{item.Size}</Text>
          <Text style={styles.rowText}>{item.Price}</Text>
        </View>
      </TouchableOpacity>
      
  )};

  return (
    <ScrollView horizontal>
      <View style={styles.tableContainer}>
        {renderHeader()}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    overflow: 'hidden',
    width: '151%',
    alignSelf : 'stretch'
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 10,

  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
    padding : 9,
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'space-evenly'
  },
  selected: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'space-evenly',
    backgroundColor : 'rgba(244, 244, 244, 1)'
  },
  rowText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
  },
  headerNo: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
    paddingVertical : 9,
    
  },
  headerName: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 14,
    paddingVertical : 9,
    paddingHorizontal : 6
  },
  rowName: {
    flex: 1,
    textAlign: 'left',
    fontSize: 12,
    paddingLeft : 8,
    maxWidth : 70,
  
  },
  headerHostel: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 14,
    paddingVertical : 9,
    paddingHorizontal : 6
  },
  headerSize: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 14,
    paddingVertical : 9,
    paddingHorizontal : 6
  },
  rowNo: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    maxWidth : 33,
  },
  rowSize: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    paddingLeft : 4,
    
  },
  rowHostel: {
    flex: 1,
    textAlign: 'left',
    fontSize: 12,
    paddingLeft : 28,
    maxWidth : 90,
  },
 
 
});

export default Table;
