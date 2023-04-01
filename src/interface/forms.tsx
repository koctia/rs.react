export interface IPropsType {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  error?: string;
  accept?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}
