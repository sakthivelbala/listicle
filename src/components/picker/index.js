import { memo, useState } from "react"
import { Text, View, Image, Pressable, Modal, TouchableOpacity } from "react-native"
import { styles } from "./styles"

const Picker = (props) => {
    const [showModal, setShowModal] = useState(false)
    const toggleModal = () => {
        setShowModal(true)
    }
    return <View style={styles.container}>
        <Text style={styles.label}>{props.label}</Text>
        <View style={styles.inputContainer}>
            <Text style={styles.input}>{props.value ? props.value : props.placeholder}</Text>
            <Pressable onPress={toggleModal}>
                <Image style={styles.arrow} source={require("../../assets/forward.png")} />
            </Pressable>
        </View>
        <Modal transparent visible={showModal}>
            <TouchableOpacity activeOpacity={1} onPress={()=>{setShowModal(false)}} style={styles.modalWrapper}>
                <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
                    <Text style={styles.header}>Select Options</Text>
                    {props.options.map(option=><Text style={styles.options} key={option.id}>{option.title}</Text>)}
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    </View>
}

export default memo(Picker)