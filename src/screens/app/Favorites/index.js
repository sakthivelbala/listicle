import { memo } from 'react'
import { FlatList } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import { products } from '../../../data/Products';
import FavoriteItem from '../../../components/FavoriteItem';

const Favorites = (props) => {
    return (
        <SafeAreaView>
            <Header title="Favorites" />
            <FlatList showsVerticalScrollIndicator={false} data={products} keyExtractor={item => item.id}
                renderItem={({ item }) => <FavoriteItem title={item.title} image={item.image} price={item.price} onPress={()=>{props.navigation.navigate("ProductDetails", {item})}} />} />
        </SafeAreaView>
    )
}

export default memo(Favorites);