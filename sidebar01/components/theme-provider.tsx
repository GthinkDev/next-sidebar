"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { createContext, useContext } from "react";

const ThemeContext = createContext({ theme: "dark", toggleTheme: () => {} });

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  // const [theme, setTheme] = useState("light"); // 默认主题

  // useEffect(() => {
  //   // 从 localStorage 读取保存的主题
  //   const savedTheme = localStorage.getItem("theme") || "light";
  //   setTheme(savedTheme);
  // }, []);

  // // 切换主题
  // const toggleTheme = () => {
  //   // 如果当前主题是light，则将新主题设置为dark，否则将新主题设置为light
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   // 更新主题
  //   setTheme(newTheme);
  //   // 将新主题保存到localStorage中
  //   localStorage.setItem("theme", newTheme);
  // };

  return (
    <NextThemesProvider {...props}>
      {/* <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={`theme-${theme}`}>{children}</div>
      </ThemeContext.Provider> */}
      {children}
    </NextThemesProvider>
  );
}

// 导出一个名为useTheme的函数，该函数用于获取ThemeContext的值
export const useTheme = () => useContext(ThemeContext);
