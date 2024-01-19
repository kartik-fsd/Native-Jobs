import { StyleSheet } from 'react-native';
import { COLORS, SHADOWS, SIZES } from "../../constants";
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    marginTop: 10
  },
  avatarContainer: {
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  modalContainer: {
    position: 'absolute',
    top: 70,
    right: 10,
    backgroundColor: COLORS.white,
    ...SHADOWS.medium,
    borderRadius: 10,
    elevation: 5,
    padding: 10,
    width: 170,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  profileItem : {
    fontSize: SIZES.medium,
    fontFamily: "DMSans-Bold",
    color: COLORS.primary,
    margin : SIZES.xSmall
  },
  border : {
    borderBottomColor : COLORS.gray2,
    borderBottomWidth: 1,
  }
});

export default styles;
