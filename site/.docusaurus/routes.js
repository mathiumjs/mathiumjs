
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','fdd'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','728'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','798'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','08d'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','3a8'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','917'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','c2b'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','c12'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','084'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','cb0'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','f69'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','8fd'),
  exact: true,
},
{
  path: '/docs/circcalc',
  component: ComponentCreator('/docs/circcalc','7f2'),
  exact: true,
},
{
  path: '/docs/cosine',
  component: ComponentCreator('/docs/cosine','40e'),
  exact: true,
},
{
  path: '/docs/data',
  component: ComponentCreator('/docs/data','30e'),
  exact: true,
},
{
  path: '/docs/degtorad',
  component: ComponentCreator('/docs/degtorad','d31'),
  exact: true,
},
{
  path: '/docs/diffofsquares',
  component: ComponentCreator('/docs/diffofsquares','93d'),
  exact: true,
},
{
  path: '/docs/discord-server',
  component: ComponentCreator('/docs/discord-server','0cc'),
  exact: true,
},
{
  path: '/docs/getting-started',
  component: ComponentCreator('/docs/getting-started','c55'),
  exact: true,
},
{
  path: '/docs/github-md',
  component: ComponentCreator('/docs/github-md','110'),
  exact: true,
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx','955'),
  exact: true,
},
{
  path: '/docs/number-exponent',
  component: ComponentCreator('/docs/number-exponent','5a0'),
  exact: true,
},
{
  path: '/docs/perfsquare',
  component: ComponentCreator('/docs/perfsquare','c70'),
  exact: true,
},
{
  path: '/docs/radtodeg',
  component: ComponentCreator('/docs/radtodeg','d38'),
  exact: true,
},
{
  path: '/docs/sine',
  component: ComponentCreator('/docs/sine','f40'),
  exact: true,
},
{
  path: '/docs/tangent',
  component: ComponentCreator('/docs/tangent','376'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
