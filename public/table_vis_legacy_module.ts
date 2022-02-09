import { IModule } from 'angular';

// @ts-ignore
import { EnhancedTableVisController } from './enhanced-table-vis-controller.js';
// @ts-ignore
import { KbnEnhancedAggTable } from './agg_table/agg_table';
// @ts-ignore
import { KbnEnhancedAggTableGroup } from './agg_table/agg_table_group';
// @ts-ignore
import { KbnEnhancedRows } from './paginated_table/rows';
// @ts-ignore
import { EnhancedPaginatedTable } from './paginated_table/paginated_table';

/** @internal */
export const initTableVisLegacyModule = (angularIns: IModule): void => {
  angularIns
    .controller('EnhancedTableVisController', EnhancedTableVisController)
    .directive('kbnEnhancedAggTable', KbnEnhancedAggTable)
    .directive('kbnEnhancedAggTableGroup', KbnEnhancedAggTableGroup)
    .directive('kbnEnhancedRows', KbnEnhancedRows)
    .directive('enhancedPaginatedTable', EnhancedPaginatedTable);
};
