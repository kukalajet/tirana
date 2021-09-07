import React, { useEffect, useRef, useState } from "react";
import {
  useWindowDimensions,
  StyleSheet,
  Animated,
  Pressable,
} from "react-native";
import { Box, HStack, VStack } from "native-base";
import {
  NavigationState,
  SceneMap,
  SceneRendererProps,
  TabView,
} from "react-native-tab-view";

const FirstRoute = () => <Box flex={1} bgColor="#ff4081" />;

const SecondRoute = () => <Box flex={1} bgColor="#673ab7" />;

type Route = { key: string; title: string };

const Tabs = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState<Route[]>([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  const renderTabBar = (
    props: SceneRendererProps & {
      navigationState: NavigationState<Route>;
    }
  ) => {
    const inputRange = props.navigationState.routes.map((_, i) => i);

    return (
      <HStack justifyContent="flex-start">
        {props.navigationState.routes.map((route, routeIndex) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === routeIndex ? 1 : 0.5
            ),
          });

          return (
            <Item
              key={routeIndex}
              value={route.title}
              opacity={opacity}
              onPress={() => setIndex(routeIndex)}
              isSelected={index === routeIndex}
            />
          );
        })}
      </HStack>
    );
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width, height: layout.height }}
      renderTabBar={renderTabBar}
      renderScene={SceneMap({
        first: FirstRoute,
        second: SecondRoute,
      })}
    />
  );
};

const Item = ({
  value,
  opacity,
  onPress,
  isSelected,
}: {
  value: string;
  onPress: () => void;
  isSelected: boolean;
  opacity?: Animated.AnimatedInterpolation;
}) => {
  const barAnimation = useRef<Animated.Value>(
    new Animated.Value(isSelected ? 1 : 0)
  ).current;

  useEffect(() => {
    Animated.timing(barAnimation, {
      toValue: isSelected ? 1 : 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, [isSelected]);

  return (
    <Pressable onPress={onPress} style={{ flex: 1 }}>
      <Box py={2} px={4}>
        <Animated.Text style={{ opacity, fontSize: 16 }}>{value}</Animated.Text>
        <Animated.View
          style={{ opacity: barAnimation, borderWidth: 1.5, borderRadius: 4 }}
        />
      </Box>
    </Pressable>
  );
};

export default Tabs;
