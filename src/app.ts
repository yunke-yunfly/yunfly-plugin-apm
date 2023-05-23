import Apm, { getApm } from './core';
import type { PluginOptions } from './types';

/**
 * yunfly plugin
 * app.ts 是常规插件的入口文件
 * @export
 * @param {PluginOptions} {
 *   config,
 *   pluginConfig,
 * }
 * @returns {void}
 */
export default function yunflyPlugin({
  config,
}: PluginOptions): Promise<any> {
  return Apm({ config });
}

export {
  getApm,
};
