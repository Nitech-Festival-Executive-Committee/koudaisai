import styles from "./PageWrapper.module.scss";

export default function PageWrapper({
  children,
  style,
  className,
}: Readonly<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}>) {
  return (
    <div className={`${styles.wrapper} ${className}`} style={style}>
      {children}
    </div>
  );
}
