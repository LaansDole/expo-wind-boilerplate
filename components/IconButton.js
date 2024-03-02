import { Text, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function IconButton({ icon, label, onPress }) {
    return (
        <Pressable className="flex justify-center items-center" onPress={onPress}>
            <MaterialIcons name={icon} size={24} color="#fff" />
            <Text className="text-white mt-3">{label}</Text>
        </Pressable>
    )
}