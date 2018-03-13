function Job(parameters) {
    this.title = parameters.title;
    this.startDate = parameters.startDate;
    this.description = parameters.description;
    this.stack = parameters.stack;
    this.numberApplied = parameters.numberApplied;
    this.salary = parameters.salary;
    this.postDate = parameters.postDate;
    this.applicantList = parameters.applicantList;
}


let jobs = [
    new Job({
        title: 'Software Developer',
        startDate: new Date(),
        description: '2-5 years’ experience in developing healthcare software applications in C#, Java, .Net, C++, HTML5',
        stack: {
            backend: ['Node', 'Express', 'SQL'],
            frontend: ['Vue', 'HTML', 'Sass', 'Bootstrap', 'Javascript'],
        },
        numberApplied: 10,
        salary: 200000,
        postDate: new Date(),
        applicantList: [],
    }),
    new Job({
        title: 'Full Stack Developer',
        startDate: new Date(),
        description: 'Experience using, or familiarity with the MEAN Stack: MongoDB, Express, AngularJS and Node.JS',
        stack: {
            backend: ['Node', 'Express', 'SQL'],
            frontend: ['Vue', 'HTML', 'Sass', 'Bootstrap', 'Javascript'],
        },
        numberApplied: 5,
        salary: 200000,
        postDate: new Date(),
        applicantList: [],
    }),
    new Job({
        title: 'Front End Developer',
        startDate: new Date(),
        description: 'Prior hands-on experience with JavaScript and JavaScript frameworks, such as VueJS and React;',
        stack: {
            backend: ['Node', 'Express', 'SQL'],
            frontend: ['Vue', 'HTML', 'Sass', 'Bootstrap', 'Javascript'],
        },
        numberApplied: 15,
        salary: 200000,
        postDate: new Date(),
        applicantList: [],
    })
];

let JobListComponent = Vue.component('job-list', {
    template: `
      <div>
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" v-for="job in jobs">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{job.title}}</h5>
              <small>{{job.postDate}}</small>
            </div>
            <p class="mb-1">{{job.description}}</p>
            <div class="d-flex justify-content-between">
              <small>Salary {{job.salary}}</small>
              <span class="badge badge-primary badge-pill">{{job.numberApplied}}</span>
            </div>
          </a>
        </div>
        <button type="button" class="btn btn-primary float-right">New Job</button>
      </div>
    `,
    data: function() {
        return {
            jobs: jobs
        };
    }
});

let CompanyProfileComponent = Vue.component('company-profile', {
    template: `
    <div>
      <h2>Company Profile</h2>
      <p>In construction</p>
    </div>
  `,
    data: function() {
        return {};
    }
});

let jobComponent = Vue.component('lc-job', {
    // options
    props: ['joby'],

    template: `
  	<h3>jo</h3>
  `,
    data: function() {
        return {

        };
    }
})

let ApplicantListComponent = Vue.component('lc-applicant-list', {
    template: `
  <div>
    <h1>Applicant List</h1>
    <ul>
      <li v-for="app in applicants">
        {{app}}
      </li>
    </ul>
  </div>
`,
    data: function() {
        return {
            applicants: [
                "Jen",
                "Mayank",
                "Mayur",
                "Arsh",
                "Vishnu",
                "Kevin",
                "Denis"
            ],
        };
    },
    methods: {

    },
});

const routes = [
    { path: '/jobs', component: JobListComponent },
    { path: '/applicants', component: ApplicantListComponent },
    { path: '/company', component: CompanyProfileComponent }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    components: {
        'lc-job': jobComponent,
        'lc-applicant-list': ApplicantListComponent,
    },
    data: {
        message: 'Hello Vue.js!',
        currentPage: 'job-list',
        currentJob: null,
        jobList: jobs,
    },
    methods: {
        setPage: function(page) {
            console.log(page);

            this.currentPage = page;
        },
        selectJob: function(job) {
            this.currentJob = job;
            this.setPage('job-details');
        }
    },
    router
}).$mount('#app');