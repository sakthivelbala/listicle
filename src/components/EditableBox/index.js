import { View, Text, TextInput } from 'react-native'
import { styles } from './styles';

const EditableBox = (props) => {
    return <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        {props.isEditable ? <TextInput value={props.value} onChangeText={props.onChangeText} placeholder={props.placeholder} style={styles.input}/> :
            <Text style={styles.value}>{props.value}</Text>}
    </View>
}

export default EditableBox