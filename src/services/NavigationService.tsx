import { createNavigationContainerRef } from '@react-navigation/native';
import type { RootStackParamList } from 'app/src/types';

const navigationRef = createNavigationContainerRef<RootStackParamList>();

export { navigationRef };
