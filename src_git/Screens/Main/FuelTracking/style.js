import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import {
  moderateScale,
  moderateScaleVertical,
  height,
  width,
  textScale,
} from "../../../styles/responsiveSize";
import fontFamily from "../../../styles/fontFamily";

export const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.lightGary,
    alignItems: "center",
  },
  contentSectionContainer: {
    flex: 1,
    width: width - 15,
    backgroundColor: colors.white,
    marginTop: -100,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  addButtonContainer: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    paddingHorizontal: 10,
  },
  addButtonStyle: {
    width: 40,
    height: 40,
    shadowColor: colors.black,
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 50,
    marginBottom: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.lightBorderColor,
  },
  addButtonIcon: { height: 20, width: 20 },
  vehicleDetailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  dlNumberBox: {
    flexDirection: "row",
    width: "40%",
  },
  vehicleNumberStyle: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "600",
    //textTransform: "capitalize",
  },
  vehicleModelText: {
    fontSize: 14,
    color: colors.black,
    //marginHorizontal: 3,
  },
  fuelPriceContainer: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  fuelTotalPriceText: {
    fontSize: 18,
    color: colors.black,
    marginHorizontal: 3,
    fontWeight: "500",
  },
  statusIconContainer: {
    width: "15%",
    //flexDirection: "row",
    alignItems: "flex-end",
  },
  statusIconStyle: { height: 25, width: 25 },
  dateAndODOMeterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.veryLightGray,
    borderBoottomLeftRadius: 10,
    borderBoottomRightRadius: 10,
  },
  dateAndTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "40%",
  },
  calenderIconStyle: { height: 15, width: 15 },
  dateAndTimeText: {
    fontSize: 12,
    color: colors.black,
    marginHorizontal: 3,
  },
  speedMeterContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "40%",
    justifyContent: "center",
  },
  speedMeterIconStyle: { height: 16, width: 16 },
  speedMeterText: {
    fontSize: 12,
    color: colors.black,
    marginHorizontal: 3,
  },
  coollapseButtonContainer: {
    width: "15%",
    alignItems: "flex-end",
  },
  collapseButtonStyle: { height: 16, width: 16 },
  fuelDetailContainer: {
    backgroundColor: "white",
    paddingBottom: 10,
  },
  tableBodyDetailRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fuelPriceAnFuelVolumeContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "33%",
    borderRightWidth: 1,
    borderRightColor: colors.lightBorderColor,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightBorderColor,
    height: 55,
  },
  tableBodyHeading: { fontSize: 12, color: colors.black },
  tableBodyHeadingValueText: {
    fontSize: 14,
    color: colors.black,
    fontWeight: "500",
  },
  notFoundText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black,
  },
  notFoundContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
