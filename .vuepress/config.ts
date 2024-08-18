import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  base: '/English-level-up-tips/',
  title: 'English Level Up',
  description: 'English level up tips',
  head: [
    // ['link', { rel: 'icon', href: '/English-level-up-tips/images/clock.svg' }],
    [
      'script',
      {
        defer: '',
        src: 'https://cloud.umami.is/script.js',
        ['data-website-id']: '4f5b6184-aae6-41f8-aa7c-8d2062247c76',
      },
    ],
  ],
  bundler: viteBundler({
    viteOptions: {
      assetsInclude: ['**/*.JPG'],
    },
    // vite bundler options here
  }),
  theme: defaultTheme({
    sidebarDepth: 1,
    sidebar: [
      // SidebarItem
      {
        text: 'Phần I',
        link: '/part-1/',
        children: [
          {
            text: '1. Nhận thức',
            link: '/part-1/1-understanding.md',
          },
          {
            text: '2. Từ vựng',
            link: '/part-1/2-vocabulary.md',
          },
          {
            text: '3. Nghe',
            link: '/part-1/3-listening.md',
          },
          {
            text: '4. Đọc',
            link: '/part-1/4-reading.md',
          },
          {
            text: '5. Nói',
            link: '/part-1/5-speaking.md',
          },
        ],
      },
      {
        text: 'Phần II',
        link: '/part-2/',
        children: [
          {
            text: '6. Vô nghĩa',
            link: '/part-2/x-misc.md',
          },
        ],
      },
    ],
  }),
});
