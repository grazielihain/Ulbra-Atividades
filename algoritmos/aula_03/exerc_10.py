vend= float(input("Qual o código de vendedor?\n"))
sal= float(int(input("Qual o salário base do vendedor {vend}?\n")))
vei= float(int(input("Qual o número de veículos vendidos no mês?\n")))
com= float(int(input("Qual o valor da comissão?\n"))) 
salFim= sal+(vei*com)
print(f"Neste mês o salário do funcionário {vend} será de {salFim}.")