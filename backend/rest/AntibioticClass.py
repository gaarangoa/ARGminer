from rest.MetadataInterface.antibioticTypeClass import Type

type = Type();

class Antibiotic():
    def __init__(self):
        self.about=""


    def ListARGType(self):
        return type.ListARGTypes()

    def ListARGSubtype(self):
        return 0

