import React from 'react'
import { View, Text ,Image} from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageURL } from '../../../utils'

const Company = ({CompanyLogo , jobTitle , CompanyName, Location}) => {
  return (
    <View style={styles.container}>
     <View style={styles.logoBox}>
      <Image 
        source={{
          uri : checkImageURL(CompanyLogo)
          ? CompanyLogo
          : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
        }}
        style={styles.logoImage}
      />
     </View>

     <View style={styles.jobTitle}>
      <Text style={styles.jobTitle}>
        {CompanyName}
      </Text>
     </View>

     <View style={styles.companyInfoBox}>
      <Text style={styles.companyName}>
        {CompanyName} /
      </Text>
      <View style={styles.locationBox}>
        <Image
          source={icons.location}
          resizeMode='contain'
          style={styles.locationImage}
        />
        <Text style={styles.locationName}>{Location}</Text>
      </View>
     </View>
    </View>
  )
}

export default Company