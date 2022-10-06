import {Container, Logo} from "./Header.style";

const Header = () => {
    return (
        <Container>
            <div>
                <Logo src='/images/logo.png' />
            </div>

            <p>Encontre o professor perfeito!</p>
        </Container>
    )
}

export default Header;