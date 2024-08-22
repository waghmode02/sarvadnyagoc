import React from 'react';
import Sitemap from 'react-sitemap';

const routes = [
  { path: '/', priority: 0.8 },
  { path: '/portfolio', priority: 1.0 },
  { path: '/about', priority: 1.0 },
  { path: '/contact', priority: 1.0 },
  { path: '/group', priority: 1.0 },
  { path: '/admin', priority: 1.0 },
];

const SitemapGenerator = () => (
  <Sitemap
    routes={routes}
    url="https://www.sarvadnyagoc.com"
    filename="sitemap.xml"
  />
);

export default SitemapGenerator;
