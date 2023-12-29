import NetInfo, {
  NetInfoState,
  NetInfoSubscription,
} from '@react-native-community/netinfo';

export const networkListener = (
  callback: (state: NetInfoState) => void,
): NetInfoSubscription => {
  return NetInfo.addEventListener(state => callback(state));
};

export const isNetworkConnected = async (): Promise<boolean> => {
  const state = await NetInfo.fetch();
  if (state) {
    return !!(state.isConnected && state.isInternetReachable);
  } else {
    return true;
  }
};
