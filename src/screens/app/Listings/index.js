import { styles } from './styles'
import { View, FlatList } from 'react-native'
import Header from '../../../components/Header'
import { products } from '../../../data/Products'
import FavoriteItem from '../../../components/FavoriteItem'

const Listings = (props) => {
    return <View style={styles.container}>
        <Header title="My Listings" showBack onBackPress={props.navigation.goBack}/>
        <FlatList showsVerticalScrollIndicator={false} data={products} keyExtractor={item => item.id}
            renderItem={({ item }) => <FavoriteItem isDelete title={item.title} image={item.image} price={item.price} onPress={()=>{props.navigation.navigate("ProductDetails", {item})}} />} />
    </View>
}

export default Listings