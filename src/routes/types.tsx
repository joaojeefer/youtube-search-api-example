import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum RootRoutes {
  ABOUT = 'About',
  HOME = 'Home',
  PLAYER = 'Player',
}

export type RootStackParamList = {
  About: undefined;
  Home: undefined;
  Player: {videoID: string};
};

export type PlayerNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RootRoutes.PLAYER
>;

export type PlayerRouteProp = RouteProp<RootStackParamList, RootRoutes.PLAYER>;

export type AboutNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RootRoutes.ABOUT
>;
