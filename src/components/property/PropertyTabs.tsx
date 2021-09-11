import React from "react";
import { Box } from "native-base";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OverviewTab from "./OverviewTab";
import FeaturesTab from "./FeaturesTab";

export type TabParams = {
  Overview: undefined;
  Features: undefined;
  Seller: undefined;
};

const Tab = createMaterialTopTabNavigator<TabParams>();

type Props = {
  hasSeller?: boolean;
};

// TODO: Fix height for tabs. (Urgent)
const PropertyTabs = ({ hasSeller }: Props) => (
  <Box height={1000}>
    <Tab.Navigator
      initialRouteName="Overview"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 18 },
        tabBarStyle: { backgroundColor: "white" },
      }}
    >
      <Tab.Screen
        name="Overview"
        component={OverviewTab}
        options={{ tabBarLabel: "Overview" }}
      />
      <Tab.Screen
        name="Features"
        component={FeaturesTab}
        options={{ tabBarLabel: "Features" }}
      />
      {!!hasSeller && (
        <Tab.Screen
          name="Seller"
          component={FeaturesTab}
          options={{ tabBarLabel: "Features" }}
        />
      )}
    </Tab.Navigator>
  </Box>
);

export default PropertyTabs;
