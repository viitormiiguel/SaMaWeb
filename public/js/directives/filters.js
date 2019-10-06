// Filters
app.filter('cpf', function(){
    return function(input){
        var str = input + '';
        if(str.length <= 11)
            str = str.replace(/\D/g, '');
            str = str.replace(/(\d{3})(\d)/, "$1.$2");
            str = str.replace(/(\d{3})(\d)/, "$1.$2");
            str = str.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        return str;
    };
});

app.filter('telefone', function(){
    return function (tel) {
        if (!tel) { return ''; }
        var value = tel.toString().trim().replace(/^\+/, '');
        if (value.match(/[^0-9]/)) {
            return tel;
        }
        var country, city, number;
        switch (value.length) {
            case 1:
            case 2:
            case 3:
                city = value;
                break;
            default:
                city = value.slice(0, 2);
                number = value.slice(2);
        }
        if(number){
            if(number.length>3){
                number = number.slice(0, 5) + '-' + number.slice(5,10);
            }
            else{
                number = number;
            }
            return ("(" + city + ") " + number).trim();
        }
        else{
            return "(" + city;
        }
    }
});

app.directive('compareTo', [function () {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };
            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
}])