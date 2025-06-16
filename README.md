# G-Scores - College Entrance Exam Score Lookup System

## Live Demo

-   Backend: [https://gscores.ddns.net/](https://gscores.ddns.net/)
-   Api Docs: Backend: [https://gscores.ddns.net/api-docs](https://gscores.ddns.net/api-docs)
-   Frontend: [https://g-scores-gamma.vercel.app/](https://g-scores-gamma.vercel.app/)

## Technologies Used

-   Backend: Ruby On Rails
-   Frontend: ReactJS
-   Testing && API Document: Swagger
-   Architecture: REST API

## Deployment

-   Backend: Digital Ocean with NoIP for HTTPS domain
-   Frontend: Vercel

## Installation Guide

After cloning the project, run:

```bash
cd G-Scores
docker-compose up -d
```

Please wait 20-25 minutes for the CSV data import to complete.
Monitor progress with:

```bash
docker-compose logs -f <service_name>

```

## Features

-   Candidate score lookup by registration number
-   Statistical analysis with stacked bar charts
-   Top 10 highest-scoring candidates in Group A
-   Responsive design
-   Linux deployment
