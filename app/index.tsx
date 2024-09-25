import React from 'react';
import { Text, View } from 'react-native';
import {Link} from 'expo-router';
import {StatusBar} from "expo-status-bar";

const index = () => {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-3xl font-pblack">Hello World</Text>
            <StatusBar style="auto" />
            <Link href="/profile" style={{ color: 'blue' }}>Go to profile</Link>
        </View>
    );
};

export default index;
