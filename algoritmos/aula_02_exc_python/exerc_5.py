print ("Ola!")
cod_fun=float(int(input("Qual seu código de funcionário?\n")))
hr= float(int(input("Qual o número de horas trabalhadas no mês?\n")))
val=float(int(input("Que valor em reais você recebe por hora?\n")))
sal= (val * hr)
print(f"O salário do funcionário {cod_fun} é de R$ {sal}.")