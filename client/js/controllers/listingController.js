angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });
    $scope.detailedInfo = undefined;

    $scope.addListing = function(list) {
	  /**TODO 
	  *Save the article using the Listings factory. If the object is successfully 
	  saved redirect back to the list page. Otherwise, display the error
	 */
   /*    var list = {
        "code": newListing.code, 
        "name": newListing.name, 
        "address": newListing.address
       }; */

      Listings.create(list).then(function(response) {
     // $scope.listings = response.data;
      window.location=window.location;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });


    };

    $scope.deleteListing = function(id) {
	   /**TODO
        Delete the article using the Listings factory. If the removal is successful, 
		navigate back to 'listing.list'. Otherwise, display the error. 
       */ 
      Listings.delete(id).then(function(response)
      {
        $scope.listings = response.data;
          
          Listings.getAll().then(function(response) {
            $scope.listings = response.data;
          }, function(error) {
            console.log('Unable to retrieve listings:', error);
          });}, function(error) {
        console.log('Unable to retrieve listings:', error);
      });


    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);