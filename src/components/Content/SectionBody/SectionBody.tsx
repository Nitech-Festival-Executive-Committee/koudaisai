import styles from "./SectionBody.module.scss";

export default function SectionBody({
  children,
  style,
  className,
}: Readonly<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}>) {
  return (
    <div className={`${styles.contentBlock} ${className}`} style={style}>
      {children}
    </div>
  );
}
