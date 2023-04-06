import { ICardData } from './card';

export interface IModal {
  id?: number;
  props?: ICardData[] | undefined;
  onClose?: () => void | undefined;
}
