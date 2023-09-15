import classNames from "classnames";

const Button = ({ children, primary, outline, ...rest }) => {
  const classes = classNames(
    rest.classNames,
    "text-sm md:text-[16px] py-[14px] md:py-[16px] px-[28px] md:px-[32px] text-white font-medium flex justify-center items-center",
    {
      "bg-primary hover:bg-white border border-primary hover:border hover:text-primary hover:transition-all":
        primary && !outline,
      "border border-primary hover:bg-secondary hover:text-white hover:transition-all hover:border-secondary ":
        outline,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  checkVariationValue: ({ primary, outline }) => {
    const count = Number(!!primary) + Number(!!outline);

    if (count > 1) {
      return new Error("Only one of primary, outline can be true");
    }
  },
};

export default Button;
