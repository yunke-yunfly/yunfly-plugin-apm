import type { ApolloConfig, Config, KoaApp } from '@yunflyjs/yunfly';

// 定义当前插件所需参数
export type AnyOptionConfig = Record<string, any>;

export interface PluginOptions {
  koaApp: KoaApp;
  apolloConfig: ApolloConfig;
  pluginConfig: AnyOptionConfig;
  config: Config;
}

export interface AgentConfigOptions {
  abortedErrorThreshold?: string; // Also support `number`, but as we're removing this functionality soon, there's no need to advertise it
  active?: boolean;
  addPatch?: any;
  apiKey?: string;
  apiRequestSize?: string; // Also support `number`, but as we're removing this functionality soon, there's no need to advertise it
  apiRequestTime?: string; // Also support `number`, but as we're removing this functionality soon, there's no need to advertise it
  asyncHooks?: boolean;
  breakdownMetrics?: boolean;
  captureBody?: any;
  captureErrorLogStackTraces?: any;
  captureExceptions?: boolean;
  captureHeaders?: boolean;
  captureSpanStackTraces?: boolean;
  cloudProvider?: string;
  configFile?: string;
  containerId?: string;
  disableInstrumentations?: string | string[];
  disableSend?: boolean;
  environment?: string;
  errorMessageMaxLength?: string; // DEPRECATED: use `longFieldMaxLength`.
  errorOnAbortedRequests?: boolean;
  filterHttpHeaders?: boolean;
  frameworkName?: string;
  frameworkVersion?: string;
  globalLabels?: any;
  hostname?: string;
  ignoreMessageQueues?: string[];
  ignoreUrls?: (string | RegExp)[];
  ignoreUserAgents?: (string | RegExp)[];
  instrument?: boolean;
  instrumentIncomingHTTPRequests?: boolean;
  kubernetesNamespace?: string;
  kubernetesNodeName?: string;
  kubernetesPodName?: string;
  kubernetesPodUID?: string;
  logLevel?: any;
  logUncaughtExceptions?: boolean;
  logger?: any; // Notably this Logger interface matches the Pino Logger.
  longFieldMaxLength?: number;
  maxQueueSize?: number;
  metricsInterval?: string; // Also support `number`, but as we're removing this functionality soon, there's no need to advertise it
  metricsLimit?: number;
  payloadLogFile?: string;
  centralConfig?: boolean;
  sanitizeFieldNames?: string[];
  secretToken?: string;
  serverCaCertFile?: string;
  serverTimeout?: string; // Also support `number`, but as we're removing this functionality soon, there's no need to advertise it
  serverUrl?: string;
  serviceName?: string;
  serviceNodeName?: string;
  serviceVersion?: string;
  sourceLinesErrorAppFrames?: number;
  sourceLinesErrorLibraryFrames?: number;
  sourceLinesSpanAppFrames?: number;
  sourceLinesSpanLibraryFrames?: number;
  spanFramesMinDuration?: string;
  stackTraceLimit?: number;
  transactionIgnoreUrls?: string[];
  transactionMaxSpans?: number;
  transactionSampleRate?: number;
  useElasticTraceparentHeader?: boolean;
  usePathAsTransactionName?: boolean;
  verifyServerCert?: boolean;
  customTranslateKeys?: string[];

  isOfficialApm?: boolean;
  showLog?: boolean;
  isReportQueue?: boolean;
  isChildProcess?: boolean;
}

export interface ApmOption {
  pluginConfig?: AgentConfigOptions;
  config: Config;
}

export type ApmConfig = AgentConfigOptions;

