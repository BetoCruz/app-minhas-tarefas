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
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefas encontradas como: todas ${
        termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''
      }`
    } else {
      mensagem = `${quantidade} tarefas encontradas como: "${`${criterio}=${valor}`} ${
        termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''
      }"`
    }
  }

  const tarefas = filtraTarefas()

  return (
    <Container>
      <p>
        {tarefas.length} tarefas marcadas como:&quot;{`${criterio}=${valor}`}
        &quot; {termo !== undefined && termo.length > 0 ? `e "${termo}"` : ``}
      </p>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>
      <ul>
        {tarefas.map((t) => (
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
