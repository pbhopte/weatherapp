import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const Error = ({retry}) => (
    <View style={styles.container}>
      <Text style={styles.text}>{`Something Went Wrong at Our End`}</Text>
      <TouchableOpacity onPress={retry} style={styles.button}>
        <Text style={styles.btnText}>Retry</Text>
      </TouchableOpacity>
    </View>
);

export default Error;