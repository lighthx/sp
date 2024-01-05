import { createPlaywrightRouter } from 'crawlee';
import {
  smzdmHaitaoDetailHandler,
  smzdmHaitaoListHandler,
} from './websites/smzdm-haitao/handler';
import { SMZDM_HAITAO_LABEL } from './websites/smzdm-haitao/interface';

export const router = createPlaywrightRouter();

router.addHandler(SMZDM_HAITAO_LABEL.DETAIL, smzdmHaitaoDetailHandler);
router.addHandler(SMZDM_HAITAO_LABEL.LIST, smzdmHaitaoListHandler);
