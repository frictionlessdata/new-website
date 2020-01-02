// module.exports = {
//     themeConfig: {
//     nav: [
//         { text: 'Home', link: '/' },
//         { text: 'About', link: '/about/' },
//         { text: 'External', link: 'https://google.com' }
//     ],
//     sidebar: [
//       ['/', 'Introduction' ],
//       ['/', 'Design Philosophy' ],
//       ['/', 'Specifications']
//     ]
//   }
// }

// const base = process.env.GH ? '/vuepress/' : '/'
// module.exports = {
//     title: "Experiment",
//     description: "This is my theme experiment",
//     theme: "demo1"
// }

module.exports = {
    base: "/vuepress-exp/",
    themeConfig: {
    nav: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about/' },
        { text: 'Specs', link: '/specs/' },
        { text: 'Test', link: '/test/' },
        { text: 'External', link: 'https://google.com' }
    ],      
      sidebar: {
        '/specs/': [{
            title: 'Specifications',
            collapsable: true,
            children: [
            '',     /* /foo/ */
            'csvdialect',  /* /foo/one.html */
            'datapackage',   /* /foo/two.html */
            'datapackage_identifier',
            'datapackage_views',
            'dataressource',
            'fiscaldatapackage',
            'fiscaldatapackage2',
            'fiscaldatapackage3',
            'profiles',
            'security',
            'tableschema',
            'tabulardatapackage',
            'tabulardataressource'
        ]
    }],
        '/guide/': [
          '',      /* /bar/ */
          'three', /* /bar/three.html */
          'four'   /* /bar/four.html */
        ],
        '/test/mubtest/': [{
            title: 'Specifications',
            collapsable: true,
            children: [
            '',
            [ '/test/mubtest/mubfile', 'Mubfile'],
            [ '/test/mubtest/mubfile2', 'Mubfile2']
          ]
        }],
          '/test/subtest/': [
            '',
            [ '/test/subtest/subfile', 'Subfile'],
            [ '/test/subtest/subfile2', 'Subfile2']
          ],
          '/test/': [{
            title: 'Specifications',
            collapsable: true,
            children: [
            '',
            [ '/test/mubtest/', 'CSV Dialect'],
            [ '/test/subtest/', 'Data Package']
          ]
        }],
  
        // fallback
        '/': [
          '',        /* / */
        ]
      }
    }
  }
  