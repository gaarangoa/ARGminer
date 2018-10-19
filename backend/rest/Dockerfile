FROM python
RUN pip install flask
RUN pip install pymongo
RUN pip install flask_cors
RUN pip install requests
RUN pip install numpy
RUN pip install networkx
RUN pip install sphinx
RUN pip install sphinxcontrib-httpdomain
RUN pip install pandas

RUN pip install git+https://github.com/facebookresearch/fastText.git

EXPOSE 5000

ENTRYPOINT ["python", "/src/rest/API.py"]