import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { DateTimePicker } from 'react-widgets';
import { Form, FormFieldProps, Label } from 'semantic-ui-react';

interface IProps extends FieldRenderProps<Date, HTMLElement>, FormFieldProps { }

const DateInput: React.FC<IProps> = ({ input, width, placeholder, date = false, time = false, meta: { touched, error }, id, ...rest }) => {
  return (
    <Form.Field error={touched && !!error} width={width} >
      <DateTimePicker 
        id={undefined}
        placeholder={placeholder}
        value={input.value || null}
        onChange={input.onChange}
        date={date}
        time={time}
        onKeyDown={(e) => e.preventDefault()}
        onBlur={input.onBlur}
        {...rest}
      />
      {touched && error && (
        <Label basic color='red' >
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default DateInput;