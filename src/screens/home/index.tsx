import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SearchTag, VideoItem} from '../../components';
import {styles} from './styles';
import {colors} from '../../res';
import {useTags, useVideo} from '../../hooks';
import {AboutNavigationProp, RootRoutes} from '../../routes/types';

export const HomeScreen = () => {
  const [tag, setTag] = useState<string>('');

  const navigation = useNavigation<AboutNavigationProp>();
  const {addTagToStorage, clearTags, tags} = useTags();
  const {fetchVideosByTag, hasErrorFetchingVideos, isFetchingVideos, videos} =
    useVideo();

  useEffect(() => {
    fetchVideosByTag(tags[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function navigateToAboutScreen() {
    navigation.navigate(RootRoutes.ABOUT);
  }

  function onPressAddButton() {
    addTagToStorage(tag);
    Keyboard.dismiss();
  }

  function handleListSeparator() {
    return <View style={styles.listSeparator} />;
  }

  function renderTags() {
    return (
      <View style={styles.tagsArea}>
        {tags.map(tag => (
          <SearchTag
            key={tag}
            tag={tag}
            onPress={() => fetchVideosByTag(tag)}
          />
        ))}
        {!!tags.length && <Text onPress={clearTags}>Limpar...</Text>}
      </View>
    );
  }

  if (isFetchingVideos) {
    return (
      <View style={styles.loadingArea}>
        <ActivityIndicator size="large" color={colors.secondary.light} />
      </View>
    );
  }

  if (hasErrorFetchingVideos) {
    return (
      <View style={styles.loadingArea}>
        <Text>Ops!</Text>
        <Text>
          Aconteceu um erro ao realizar a consulta! Por favor, tente novamente
          mais tarde.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text onPress={navigateToAboutScreen} style={styles.about}>
        Sobre
      </Text>
      <View style={styles.inputArea}>
        <TextInput
          onChangeText={setTag}
          placeholder="Digite a tag..."
          value={tag}
          style={styles.input}
          onSubmitEditing={() => addTagToStorage(tag)}
        />
        <TouchableOpacity onPress={onPressAddButton} style={styles.addButton}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        contentContainerStyle={styles.listArea}
        data={videos}
        ItemSeparatorComponent={handleListSeparator}
        keyExtractor={item => item.id}
        renderItem={({item}) => <VideoItem {...item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderTags()}
      />
    </View>
  );
};
