import { IModule } from 'angular';

// @ts-ignore
import { EnhancedTableVisController } from './enhanced-table-vis-controller.js';
// @ts-ignore
import { OsdEnhancedAggTable } from './agg_table/agg_table';
// @ts-ignore
import { OsdEnhancedAggTableGroup } from './agg_table/agg_table_group';
// @ts-ignore
import { OsdEnhancedRows } from './paginated_table/rows';
// @ts-ignore
import { EnhancedPaginatedTable } from './paginated_table/paginated_table';

/** @internal */
export const initTableVisLegacyModule = (angularIns: IModule): void => {
  angularIns
    .controller('EnhancedTableVisController', EnhancedTableVisController)
    .directive('osdEnhancedAggTable', OsdEnhancedAggTable)
    .directive('osdEnhancedAggTableGroup', OsdEnhancedAggTableGroup)
    .directive('osdEnhancedRows', OsdEnhancedRows)
    .directive('enhancedPaginatedTable', EnhancedPaginatedTable);
};
