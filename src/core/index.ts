import type { ApmOption } from '../types';

// apm
let apm: any;

export function getApm(): any {
  return apm || {} as any;
}

/**
 * @export
 * @class Apm
 */
export default function apmService({ config }: ApmOption): any {
  const apmConfig = {
    active: config.apmActive,
    isChildProcess: config.cluster?.enable,
    ...config.apm,
    isCluster: config.cluster?.enable,
  };

  if (!apmConfig.active) {
    return;
  }

  // 用户自定义透传key字段
  const customTranslateKeys = config?.apm?.customTranslateKeys;
  if (customTranslateKeys && Array.isArray(customTranslateKeys)) {
    process.env.CUSTOM_TRANSLATE_KEYS = JSON.stringify(customTranslateKeys);
  }
  apm = require('elastic-apm-node').start(apmConfig);
}
