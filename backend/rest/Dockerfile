FROM python
RUN pip install flask
RUN pip install pymongo
RUN pip install flask_cors
RUN pip install requests
RUN pip install numpy
RUN pip install networkx

EXPOSE 5000

ENTRYPOINT ["python", "/src/API.py"]