import { useState, memo, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import { categories } from '../../../data/categories';
import CategoryBox from '../../../components/CategoryBox';
import { products } from '../../../data/Products';
import ProductHomeItem from '../../../components/ProductHomeItem';

const Home = (props) => {
    const[selectedCategory, setSelectedCategory] = useState()
    const[keyword, setKeyword] = useState()
    const[filteredProducts, setFilteredProducts] = useState(products)
    useEffect(() => {
        setKeyword()
        setFilteredProducts(selectedCategory?products.filter(p=>p.category==selectedCategory.id):products);
    }, [selectedCategory])
    useEffect(() => {
        setSelectedCategory()
        setFilteredProducts(keyword?products.filter(p=>p.title.toLowerCase().includes(keyword.toLowerCase())):products);
    }, [keyword])
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header title="Find All You Need" showSearch onSearch={setKeyword} keyword={keyword} />
                <FlatList showsHorizontalScrollIndicator={false} style={styles.list} horizontal data={categories} keyExtractor={item => item.id}
                    renderItem={({ item, index }) => <CategoryBox title={item.title} image={item.image} isFirst={index === 0} onPress={()=>{setSelectedCategory(item)}} isSelected={item.id==selectedCategory?.id} />} />
                <FlatList showsVerticalScrollIndicator={false} style={styles.productList} data={filteredProducts} numColumns={2} keyExtractor={item => item.id}
                    renderItem={({ item }) => <ProductHomeItem title={item.title} image={item.image} price={item.price} onPress={()=>{props.navigation.navigate("ProductDetails", {item})}}/>}
                    ListFooterComponent={<View style={{ height: 300 }} />} />
            </View>
        </SafeAreaView>
    )
}

export default memo(Home);