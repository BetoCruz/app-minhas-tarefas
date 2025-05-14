import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
// import * as enums from '../../utils/enums/Tarefa'

import { RootReducer } from '../../store'

// const tarefas = [
//   {
//     titulo: 'Estudar TypeScript',
//     descricao: '',
//     prioridade: enums.Prioridade.IMPORTANTE,
//     status: enums.Status.PENDENTE
//   },
//   {
//     titulo: 'fazer exercícios',
//     descricao: '50 barras',
//     prioridade: enums.Prioridade.URGENTE,
//     status: enums.Status.CONCLUIDA
//   },
//   {
//     titulo: 'Ler livros',
//     descricao: '3 são os atuais',
//     prioridade: enums.Prioridade.NORMAL,
//     status: enums.Status.PENDENTE
//   },
//   {
//     titulo: 'Ler livros',
//     descricao: 'Testando hoje',
//     prioridade: enums.Prioridade.URGENTE,
//     status: enums.Status.CONCLUIDA
//   }
// ]

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)

  return (
    <Container>
      <p>2 tarefas marcadas como : &quot;categoria&quot; e &quot;termo&quot;</p>
      <ul>
        {itens.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
