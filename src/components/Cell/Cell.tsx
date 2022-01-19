import { memo } from "react"
import { StyledCell } from "./Cell.styles"
import { TETROMINOS } from "../../setup"

type CellProps = { type: keyof typeof TETROMINOS }

const Cell: React.FC<CellProps> = ({ type }: CellProps): JSX.Element => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
)

export default memo(Cell)
