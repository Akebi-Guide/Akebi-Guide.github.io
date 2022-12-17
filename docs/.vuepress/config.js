module.exports = {
    theme: 'antdocs',
    head: [
        [
            'link',
            { rel: 'icon', href: 'logo_ico.png' }
        ]
    ],
    title: '-Guide-',
    description: 'A Easy Guide for Akebi',
    nextLinks: true,
    prevLinks: true,
    themeConfig: {
        sidebar: {
            '/guide/': [
                '',
                'guide',
                'gui',
                'teleports'
            ],
        },
        displayAllHeaders: true,
        logo: '/assets/img/akebigc.png',
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'Akebi-Guide/Akebi-Guide.github.io',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'main',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '编辑该界面',
        // 最后更新时间
        lastUpdated: 'Last Updated',
    }
}
// module.exports = {
// }