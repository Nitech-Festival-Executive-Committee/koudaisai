import type { Metadata } from "next";
import "@/styles/style.scss";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

// TODO: authorとcopyrightを作成
// author: "名古屋工業大学第62回工大祭実行委員会",
// copyright: "Copyright (C) 2024 名古屋工業大学第62回工大祭実行委員会 All Rights Reserved.",
export const metadata: Metadata = {
  title: "第62回 工大祭 2024",
  description:
    "名古屋工業大学の大学祭「工大祭」の公式HP! 第62回工大祭「Ignition」は2024年11月16日(土)・17日(日)に開催予定!! 是非お越しください!!",
  keywords: "工大祭,第62回工大祭,名工祭,名古屋工業大学,名工大",

  // icon
  icons: {
    icon: [
      { url: "/icon/favicon.ico" },
      { url: "icon/android-chrome-192x192.png", type: "image/webp" },
    ],
    apple: "/icon/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: "#f7791e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        {/* sns-float */}
        {/* page-top */}
        <Footer />
      </body>
    </html>
  );
}
