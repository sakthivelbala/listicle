import { View, Text, Pressable, Image } from 'react-native'
import { memo, useState } from 'react'
import { styles } from './styles';
import Input from '../input';

const Header = (props) => {
    const [showSearchInput, setShowSearchInput] = useState(false)

    return <View style={styles.mainContainer}><View style={styles.container}>
        {props.showBack ? <Pressable hitStop={20} onPress={props.onBackPress}>
            <Image style={styles.icon} source={require('../../assets/back.png')} />
        </Pressable> :
        props.showSearch ? <Pressable hitStop={20} onPress={()=>{setShowSearchInput(showSearch=>!showSearch)}}>
            <Image style={styles.icon} source={require('../../assets/search.png')} />
        </Pressable> : <View style={styles.space}/>}
        <Text style={styles.title}>{props.title}</Text>
        {props.showLogout ? <Pressable hitStop={20} onPress={props.onLogout}>
            <Image style={styles.icon} source={require('../../assets/logout.png')} />
        </Pressable> : <View style={styles.space}/>}
    </View>
    {showSearchInput && <Input placeholder="Type your keyword ..." value={props.keyword} onChangeText={props.onSearch}/>}
    </View>
}

export default memo(Header);