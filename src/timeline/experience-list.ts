export const Experience = [
    {
        timePoint: 'Present',
        org: {
            icon: '/assets/icons/infinity.svg',
            name: ''
        },
        role: '',
        description: []
    },
    {
        timePoint: 'November, 2022',
        org: {
            icon: '/assets/icons/biz2credit.svg',
            name: 'Biz2Credit Infoservices Private Limited'
        },
        role: 'Software Engineer',
        description: [
            'The application automates and logs several workflows associated with loan recoveries. It uses the MongoDB, Express.JS, Angular 8 and NodeJS stack hosted on AWS.',
            'Optimized reports thus reducing turnaround time of an average sized report (~50,000 rows) to around a minute from previous ETA of 8 - 10 minutes and extended data size limit of the reports by using streams, thus resolving a key complaint from the client.',
            'Implemented a framework to simplify the development of new data reports which reduced the development time to one or two days from an average of five days with support for asynchronicity.',
            'Contributed to the new design and implementation of data upload, using AWS Lambda to concurrently process batches of data. It pushed the limit to 5,00,000 records per user at once from 1,00,000 records.',
        ]
    },
    {
        timePoint: 'December, 2020',
        org: {
            icon: '/assets/icons/ttn.svg',
            name: 'To The New Private Limited'
        },
        role: 'Software Engineer',
        description: [
            'Led a team of 4 developers to maintain the codebase and extend functionalities of NodeJS services and user interface of a tax automation and insights project for a BIG4 client.',
            'Designed a microservice to handle large data exports with background processing to support up to 10 million records in Excel format.',
            'Planned and led the development of support for additional file formats (PDF and CSV) for the aforementioned service.',
            'Planned integration of RabbitMQ in all NodeJS services to prevent loss of requests in case of disruptions.',
            'Implemented proof of concepts involving AWS OpenSearch and AWS ElastiCache which were later put in the pipeline to be integrated into the application.',
            'For another UK based client I was solely responsible for moving a legacy javascript service to typescript with modern patterns and practices in a recruitment interview scheduling and automation application.',
            'We planned and integrated the service with the serverless framework to seamlessly run the application as AWS Lambda.',
            'Implemented an automated pipeline library to move AWS Lex chatbot configurations to higher environments without manual intervention in the same project.',
            'Contributed to integration with AWS SNS to provide real-time push notifications to individual interviewers and panels.',
        ]
    },
    {
        timePoint: 'February, 2022',
        org: {
            icon: '/assets/icons/ttn.svg',
            name: 'To The New Private Limited'
        },
        role: 'Software Engineer Trainee',
        description: [
            'Learned professional web development in MongoDB, ExpressJs, Angular, and NodeJS stack.',
            'I created a dashboard to track COVID-19 cases worldwide using data from provided public APIs.',
            'Developed a basic social networking website, and translated requirements into concrete stories on JIRA with time estimates.',
        ]
    }
];