import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import Button from '../../../components/Button';

const Profile = (props) => {
    const count = 10
    return (
        <SafeAreaView style={{flex : 1}}>
            <Header title="Profile" showLogout onLogout={() => { }} />
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.name}>Elina Hovakimyan</Text>
                    <Text style={styles.email}>hello@gmail.com</Text>
                    <ListItem title="My Listings" subTitle={`Already have ${count} listing`} onPress={()=>props.navigation.navigate("Listings")} />
                    <ListItem title="Settings" subTitle="Account, FAQ, Contact" onPress={()=>props.navigation.navigate("Settings")} />
                </View>
                <Button style={styles.button} title="Add a new listing" onPress={()=>props.navigation.navigate("CreateList")} />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Profile);