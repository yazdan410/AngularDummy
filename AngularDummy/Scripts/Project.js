var app = angular.module("myApp", []);
app.controller("myCtrl",
    function($scope, $http) {


        $scope.GetAllData = function() {
            $http({
                method: "get",
                url: "http://localhost:49720/Employee/Get_AllEmployee"
            }).then(function(response) {
                    $scope.employees = response.data;
                },
                function() {
                    alert("Error Occur");
                })
        };

        $scope.InsertData = function() {
            var Action = document.getElementById("btnSave").getAttribute("value");
            if (Action == "Submit") {
                $scope.Employe = {};  
                $scope.Employe.Name = $scope.Name;
                $scope.Employe.Salary = $scope.Salary;
                $scope.Employe.Gender = $scope.Gender;
                $http({
                    method: "post",
                    url: "http://localhost:49720/Employee/Insert_Employee",
                    datatype: "json",
                    data: JSON.stringify($scope.Employe)
                }).then(function(response) {
                    alert(response.data);
                    $scope.GetAllData();
                    $scope.Name = "";
                    $scope.Salary = "";
                    $scope.Gender = "";  
                })
            } else {
                $scope.Employe = {};
                $scope.Employe.Name = $scope.Name;
                $scope.Employe.Salary = $scope.Salary;
                $scope.Employe.Gender = $scope.Gender;
                $scope.Employe.Id = document.getElementById("EmpID_").value;
                $http({
                    method: "post",
                    url: "http://localhost:49720/Employee/Update_Employee",
                    datatype: "json",
                    data: JSON.stringify($scope.Employe)
                }).then(function (response) {
                    alert(response.data);
                    $scope.GetAllData();
                    $scope.Name = "";
                    $scope.Salary = "";
                    $scope.Gender = "";
                    document.getElementById("btnSave").setAttribute("value", "Submit");
                    document.getElementById("btnSave").style.backgroundColor = "cornflowerblue";
                    document.getElementById("spn").innerHTML = "Add New Employee";
                })
            }  
        };


        $scope.DeleteEmp = function (Emp) {

            $http({
                method: "post",
                url: "http://localhost:49720/Employee/Delete_Employee",
                datatype: "json",
                data: JSON.stringify(Emp)
            }).then(function(response) {
                alert(response.data);
                $scope.GetAllData();
            })
        };

        $scope.UpdateEmp = function (Emp) {
            document.getElementById("EmpID_").value = Emp.Id;
            $scope.Name = Emp.Name;
            $scope.Salary = Emp.Salary;
            $scope.Gender = Emp.Gender;
            document.getElementById("btnSave").setAttribute("value", "Update");
            document.getElementById("btnSave").style.backgroundColor = "Yellow";
            document.getElementById("spn").innerHTML = "Update Employee Information";
        }  

    });

