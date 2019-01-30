class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, asd " + this.greeting;
  }
}

let greeter = new Greeter("from Typescript");

type Framework = {
  name: string,
  description: string,
  url: string
}

let jsFrameworks: Framework[] = [
  {
    name: 'Angular',
    description: 'Officia excepteur do dolor id ullamco magna qui ullamco.',
    url: 'https://angular.io'
  },
  {
    name: 'Vue.js',
    description: 'Ex do exercitation voluptate nisi Lorem non officia reprehenderit incididunt irure eiusmod.',
    url: 'angular.io'
  },
  {
    name: 'React',
    description: 'Nostrud Lorem excepteur tempor Lorem non ad occaecat commodo ut duis commodo consectetur proident.',
    url: 'angular.io'
  },
  {
    name: 'Ember',
    description: 'Cupidatat et id aliqua laboris esse irure eu incididunt veniam ea labore aute adipisicing.',
    url: 'angular.io'
  }
];

const btnsFunction = (framework: Framework) => {
  const link: HTMLAnchorElement = document.createElement('a');
  link.className = 'list-group-item list-group-item-action';
  link.href = 'javascript:void(0)';
  link.textContent = framework.name;
  link.onclick = () => {
    document.querySelector('.card-title').textContent = framework.name;
    document.querySelector('.card-text').textContent = framework.description;
    const frameworkSite: HTMLAnchorElement = document.querySelector('.card .btn.btn-primary');
    frameworkSite.target = '_blank';
    frameworkSite.href = framework.url;
    frameworkSite.textContent = `Go to ${framework.name} site`;
  }
  list.appendChild(link);
}

const list: HTMLElement = document.getElementById('list-tab');

jsFrameworks.forEach((framework) => {
  btnsFunction(framework);
});

const newBtn: HTMLInputElement = document.querySelector(".js-add");


newBtn.onclick = () => {
  let fwName: HTMLInputElement = document.querySelector(".js-new_fw");
  let descName: HTMLInputElement = document.querySelector(".js-new_desc");
  let fwURL: HTMLInputElement = document.querySelector(".js-new_url");
  
  if(fwName.value.length>0 && descName.value.length>0 && fwURL.value.length>0){
    let newFW = {
      name: fwName.value,
      description: descName.value,
      url: fwURL.value
    };

    jsFrameworks.push(newFW);
    console.log(jsFrameworks); // new object added to array
    
    btnsFunction(newFW);
  } else {
    alert("Please don't leave empty fields.");
  }

}



