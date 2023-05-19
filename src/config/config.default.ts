import type { Config } from '@yunflyjs/yunfly';
import type { ApmConfig } from '../types';

/**
 * 包内置默认配置项
 *
 * @export
 * @param {KoaApp} app
 * @returns
 */
export default function config(): Config {
  const config: Config & { apm?: ApmConfig } = {};

  // 插件配置
  config.apm = {
    active: true,
  };

  return config;
}
