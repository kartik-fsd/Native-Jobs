import React, { useCallback, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  Share,
} from "react-native";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useFetch } from "../../hook/useFetch";
import { COLORS, SIZES, icons } from "../../constants";

const tabs = ["About", "Qualifications", "Responsibilities"];

const JobsDetails = () => {
  const params = useLocalSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });

  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await refetch();
    } catch (error) {
      console.error('Error refreshing data', error);
    }
    setRefreshing(false);
  }, [refetch]);
  

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
          />
        );
      case "About":
        return (
          <JobAbout info={data[0].job_description ?? "No data provided"} />
        );
      case "Responsibilities":
        return (
          <Specifics
            title="Responsibilities"
            points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );
      default:
        break;
    }
  };

  const handleShare = async () => {
    try {
      const shareOptions = {
        title: "Share Job Link",
        message: `Check out this job: ${
          data[0]?.job_google_link ?? "https://carrers.google.com/results"
        }`,
        url: data[0]?.job_google_link ?? "https://carrers.google.com/results",
        subject: "Job Link",
      };

      const result = await Share.share(shareOptions);

        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            console.log("shared with activity", result.activityType);
          } else {
            console.log("shared");
          }
        } else if (result.action === Share.dismissedAction) {
          console.log("Share dismissed");
        }
      } catch (error) {
        console.error("Error sharing job link", error.message);
      }
    };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimension="60%"
              handlePress={handleShare}
            />
          ),
          headerTitle: "",
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size={"large"} color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                CompanyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                CompanyName={data[0].employer_name}
                Location={data[0].job_country}
              />

              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              {displayTabContent()}
            </View>
          )}
        </ScrollView>
        <JobFooter
          url={data[0]?.job_google_link ?? "https://carrers.google.com/results"}
        />
      </>
    </SafeAreaView>
  );
};

export default JobsDetails;
