import { View, Image, Text, Pressable } from 'react-native'
import { BLACK } from '../../utils/colors';
import { styles } from './styles';

const CategoryBox = (props) => {
    return <Pressable onPress={props.onPress} style={[styles.container, props.isFirst ? {marginLeft : 24} : {}]} >
        <View style={[styles.imageContainer, props.isSelected ? {backgroundColor:BLACK}:{}]}>
            <Image style={styles.image} source={{uri : props.image}}/>
        </View>
        <Text style={[styles.title, props.isSelected ? {fontWeight : '500'} : {}]}>{props.title}</Text>
    </Pressable>
}

export default CategoryBox;