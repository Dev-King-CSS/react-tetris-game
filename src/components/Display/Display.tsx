import { StyledDisplay } from "./Display.styles"

type DisplayProps = {
  gameOver?: boolean
  text: string
}

const Display: React.FC<DisplayProps> = ({
  gameOver,
  text,
}: DisplayProps): JSX.Element => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
)

export default Display
