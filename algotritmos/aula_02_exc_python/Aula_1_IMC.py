print("Olá!")
name=input("Digite seu nome:\n")
peso=float(input("Digite seu peso:\n"))
altura = float(input("Digite sua altura:\n"))
imc=peso/(altura*altura)
print(f'{name} seu IMC é {imc}')