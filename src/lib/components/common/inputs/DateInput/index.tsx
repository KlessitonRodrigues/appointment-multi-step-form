import { LabelError, Input, Label } from "src/lib/base/form/inputs";

type IInputField = {
  name?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  input?: any;
  value?: string;
  onChangeValue?: (value: string) => void;
};

const DateInput = (props: IInputField) => {
  const { name, label, placeholder, error, input, value, onChangeValue } =
    props;

  return (
    <Label>
      {label}
      <Input
        type="date"
        id={name}
        name={name}
        placeholder={placeholder}
        autoComplete={name}
        value={value}
        haserror={error}
        onChange={(ev: any) => onChangeValue?.(ev.target?.value)}
        onKeyDown={(ev) => {
          if (ev.key.length === 1 && ev.key.match(/[\D]/g)) {
            ev.preventDefault();
          }
        }}
        {...input}
      />
      <LabelError>{error}</LabelError>
    </Label>
  );
};

export default DateInput;
