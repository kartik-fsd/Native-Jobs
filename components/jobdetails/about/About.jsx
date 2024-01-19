import React from 'react'
import { View, Text } from 'react-native'

import styles from './about.style'

const About = ({info}) => {

  console.log(info,"text")
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>
        <Text style={styles.contentBox}>
          <Text style={styles.contextText}>{info}</Text>
        </Text>
      </Text>
    </View>
  )
}

export default About