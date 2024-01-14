import { useState } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import Button from '../../../components/Button'
import Header from '../../../components/Header'
import Input from '../../../components/input'
import Picker from '../../../components/picker'
import { categories } from '../../../data/categories'
import { styles } from './styles'

const CreateList = (props) => {

    const [images, setImages] = useState([])

    const uploadImage = async () => {
        launchImageLibrary().then(image => {
            if (image.assets.length > 0) {
                setImages(image.assets)
            }
        })
    }

    return <ScrollView>
        <Header title="Create a new listing" showBack onBackPress={props.navigation.goBack} />
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Upload photos</Text>
            <View style={styles.imagesContainer}>
                <View style={styles.uploadContainer}>
                    <TouchableOpacity style={styles.uploadCircle} onPress={uploadImage}>
                        <Text style={styles.plus}>+</Text>
                    </TouchableOpacity>
                </View>
                {images.map(image => <View key={image.fileName}>
                    <Image style={styles.image} source={{ uri: image.uri }} />
                    <Image style={styles.imageDelete} source={require('../../../assets/close.png')}/>
                </View>)}
            </View>
            <Input placeholder="Listing Title" label="Title"/>
            <Picker placeholder="Select the category" label="Category" options={categories} />
            <Input placeholder="Enter price in USD" label="Price"/>
            <Input style={styles.textArea} placeholder="Tell us more ..." label="Description" multiline/>
            <Button style={styles.submit} title="Submit"/>
        </View>
    </ScrollView>
}

export default CreateList
