import NavigationButton from "../NavigationButton/NavigationButton";
import NavigationDropDown from "../NavigationButton/NavigationDropDown";
import styles from "./HamburgerContent.module.scss";

export default function HamburgerContent() {
  return (
    <div>
      <div className={`${styles.hamburgerContent}`}>
        <NavigationButton text="工大祭とは" url="/about/" />
        <NavigationDropDown
          text="企画"
          items={[
            {
              text: "企画一覧",
              url: "/project/",
            },
            {
              text: "タイムテーブル",
              url: "/timetable/",
            },
          ]}
        />
        <NavigationButton text="アクセス" url="/access/" />
        <NavigationButton text="キャラクター" url="/character/" />
        <NavigationButton text="スポンサー" url="/sponsor" />
        <NavigationButton text="FAQ" url="/faq/" />
      </div>
    </div>
  );
}
