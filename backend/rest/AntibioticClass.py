from rest.MetadataInterface.antibioticTypeClass import Type
from rest.MetadataInterface.antibioticCuration import Curate

type = Type();
curate = Curate();

class Antibiotic():
    def __init__(self):
        self.about=""

    def ListARGType(self):
        return type.ListARGTypes()

    def ListARGSubtype(self):
        return 0

    def insertCuration(self, data):
        try:
            insert = curate.insert(data)
            return {"status":True}
        except:
            return {"status":False}
