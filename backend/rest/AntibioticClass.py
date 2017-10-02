from rest.MetadataInterface.antibioticTypeClass import Type
from rest.MetadataInterface.antibioticSubtypeClass import Subtype
from rest.MetadataInterface.antibioticCuration import Curate



class Antibiotic():
    def __init__(self, db):
        self.type = Type(db);
        self.subtype = Subtype(db);
        self.curate = Curate(db);
        self.about=""

    def ListARGType(self):
        return self.type.ListARGTypes()

    def ListARGSubtype(self):
        return self.subtype.ListARGSubtypes()

    def insertCuration(self, data):
        try:
            # print(data)
            insert = self.curate.insert(data)
            print(insert)
            return {"status":True}
        except Exception as inst:
            print(str(inst))
            return {"status":False}
