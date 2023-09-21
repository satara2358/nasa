import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import TodaysImage from "../../components/ImagenDia";
import fetchApi from "../../utils/fetch";
import { PostImage } from "../../types";
import { format, sub } from "date-fns";
import LastImages from "../../components/LastImages";

export const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});
  const [lastFive, setLastFive] = useState<PostImage[]>([]);

  useEffect(() => {
    const loaadTodaysImage = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.error(error);
        setTodaysImage({});
      }
    };

    const loadLast5Days = async () => {
      try {
        const date = new Date();
        const dateToday = format(date, "yyyy-MM-dd");
        const days5Ago = format(sub(date, { days: 5 }), "yyyy-MM-dd");

        const load5Days = await fetchApi(
          `&start_date=${days5Ago}&end_date=${dateToday}`
        );
        setLastFive(load5Days);
      } catch (error) {
        console.error(error);
      }
    };

    loaadTodaysImage().catch(null);
    loadLast5Days().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastImages postImages={lastFive}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "rgba(7,26,93,255)",
  },
});

export default Home;
