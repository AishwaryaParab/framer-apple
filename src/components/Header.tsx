import Button from "./Button"
import Container from "./Container"

const Header = () => {
  return (
    <>
        <header className="bg-backgroundContrast text-white">
          <Container className="flex items-center min-h-11">
            <a href="/" className="h-11 flex items-center text-xl">
              🍎 <span className="sr-only">Back to homepage</span>
            </a>
          </Container>
        </header>
        <div className="bg-backgroundContrast px-6 sticky top-0">
          <Container className="flex items-center justify-between min-h-11">
            <p className="text-white text-xl font-semibold">Apple TV+</p>
            <Button size="small">Stream Now</Button>
          </Container>
        </div>
    </>
  )
}

export default Header