import { memo } from 'react'
import { View, FlatList, Text } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import { products } from '../../../data/Products';
import FavoriteItem from '../../../components/FavoriteItem';
import ProductHomeItem from '../../../components/ProductHomeItem';

const Favorites = () => {
    return (
        <SafeAreaView>
            <Header title="Favorites" />
            <FlatList data={products} keyExtractor={item => item.id}
                renderItem={({ item }) => <FavoriteItem title={item.title} image={item.image} price={item.price} />} />
        </SafeAreaView>
    )
}

export default memo(Favorites);