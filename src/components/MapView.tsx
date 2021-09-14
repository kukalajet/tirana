import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import MapView, { Marker } from "react-native-maps";

type Props = {
  style?: StyleProp<ViewStyle>;
  coordinate: LatLng;
};

export type LatLng = {
  latitude: number;
  longitude: number;
};

const Map = ({ coordinate, style }: Props) => {
  return (
    <MapView
      provider="google"
      showsIndoors={true}
      initialCamera={{
        center: coordinate,
        heading: 10,
        pitch: 0,
        zoom: 18.5,
        altitude: 0,
      }}
      zoomEnabled={false}
      rotateEnabled={false}
      scrollEnabled={false}
      pitchEnabled={false}
      style={style}
    >
      <Marker coordinate={coordinate} />
    </MapView>
  );
};

export default Map;
