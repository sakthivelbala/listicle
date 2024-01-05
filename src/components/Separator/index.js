import { memo } from 'react';
import { View, Text } from 'react-native'
import styles from './styles';

const Separator = (props) => {
   return <View style={styles.container}>
    <View style={styles.line}/>
    <Text style={styles.text}>{props.text}</Text>
    <View style={styles.line}/>
   </View> 
}

export default memo(Separator);