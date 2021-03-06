# ARGminer

ARGminer is a web platform for the manual inspection of antibiotic resistance genes. It is derived from the development of the deepARG-DB. ARGminer uses crowdsourcing as a way to curate new ARGs based on the information collected from repositories such as NCBI, UNIPROT, CARD, ARDB, PUBMED among others.

# Availability
ARGminer is hosted at: https://bench.cs.vt.edu/argminer/

# Resources used in ARGminer

## Antibiotic Resistance Databases

## Mobile Genetic Elements

## Pathogens and plasmids

# About
For details, please visit ARGminer blog for news and usage: https://bench.cs.vt.edu/argminer/#/forum

# Licence
ARGminer source code is open source and licenced under the BSD 2-Clause Licence. However, resources used in ARGminer such as databases may have commercial restrictions. Please take a look at each one of the following resources for details about comercial usage:

* CARD
* SARGs
* UniProt
* ACLAME
* PATRIC
* MEGARES
* ARG-ANNOT
* Resfinder
* ARDB
* NCBI


# Contact
If you have any question regarding ARGminer, please post a question, comment, issue in our ARGminer blog: https://bench.cs.vt.edu/argminer/#/forum

# References
If you use ARGminer in your research, please cite the following article:

Arango GA, Guron GK, Garner E, Riquelme MV, Heath L, Pruden A, Vikesland P, Zhang L. ARG-miner: A web platform for crowdsourcing-based curation of antibiotic resistance genes. bioRxiv. 2018 Jan 1:274282.


# Installation
make sure to add the corresponding /email_service/credentials.py and backend/rest/config.py variables

<!-- ## Installation setup -->

<!-- To get argpedia running in a development environment just do this into your server:

    git clone https://github.com/gaarangoa/ARG-inspect.git
    cd ARG-inspect/docker/
    docker-compose build
    docker-compose -p ARGpedia up -d

Then, you will get a copy of the full project in your system. To enable the system to the web you need to configure the server environment. For apache, just add the next lines to the /etc/apache2/sites-enabled/000-default.conf  file:

    ProxyPass /argpedia http://localhost:8081
    ProxyPass /argpedia http://localhost:4431

To compile the angular project just type:

    ng build --base-href /argminer/ --env=prod

# move database from local to production
make a copy of the database. Go inside the container and do this!

        mongodump --host localhost --port 27897 --db argpedia --username xxx --password xxx
        mongorestore --host localhost --port 27897 /data/db/dump/ -->

