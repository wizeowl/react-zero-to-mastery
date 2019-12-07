import { directoryTypes } from './directory.types';

export const setDirectory = sections => ({
  type: directoryTypes.SET_DIRECTORY,
  payload: sections
});
