import React, { useState } from "react";
import { Image, ImageStyle, StyleProp, StyleSheet, View } from "react-native";
import LoadingIndicator from "./LoadingIndicator";

type Props = {
  source: { uri: string };
  containerFlex?: number;
  style?: StyleProp<ImageStyle>;
};

const AppImage = ({ source, style = styles.container }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <Image
        source={source}
        resizeMode="cover"
        onLoadEnd={() => setLoading(false)}
        style={style}
      />
      {!!loading && (
        <View style={styles.loading}>
          <LoadingIndicator />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default AppImage;
