import { useState, memo } from 'react';
import { ScrollView, Text, Pressable, Image, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import EditableBox from '../../../components/EditableBox';
import Button from '../../../components/Button';

const Settings = (props) => {
    const [ isEditable, setIsEditable ] = useState(false)
    const [ info, setInfo ] = useState({name : 'Bruno Pham', email : 'bruno203@gmail.com'})

    return (
        <SafeAreaView style={{ padding: 8 }}>
            <Header title="Settings" showBack onBackPress={props.navigation.goBack}/>
            <ScrollView style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Personal Information</Text>
                    <Pressable style={styles.imageContainer} onPress={()=>{setIsEditable(editable=>!editable)}}>
                        <Image resizeMode='contain' style={styles.image} source={isEditable ? require('../../../assets/close.png') : require('../../../assets/edit.png')} />
                    </Pressable>
                </View>
                <View style={styles.information}>
                    <EditableBox title="Name" value={info.name} onChangeText={(e)=>setInfo({...info, name: e.value})} placeholder="Name" isEditable={isEditable}/>
                    <EditableBox title="Email" value={info.email} onChangeText={(e)=>setInfo({...info, email: e.value})} placeholder="Email" isEditable={isEditable}/>
                    {isEditable && <Button style={styles.button} title="Save"/> }
                </View>
                <Text style={styles.help}>Help Center</Text>
                <ListItem style={styles.item} title="FAQ" />
                <ListItem style={styles.item} title="Contact Us" />
                <ListItem style={styles.item} title="Privacy & Terms" />
            </ScrollView>
        </SafeAreaView>
    )
}

export default memo(Settings);