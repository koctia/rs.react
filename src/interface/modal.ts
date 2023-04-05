import { ICardData } from './card';

export interface IModal {
  props: ICardData;
  onClose?: () => void | undefined;
}
