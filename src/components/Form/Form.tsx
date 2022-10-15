import { format } from 'date-fns';
import React, { FC, FormEvent, useState } from 'react';
import { MessageInterface } from '../../types/MessageInterface';
import { CustomButton, CustomInput } from '../UI';
import styles from './Form.module.scss';
import { FormProps } from './Form.props';

export const Form: FC<FormProps> = ({ setMessageList }) => {
  const { form, form__button, form_grup, form_input, form_label } = styles;

  const [input, setInput] = useState({
    text: '',
    author: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const msg: MessageInterface = {
      ...input,
      id: Date.now(),
      createdAt: format(new Date(), 'dd-MM-yyyy'),
    };

    if (!input.text || !input.author) {
      return;
    }

    setMessageList((prev: MessageInterface[]) => [msg, ...prev]);
    setInput({ text: '', author: '' });
  };

  return (
    <form className={form} onSubmit={handleSubmit}>
      <div className={form_grup}>
        <label className={form_label} htmlFor="text">
          Text
        </label>
        <CustomInput
          type="text"
          className={form_input}
          id="text"
          placeholder="Your text"
          value={input.text}
          onChange={(e) => {
            setInput({ ...input, text: e.target.value });
          }}
        />
      </div>

      <div className={form_grup}>
        <label className={form_label} htmlFor="author">
          Author
        </label>
        <CustomInput
          type="text"
          className={form_input}
          id="author"
          placeholder="Your name"
          value={input.author}
          onChange={(e) => {
            setInput({ ...input, author: e.target.value });
          }}
        />
      </div>

      <CustomButton className={form__button}>Send</CustomButton>
    </form>
  );
};
