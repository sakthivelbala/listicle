import { View, Text, Pressable, Image } from 'react-native'
import { styles } from './styles';

const ListItem = (props) => {
    return <Pressable style={[styles.container, props.style]} onPress={props.onPress}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.title}</Text>
            {props.subTitle && <Text style={styles.subTitle}>{props.subTitle}</Text>}
        </View>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../assets/forward.png')}/>
        </View>
    </Pressable>
}

export default ListItem