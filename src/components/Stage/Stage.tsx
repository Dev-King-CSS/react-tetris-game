import React from "react"
import Cell from "../Cell/Cell"
import { StyledStage } from "./Stage.styles"
import { TETROMINOS } from "../../setup"

export type STAGECELL = [keyof typeof TETROMINOS]
export type StageProps = { stage: STAGECELL[][] }

const Stage: React.FC<StageProps> = ({
  stage,
}: StageProps): JSX.Element => (
  <StyledStage>
    {stage.map(row =>
      row.map((cell, x) => <Cell key={x} type={cell[0]} />)
    )}
  </StyledStage>
)

export default Stage
