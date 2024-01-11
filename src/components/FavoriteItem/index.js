import { memo } from 'react'
import { View, Image, Text, Pressable } from 'react-native'
import { styles } from './styles';

const FavoriteItem = (props) => {
    return <Pressable onPress={props.onPress} style={styles.container} >
        <Image style={styles.image} source={{ uri: props.image }} />
        <View style={styles.content}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>{props.price}</Text>
        </View>
        <Image style={styles.close} source={require('../../assets/close.png')}/>
    </Pressable>
}

export default memo(FavoriteItem);