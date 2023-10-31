import { View, Text, FlatList, TouchableOpacity, Platform, Linking } from 'react-native'
import React from 'react'
import styles from './UsersScreen.styles'
import { UserType } from './model'
import commonStyles from '../../styles/commonStyles'
import { useGetUsersQuery } from '../../store/services/usersApiSlice'

const USER_LABEL = 'Users location';

const UsersScreen = () => {
    const { data: users } = useGetUsersQuery({});

    const renderUserItem = ({ item: { name, company, address: { suite, street, zipcode, city, geo } } }: { item: UserType }) => {
        const latLng = `${geo.lat},${geo.lng}`;
        const scheme = Platform.select({ ios: 'maps://0,0?q=', android: 'geo:0,0?q=' });
        const url = Platform.select({
            ios: `${scheme}${USER_LABEL}@${latLng}`,
            android: `${scheme}${latLng}(${USER_LABEL})`
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
        <View style={[styles.container, commonStyles.flex]}>
            <View style={[styles.contentContainer, commonStyles.flex]}>
                <FlatList
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    data={users}
                    renderItem={renderUserItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    )
}

export default UsersScreen