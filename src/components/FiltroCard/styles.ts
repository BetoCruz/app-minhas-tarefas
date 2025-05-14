import styled from 'styled-components'
import { Props } from './index'

type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsSemLegendaEContador>`
  padding: 8px;
  border: 2px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  background-color${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
`
export const Contador = styled.span`
  font-weigth: bold;
  font-size: 24px;
  display: block;
`
export const Label = styled.span`
  font-size: 14px;
`
