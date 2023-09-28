module.exports = {
    title: '我是未来星的博客',
    description: '生活有望穿秋水的等待，也有意想不到的惊喜',
    theme: 'reco',
    locales: {
        "/": {
            lang: "zh-CN",
        },
    },
    themeConfig: {
        type: "blog",
        subSidebar: 'auto',
        logo: '/weilaixing.jpg',
        authorAvatar: '/weilaixing.jpg',
        author: "未来星很ok",
        nav: [
            { text: '首页', link: '/' },
            {
                text: '我是未来星的博客',
                items: [
                    { text: '掘金', link: 'https://juejin.cn/user/2859163051898429' },
                    { text: 'Github', link: 'https://github.com/renfu888' },
                ]
            },
        ],
        // 博客配置
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: "博客", // 默认文案 “分类”
            },
            tag: {
                location: 4, // 在导航栏菜单中所占的位置，默认4
                text: "Tag", // 默认文案 “标签”
            },
        },
        // sidebar: [
        //     {
        //         title: "欢迎学习",
        //         collapsable: false, // 是否折叠
        //         path: "/",
        //         children: [
        //             {
        //                 title: "博客简介",
        //                 path: '/'
        //             }
        //         ]
        //     },
        //     {
        //         title: "基础篇",
        //         path: "/blogs/1",
        //         collapsable: true,
        //         children: [
        //             { title: "第一篇", path: "/blogs/1" },
        //             { title: "第二篇", path: "/blogs/2" },
        //         ]
        //     }
        // ]
    },
    plugins: [
        [
            "sakura",
            {
                num: 20, // 默认数量
                show: true, //显示
                zIndex: -1, // 层级
                img: {
                    replace: false // 系统默认图  换图 需要填写httpUrl地址
                }
            }
        ],
        [
            "cursor-effects",
            {
                size: 4, // size of the particle, default: 2
                shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
                zIndex: 999999999, // z-index property of the canvas, default: 999999999
            },
        ],
        [
            "@vuepress-reco/vuepress-plugin-bgm-player",
            {
                audios: [
                    {
                        name: "送你一朵小红花",
                        alert: '赵英俊',
                        url: '/送你一朵小红花.mp3',
                        cover: '/送你一朵小红花.jpg',
                    },
                    {
                        name: "我的未来不是梦",
                        alert: '张雨生',
                        url: '/我的未来不是梦.mp3',
                        cover: '/我的未来不是梦.jpg',
                    },
                ],
                // 是否默认缩小
                autoShrink: true,
                // 缩小时缩为哪种模式
                shrinkMode: "float",
                // 悬浮窗样式
                floatStyle: { bottom: "20px", "z-index": "999999" },
            }
        ]
    ],
    base: '/blog/',
}
