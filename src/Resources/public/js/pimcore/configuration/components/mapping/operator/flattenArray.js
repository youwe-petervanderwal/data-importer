/**
 * Pimcore
 *
 * This source file is available under following license:
 * - Pimcore Enterprise License (PEL)
 *
 *  @copyright  Copyright (c) Pimcore GmbH (http://www.pimcore.org)
 *  @license    http://www.pimcore.org/license     PEL
 */

pimcore.registerNS('pimcore.plugin.pimcoreDataHubBatchImportBundle.configuration.components.mapping.operator.flattenArray');
pimcore.plugin.pimcoreDataHubBatchImportBundle.configuration.components.mapping.operator.flattenArray = Class.create(pimcore.plugin.pimcoreDataHubBatchImportBundle.configuration.components.mapping.abstractOperator, {

    type: 'flattenArray'

});