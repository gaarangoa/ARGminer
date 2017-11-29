require(data.table)
require(irr)

x = data.table(read.table('class'))

y  = xtabs(V3~V1+V2, data=x)

y[,colSums(y)==3]

