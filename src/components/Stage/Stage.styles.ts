import styled from "styled-components"
import { STAGE_WIDTH, STAGE_HEIGHT } from "../../setup"

export const StyledStage = styled.div`
  display: grid;
  grid-template-columns: repeat(${STAGE_WIDTH}, 30px);
  grid-template-rows: repeat(${STAGE_HEIGHT}, 30px);
  grid-gap: 1.5px;
  border: 1.5px solid #777;
  background: #222;
`
