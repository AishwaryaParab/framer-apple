import Button from '../Button'
import Container from '../Container'

const Hero = () => {
  return (
    <div className="bg-background text-white h-[300vh]">
        <Container>
            <h1 className="text-5xl font-bold">
                All Apple Originals. <br />
                Only on Apple TV+.
            </h1>
            <Button size="large" className="text-background">Stream now</Button>
            <p className="font-semibold">Watch on the TV app.</p>
        </Container>
    </div>
  )
}

export default Hero