// ProfileDropdown.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback, Image } from 'react-native';
import styles from './Profile.style';
import Svg, { Path } from 'react-native-svg';

const ProfileDropdown = ({iconUrl}) => {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisibility((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownVisibility(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.avatarContainer}>
      <Image source={iconUrl} style={styles.avatar} />
      </TouchableOpacity>

      <Modal transparent={true} animationType="fade" visible={isDropdownVisible} onRequestClose={closeDropdown}>
        <TouchableWithoutFeedback onPress={closeDropdown}>
          <View style={styles.modalContainer}>
            <View >
              <TouchableOpacity onPress={closeDropdown} style={styles.dropdownItem}>
                <Text style={styles.profileItem}>Kartik@gmail.com</Text>
              </TouchableOpacity>
            
              <Text style={styles.border}/>
        
              <TouchableOpacity onPress={closeDropdown} style={styles.dropdownItem}>
              <Svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Replace this Path with your desired SVG for logout */}
                <Path d="M12 1C18.0751 1 23 5.92487 23 12C23 17.4394 18.9351 22.3655 13.5669 23.3237C13.2671 23.388 12.7329 23.388 12.4331 23.3237C6.06501 22.3655 2 17.4394 2 12C2 5.92487 6.92487 1 12 1ZM12 2C6.48048 2 2 6.48048 2 12C2 16.6052 6.84638 21 12 21C17.1536 21 22 16.6052 22 12C22 6.48048 17.5195 2 12 2ZM11 17V7H13V17H11Z" fill="black" />
              </Svg>
              <Text style={styles.profileItem}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default ProfileDropdown;
