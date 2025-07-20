const siteConfig = {
  metaData: {
    title: "Component Library",
    description: "A comprehensive collection of UI components",
    keywords: "UI, components, design system, react",
  },
  navItem: [
    {
      title: "文档",
      icon: "document",
    },
    {
      title: "组件",
      icon: "component",
      Children: [
        {
          title: "动作",
          icon: "action",
          subChildren: [
            {
              title: "Button按钮",
              href: "/components/actions/button",
            },
            {
              title: "Dropdown下拉菜单",
              href: "/components/actions/dropdown",
            },
            {
              title: "Modal对话框",
              href: "/components/actions/modal",
            },
            {
              title: "Swap调换",
              href: "/components/actions/swap",
            },
            {
              title: "ThemeController主题控制器",
              href: "/components/actions/theme-controller",
            },
          ],
        },
        {
          title: "Datadisplay",
          icon: "data",
          subChildren: [
            {
              title: "Accordion手风琴",
              href: "/components/data-display/accordion",
            },
            {
              title: "Avatar头像",
              href: "/components/data-display/avatar",
            },
            {
              title: "Badge徽章",
              href: "/components/data-display/badge",
            },
            {
              title: "Card卡片",
              href: "/components/data-display/card",
            },
            {
              title: "Carousel轮播",
              href: "/components/data-display/carousel",
            },
            {
              title: "Chatbubble聊天气泡",
              href: "/components/data-display/chatbubble",
            },
            {
              title: "Collapse折叠面板",
              href: "/components/data-display/collapse",
            },
            {
              title: "Countdown计数",
              href: "/components/data-display/countdown",
            },
            {
              title: "Diff对比",
              href: "/components/data-display/diff",
            },
            {
              title: "Kbd键盘",
              href: "/components/data-display/kbd",
            },
            {
              title: "List",
              href: "/components/data-display/list",
            },
            {
              title: "新增",
              href: "/components/data-display/new-item",
            },
            {
              title: "Stat统计展示",
              href: "/components/data-display/stat",
            },
            {
              title: "Status",
              href: "/components/data-display/status",
            },
            {
              title: "Table表格",
              href: "/components/data-display/table",
            },
            {
              title: "Timeline时间轴",
              href: "/components/data-display/timeline",
            },
          ],
        },
      ],
    },
    {
      title: "导航",
      icon: "navigation",
      Children: [
        {
          title: "Breadcrumbs面包屑导航",
          href: "/navigation/breadcrumbs",
        },
        {
          title: "Dock",
          href: "/navigation/dock",
        },
        {
          title: "Link链接",
          href: "/navigation/link",
        },
        {
          title: "Menu菜单",
          href: "/navigation/menu",
        },
        {
          title: "Navbar导航栏",
          href: "/navigation/navbar",
        },
        {
          title: "Pagination分页",
          href: "/navigation/pagination",
        },
        {
          title: "Steps步骤",
          href: "/navigation/steps",
        },
        {
          title: "Tab选项卡",
          href: "/navigation/tab",
        },
      ],
    },
    {
      title: "反馈",
      icon: "feedback",
      Children: [
        {
          title: "Alert警告",
          href: "/feedback/alert",
        },
      ],
    },
  ],
};

export default siteConfig;
