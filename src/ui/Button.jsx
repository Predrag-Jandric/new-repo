import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block rounded-full bg-yellow-400 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 sm:px-6 md:py-4",
    small: base + " px-4 py-2 sm:px-5 md:py-2.5 text-xs",
    secondary:
      " inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors focus:text-stone-800 hover:text-stone-800 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 sm:px-6 md:py-3.5",
      round: base + " px-2.5 py-1 sm:px-3.5 md:py-2 text-sm",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        to={to}
        className={styles[type]}
      >
        {children}
      </button>
    );

  return (
    <button disabled={disabled} to={to} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
