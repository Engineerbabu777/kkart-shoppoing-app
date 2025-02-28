/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {dynamicDashboardData as fullData} from '@utils/db';
import AdCarousal from '../organisms/AdCarousel';
import Categories from '../organisms/Categories';
import Sponser from '../organisms/Sponser';
import VerticalList from '../organisms/VerticalList';
import HorizontalList from '../organisms/HorizontalList';
import AnimatedHorizontalList from '../organisms/AnimatedHorizontalList';

const sectionComponents: {[key: string]: React.ComponentType<any>} = {
  ad_carousal: AdCarousal,
  categories: Categories,
  sponser: Sponser,
  vertical_list: VerticalList,
  horizontal_list: HorizontalList,
  animated_horizontal_list: AnimatedHorizontalList,
};

const PAGE_SIZE = 4;

type Props = {
  scrollYGlobal: any;
};
export default function MainList({scrollYGlobal}: Props) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [data, setData] = useState(fullData.slice(0, PAGE_SIZE));
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const prevScrollY = useRef(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;
    scrollYGlobal.value = currentScrollY;
    prevScrollY.current = currentScrollY;
  };

  const handleRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setCurrentPage(1);
      setData(fullData.slice(0, PAGE_SIZE));
      setIsRefreshing(false);
    }, 3000);
  };

  const handleLoadMore = () => {
    if (isLoadingMore) {
      return;
    }
    if (data?.length >= fullData.length) {
      return;
    }

    setIsLoadingMore(true);
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const newItems = fullData?.slice(0, nextPage * PAGE_SIZE);
      setData(newItems);
      setCurrentPage(nextPage);
      setIsLoadingMore(false);
    }, 4000);
  };

  const renderItem = ({item}: any) => {
    console.log({item});
    const SectionComponent = sectionComponents[item.type];
    return SectionComponent ? (
      <SectionComponent
        data={
          item.type === 'vertical_list'
            ? item
            : item.type === 'horizontal_list'
            ? item
            : item?.data
        }
      />
    ) : null;
  };

  return (
    <FlatList
      data={data}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
      overScrollMode="always"
      onScroll={handleScroll}
      ref={flatListRef}
      renderItem={renderItem}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      nestedScrollEnabled
      contentContainerStyle={{paddingBottom: Platform.OS === 'ios' ? 300 : 200}}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={
        isLoadingMore ? (
          <ActivityIndicator
            size={'small'}
            color={'#888'}
            style={{alignSelf: 'center', margin: 15}}
          />
        ) : null
      }
    />
  );
}

const styles = StyleSheet.create({});
