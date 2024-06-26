Feature: Login na pagina da ultima
    Como aluno do curso 
    Quero realizar o Login
    Para acessar o material 

  Scenario: Acessar a pagina de Login
    Given o aluno esteja na pagina inicial da ultima
    When clicar em Login
    Then o sistema devera exibir os campos para logar
