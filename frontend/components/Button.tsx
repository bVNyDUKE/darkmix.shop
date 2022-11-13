import Link from "next/link";

type ButtonProps = {
  href?: string;
  label: string;
  aditClass: string;
  icon: any;
  onClick?: () => void;
};

export default function Button({
  href,
  label,
  aditClass,
  icon,
  onClick,
}: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={` inline-block py-2 px-6 bg-primary-dark text-white text-lg hover:translate-y-[-3px] hover:shadow-lg ease-in duration-100 ${aditClass}`}
      >
        {icon}
        {label}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={` inline-block py-2 px-6 bg-primary-dark text-white text-lg hover:translate-y-[-3px] hover:shadow-lg ease-in duration-100 ${aditClass}`}
    >
      {icon}
      {label}
    </button>
  );
}
