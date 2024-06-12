import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Table, Row, TableWrapper } from 'react-native-table-component';
import orders from '../data/orders.json'; // Directly import the JSON file

export default function BusinessOrdersScreen() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        // Load and process JSON data
        const loadJsonData = () => {
            const formattedData = orders.flatMap(order => 
                order.Products.map(product => ({
                    customer: order.Customer,
                    productName: product.name,
                    quantity: product.quantity.toString(),
                    price: product.price.toFixed(2), // Ensure TotalPrice is in string format with 2 decimal places
                    address: order.Address,
                    emailAddress: order.EmailAddress,
                    // Add a property to track whether the row is marked
                    marked: false
                }))
            );
            setTableData(formattedData);
        };

        loadJsonData();
    }, []);

    // Function to handle marking/unmarking a row
    const handleRowToggle = (index) => {
        const newData = [...tableData];
        newData[index].marked = !newData[index].marked;
        setTableData(newData);
    };

    const tableHead = ['Customer', 'Product', 'Quantity', 'Price', 'Address', 'Email Address'];

    return (
        <View style={styles.container}>
            <ScrollView>
                <ScrollView horizontal>
                    <View style={styles.tableContainer}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                            <TableWrapper style={styles.wrapper}>
                            <Row data={tableHead} flexArr={[0.7, 1.1, 0.5, 0.5, 1.3, 1]} style={styles.head} textStyle={styles.text} />
                            
                            {tableData.map((rowData, index) => (
                                <TouchableOpacity key={index} onPress={() => handleRowToggle(index)}>
                                    <Row data={Object.values(rowData)} flexArr={[0.7, 1.1, 0.5, 0.5, 1.3, 1]} style={[styles.row, rowData.marked && styles.markedRow]} textStyle={styles.text} />
                                </TouchableOpacity>
                            ))}
                            </TableWrapper>
                        </Table>
                    </View>
                </ScrollView>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff',
    },
    tableContainer: {
       flex: 1,
    },
    head: {
        height: 40,
        backgroundColor: '#f1f8ff',
        flexDirection: 'row',
        width: 1250,
    },
    wrapper: {
        width: 1500,
    },
    row: {
        height: 35,
    },
    markedRow: {
        textDecorationLine: 'line-through',
    },
    text: {
        marginHorizontal: 13,
    }
});