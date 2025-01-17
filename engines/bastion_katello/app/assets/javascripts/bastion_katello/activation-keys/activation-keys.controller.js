/**
 * @ngdoc object
 * @name  Bastion.activation-keys.controller:ActivationKeysController
 *
 * @requires $scope
 * @requires $location
 * @requires translate
 * @requires Nutupane
 * @requires ActivationKey
 * @requires CurrentOrganization
 * @requires experimentalLabsSetting
 *
 * @description
 *   Provides the functionality specific to activation keys for use with the Nutupane UI pattern.
 *   Defines the columns to display and the transform function for how to generate each row
 *   within the table.
 */
angular.module('Bastion.activation-keys').controller('ActivationKeysController',
    ['$scope', '$location', 'translate', 'Nutupane', 'ActivationKey', 'CurrentOrganization', 'experimentalLabsSetting',
    function ($scope, $location, translate, Nutupane, ActivationKey, CurrentOrganization, experimentalLabsSetting) {

        var params = {
            'organization_id': CurrentOrganization,
            'search': $location.search().search || "",
            'sort_by': 'name',
            'sort_order': 'ASC',
            'paged': true
        };

        var nutupane = new Nutupane(ActivationKey, params);
        $scope.controllerName = 'katello_activation_keys';
        nutupane.primaryOnly = true;
        $scope.table = nutupane.table;
        $scope.experimentalLabsSetting = experimentalLabsSetting;
    }]
);
