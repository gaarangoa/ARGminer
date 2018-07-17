class Plasmid():
    def __init__(self, database):
        self.info = ""
        self.database = database
        self.table = 'plasmids'

    def getById(self, gene_id):
        return self.database.get_by_id(self.table, gene_id)
