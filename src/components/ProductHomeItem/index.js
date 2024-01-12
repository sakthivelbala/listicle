import { memo } from 'react'
import { Image, Text, Pressable } from 'react-native'
import { styles } from './styles';

const ProductHomeItem = (props) => {
    return <Pressable onPress={props.onPress} style={styles.container} >
        <Image style={styles.image} source={{ uri: props.image }} />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>{props.price}</Text>
    </Pressable>
}

export default memo(ProductHomeItem);