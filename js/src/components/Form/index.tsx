import React from "react";

interface Props {
  className?: string;
  onSubmit: (arg0: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

const getSubmitHandler = (
  onSubmit: (arg0: React.FormEvent<HTMLFormElement>) => void
) => (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  onSubmit(e);
};

const Form = (props: Props) => (
  <form className={props.className} onSubmit={getSubmitHandler(props.onSubmit)}>
    {props.children}
  </form>
);

export default Form;
