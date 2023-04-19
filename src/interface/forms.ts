export interface IPropsType {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  error?: string;
  accept?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
}

export interface IPropsSelect {
  id: string;
  error?: string;
  label?: string;
  name?: string;
}
