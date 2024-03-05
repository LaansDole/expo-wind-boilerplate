import { Text, Pressable, View, Modal } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function EmojiPicker({ isVisible, children, onClose }) {
    return (
        <Modal animationType='slide' transparent={true} visible={isVisible}>
            <View className="h-[25%] w-full bg-[#25292e] rounded-t-[4.5rem] absolute bottom-0">
                <View className="h-[16%] bg-[#464C55] rounded-t-[2.5rem] px-5 flex items-center justify-between">
                    <Text className="text-white text-base">
                        Choose a sticker
                    </Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" color="#fff" size={22} />
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    )
}