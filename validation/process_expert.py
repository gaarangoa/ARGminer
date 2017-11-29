x = [i.split() for i in open('data.txt')]

d = {}
for i in x:
    try:
        d[ (i[0],i[1], i[2]) ] += 1
    except:
        d[ (i[0],i[1], i[2]) ] = 1

for i in d:
    print str(i[0])+"\t"+str(i[1])+":"+str(i[2])+"\t"+str(d[i])



import numpy as np

for i in range(10000):
    x = set(np.random.random_integers(0,180000,300))
    y = set(np.random.random_integers(0,180000,600))
    z = set(np.random.random_integers(0,180000,6000))
    u = x & y
    v = u & z

