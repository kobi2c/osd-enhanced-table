import './index.scss';
import { PluginInitializerContext } from 'opensearch_dashboards/public';
import { EnhancedTablePlugin as Plugin } from './plugin';

export function plugin(initializerContext: PluginInitializerContext) {
  return new Plugin(initializerContext);
}
