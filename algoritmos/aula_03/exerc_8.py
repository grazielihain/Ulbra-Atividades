d= float(input("Qual o diâmetro do tanque?\n"))
r=(d/2)
h=float(input("Qual a altura do tanque?\n"))
ab= 3.16 *(r * r) 
ah= 2 * 3.16 * r * h
at= (ab+ah)
lata= (at/15)
custo= lata*150.00
print(f"Para pintar {at} metros quadrados serão necessários {lata} latas de tinta que darão um custo total de {custo}. ")