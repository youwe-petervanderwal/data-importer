/**
 * Pimcore
 *
 * This source file is available under two different licenses:
 * - GNU General Public License version 3 (GPLv3)
 * - Pimcore Commercial License (PCL)
 * Full copyright and license information is available in
 * LICENSE.md which is distributed with this source code.
 *
 *  @copyright  Copyright (c) Pimcore GmbH (http://www.pimcore.org)
 *  @license    http://www.pimcore.org/license     GPLv3 and PCL
 */

pimcore.registerNS("pimcore.plugin.pimcoreDataImporterBundle.configuration.components.mapping.operator.explode");
pimcore.plugin.pimcoreDataImporterBundle.configuration.components.mapping.operator.explode = Class.create(pimcore.plugin.pimcoreDataImporterBundle.configuration.components.mapping.abstractOperator, {

    type: 'explode',

    getFormItems: function() {
        return [
            {
                xtype: 'textfield',
                fieldLabel: t('plugin_pimcore_datahub_data_importer_configpanel_transformation_pipeline_delimiter'),
                disabled: this.disableForm,
                value: this.data.settings ? this.data.settings.delimiter : ' ',
                listeners: {
                    change: this.inputChangePreviewUpdate.bind(this)
                },
                name: 'settings.delimiter'
            },

            {
                xtype: 'checkbox',
                fieldLabel: t('plugin_pimcore_datahub_data_importer_configpanel_transformation_pipeline_keep_sub_arrays'),
                disabled: this.disableForm,
                value: this.data.settings ? this.data.settings.keepSubArrays : false,
                listeners: {
                    change: this.inputChangePreviewUpdate.bind(this)
                },
                name: 'settings.keepSubArrays'
            }
        ];
    }

});