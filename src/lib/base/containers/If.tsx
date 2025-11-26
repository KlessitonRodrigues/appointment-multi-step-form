type IIF = {
  check?: boolean;
  true?: React.ReactNode;
  false?: React.ReactNode;
  children?: React.ReactNode;
};

const If = (props: IIF) => {
  return props.check ? props.true || props.children : props.false;
};

export default If;
