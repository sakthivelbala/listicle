import { useState, memo } from 'react'
import { ScrollView, Text, Image, View, Pressable, Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../../components/Button'
import ImageCarousel from '../../../components/ImageCarousel'
import styles from "./styles"

const ProductDetails = (props) => {
    const [item, setItem] = useState(props.route.params.item)
    const onContact = () => {
        // const phone = '+91'
        // Linking.openURL(`tel:${phone}`)
        const mail = 'temp@temp.com'
        Linking.openURL(`mailto:${mail}`)
    }
    return <SafeAreaView style={styles.safe}>
        <ScrollView style={styles.container}>
            {item.images ? <ImageCarousel images={item.images} /> :
                <Image style={styles.image} source={{ uri: item.image }} />}
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
            <Pressable style={styles.backContainer} onPress={props.navigation.goBack}>
                <Image style={styles.backIcon} source={require('../../../assets/back.png')} />
            </Pressable>
        </ScrollView>
        <View style={styles.footer}>
            <Pressable style={styles.bookmarkContainer}>
                <Image style={styles.bookmarkIcon} source={require('../../../assets/bookmark.png')} />
            </Pressable>
            <Button onPress={onContact} title="Contact Seller" />
        </View>
    </SafeAreaView>
}

export default memo(ProductDetails)