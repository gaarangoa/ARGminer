# ARGPEDIA

ARGpedia is a web platform for the manual inspection of antibiotic resistance genes. It is derived from the development of the deepARG-DB v1.1.1 (reference here). It has a crowdsourcing component that allows to curate new ARGs based on the information collected from repositories such as NCBI, UNIPROT, CARD, ARDB, PUBMED among others.


## Installation setup

To get argpedia running in a development environment just do this into your server:

    git clone https://github.com/gaarangoa/ARG-inspect.git
    cd ARG-inspect/docke/
    docker-compose

Then, you will get a copy of the full project in your system. To enable the system to the web you need to configure the server environment. For apache, just add the next lines to the /etc/apache2/sites-enabled/000-default.conf  file:

    ProxyPass /argpedia http://localhost:8081
    ProxyPass /argpedia http://localhost:4431


