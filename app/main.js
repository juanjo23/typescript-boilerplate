var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, asd" + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("from Typescript");
var jsFrameworks = [
    {
        name: 'Angular',
        description: 'Officia excepteur do dolor id ullamco magna qui ullamco.',
        url: 'https://angular.io/'
    },
    {
        name: 'Vue.js',
        description: 'Ex do exercitation voluptate nisi Lorem non officia reprehenderit incididunt irure eiusmod.',
        url: 'https://vuejs.org/'
    },
    {
        name: 'React',
        description: 'Nostrud Lorem excepteur tempor Lorem non ad occaecat commodo ut duis commodo consectetur proident.',
        url: 'https://reactjs.org/'
    },
    {
        name: 'Ember',
        description: 'Cupidatat et id aliqua laboris esse irure eu incididunt veniam ea labore aute adipisicing.',
        url: 'https://www.emberjs.com/'
    }
];
function save() {
    var newName = document.getElementById('name');
    var newDescription = document.getElementById('description');
    var newUrl = document.getElementById('url');
    var newFramework = {
        name: newName.value,
        description: newDescription.value,
        url: newUrl.value
    };
    jsFrameworks.push(newFramework);
    newName.appendChild(newName);
    newDescription.appendChild(newDescription);
    newUrl.appendChild(newUrl);
    console.log(newName.value);
    console.log(newDescription.value);
    console.log(newUrl.value);
}
;
var list = document.getElementById('list-tab');
jsFrameworks.forEach(function (framework) {
    var link = document.createElement('a');
    link.className = 'list-group-item list-group-item-action';
    link.href = 'javascript:void(0)';
    link.textContent = framework.name;
    link.onclick = function () {
        document.querySelector('.card-title').textContent = framework.name;
        document.querySelector('.card-text').textContent = framework.description;
        var frameworkSite = document.querySelector('.card .btn.btn-primary');
        frameworkSite.target = '_blank';
        frameworkSite.href = framework.url;
        frameworkSite.textContent = "Go to " + framework.name + " site";
    };
    list.appendChild(link);
});
