import NavigationButton from "../NavigationButton/NavigationButton";
import NavigationDropDown from "../NavigationButton/NavigationDropDown";
import styles from "./NavigationButtonContainer.module.scss";

export default function NavigationButtonContainer() {
  return (
    <div className={styles.navigationButtonList}>
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
  );
}
