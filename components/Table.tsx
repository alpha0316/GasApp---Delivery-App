import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';

const data = [
  { id: '1', No: '1', Name: 'Nana Ama Lawrence', Hostel: 'Adombi Hostel', Size: 'Small', Price: 'GHC 70' },
  { id: '2', No: '2', Name: 'Nana Ama Rashida', Hostel: 'Doctor', Size: 'Medium', Price: 'GHC 70'},
  { id: '3', No: '3', Name: 'Nana Ama', Hostel: 'Doctor', Size: 'Medium', Price: 'GHC 70' },
  // Add more data as needed
];

const Table = () => {
  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerNo}>#</Text>
      <Text style={styles.headerName}>Name</Text>
      <Text style={styles.headerHostel}>Hostel</Text>
      <Text style={styles.headerSize}>Size</Text>
      <Text style={styles.headerText}>Price</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.rowContainer}>
      <Text style={styles.rowNo}>{item.No}</Text>
      <Text style={styles.rowName}>{item.Name}</Text>
      <Text style={styles.rowHostel}>{item.Hostel}</Text>
      <Text style={styles.rowSize}>{item.Size}</Text>
      <Text style={styles.rowText}>{item.Price}</Text>
    </View>
  );

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
