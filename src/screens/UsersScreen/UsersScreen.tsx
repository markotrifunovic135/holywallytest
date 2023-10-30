import { View, Text, FlatList, TouchableOpacity, Platform, Linking } from 'react-native'
import React from 'react'
import styles from './UsersScreen.styles'
import { usersData } from '../../constants'
import { UserObj } from './model'

const UsersScreen = () => {
    const renderUserItem = ({ item }: { item: UserObj }) => {
        const { name, company, address } = item;
        const { suite, street, zipcode, city } = address;
        const latLng = `${address.geo.lat},${address.geo.lng}`;
        const label = 'Users location';
        const scheme = Platform.select({ ios: 'maps://0,0?q=', android: 'geo:0,0?q=' });
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });
        return (
            <TouchableOpacity style={styles.userItem} onPress={() => Linking.openURL(url || '')}>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.companyName}>{`Company: ${company.name}`}</Text>
                <Text style={styles.address}>{`Address: (${suite}, ${street}, ${zipcode} ${city})`}</Text>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <FlatList
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    data={usersData}
                    renderItem={renderUserItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    )
}

export default UsersScreen