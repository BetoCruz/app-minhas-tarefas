import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}
const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar Javascrip revendo o exercício do modulo 7',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'Estudar Javascrip'
    },
    {
      id: 2,
      descricao: 'Estudar matedial de apoio',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar Typescript'
    },
    {
      id: 3,
      descricao: 'Praticar a construção de uma landing page',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar Bootstrap'
    },
    {
      id: 4,
      descricao:
        'Estudar de maneira estruturada e refazer os primeniros prjetoa com react',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar Javascrip'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
