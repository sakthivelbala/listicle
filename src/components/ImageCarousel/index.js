import { memo, useState } from "react"
import { FlatList, Image, View, Dimensions } from "react-native"
import { styles } from "./styles"

const {width} = Dimensions.get('window')

const ImageCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    return <View>
        <FlatList style={styles.list} data={props.images} horizontal pagingEnabled showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Image style={styles.image} source={{ uri: item }} />}
            keyExtractor={(_,index)=>index} onMomentumScrollEnd={(e)=>{setActiveIndex(Math.round(e.nativeEvent.contentOffset.x/width))}} />
        <View style={styles.pagination}>
            {props.images.map((_,i)=><View key={i} style={[styles.paginationLine, i===activeIndex ? styles.activeLine : {}]}/>)}
        </View>
    </View>
}

export default memo(ImageCarousel)