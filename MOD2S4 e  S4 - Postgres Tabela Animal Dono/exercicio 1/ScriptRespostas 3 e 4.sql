-- Respostas 3 e 4:

select a.nome 
from "Animal" a
inner join "Dono" d on a.coddono = d.coddono
where d.bairro = 'vila nova';

select COUNT(a) as qtd_animais, d.coddono, d.nome, d.bairro
from "Animal" a
right join "Dono" d on a.coddono = d.coddono
GROUP BY d.coddono
ORDER BY qtd_animais desc;
