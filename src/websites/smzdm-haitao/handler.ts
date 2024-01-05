import { HandleParameters } from '../../utils/crawlee-type';
import { SMZDM_HAITAO_LABEL } from './interface';

export const smzdmHaitaoListHandler: HandleParameters = async ({
  page,
  enqueueLinks,
  log,
}) => {
  await page.waitForSelector('#J_scroll_ul');
  const items = await page.$$('#J_scroll_ul > li > a');
  const urls: string[] = [];
  await Promise.all(
    items.map(async i => {
      const url = await i.getAttribute('href');
      if (url == null) {
        return;
      }
      urls.push(`https:${url}`);
    }),
  );
  log.info(JSON.stringify(urls));
  const res = await enqueueLinks({
    urls: ['https://m.smzdm.com/p/101295614'],
    label: SMZDM_HAITAO_LABEL.DETAIL,
  });
  console.log(res);
};

export const smzdmHaitaoDetailHandler: HandleParameters = async ({
  page,
  log,
  request,
}) => {
  log.debug(request.url);
  await page.waitForSelector('span.act_title');
  const title = (await page.locator('span.act_title').textContent()) ?? '';
  const prodescription = (
    (await page.locator('div.price-area > div > div.price').textContent()) ?? ''
  ).replace('$', '');
  const org_image =
    (await page
      .locator('#headerBanner > div > div.oneImg > div > img')
      .getAttribute('src')) ?? '';
  const categories = await Promise.all(
    (
      await page.$$('.crumbs a span')
    ).map(async v => (await v.textContent()) ?? ''),
  );
  const category = categories[categories.length - 2];
  const directUrl =
    (await page
      .locator('div.footer-wrap > div > div.go-btn > a')
      .getAttribute('href')) ?? '';
  const res = await page.goto(directUrl, { waitUntil: 'domcontentloaded' });
  console.log(res?.url());
  // const req:SaveRequest ={
  //     linktype:2,
  //     org_ishot:0,
  //     org_url:request.url,
  //     title,
  //     prodescription,
  //     org_image,
  //     collectsite:"smzdm_haitao",
  //     org_category:category
  // }
};
