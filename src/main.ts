// For more information, see https://crawlee.dev/
import { PlaywrightCrawler } from 'crawlee';

import { router } from './routes';
import { smzdmHaitaoRouterUrl } from './websites/smzdm-haitao/interface';

const startUrls = [smzdmHaitaoRouterUrl];

const crawler = new PlaywrightCrawler({
  // proxyConfiguration: new ProxyConfiguration({ proxyUrls: ['...'] }),
  requestHandler: router,
  // Comment this option to scrape the full website.
  maxRequestsPerCrawl: 20,
  persistCookiesPerSession: true,
  // headless: false,
});

crawler.run(startUrls).catch(e => {
  console.log(e);
});
